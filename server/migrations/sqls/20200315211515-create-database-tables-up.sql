-- -----------------------------------------------------
-- Table "tipo_veiculo"
-- -----------------------------------------------------
CREATE TABLE  "tipo_veiculo" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "veiculo"
-- -----------------------------------------------------
CREATE TABLE  "veiculo" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "placa" VARCHAR(10) NOT NULL,
  "km" DOUBLE PRECISION NOT NULL,
  "capacidade_peso" DOUBLE PRECISION NOT NULL,
  "tara" DOUBLE PRECISION NOT NULL,
  "cor" VARCHAR(50),
  "tipo_veiculo_id" INT NOT NULL REFERENCES "tipo_veiculo" ("id"),
  "situacao" CHAR(2),
  "capacidade_volume" DOUBLE PRECISION NULL,
  "compartimento" INT NOT NULL
);


-- -----------------------------------------------------
-- Table "tipo_pessoa"
-- -----------------------------------------------------
CREATE TABLE  "tipo_pessoa" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "regiao"
-- -----------------------------------------------------
CREATE TABLE  "regiao" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "estado"
-- -----------------------------------------------------
CREATE TABLE  "estado" (
  "cod_estado" SERIAL PRIMARY KEY,
  "sigla" CHAR(2) NOT NULL,
  "nome" VARCHAR(72)
);


-- -----------------------------------------------------
-- Table "cidade"
-- -----------------------------------------------------
CREATE TABLE  "cidade" (
  "cod_cidade" SERIAL PRIMARY KEY,
  "nome" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2),
  "estado_cod_estado" INT NOT NULL REFERENCES "estado" ("cod_estado"),
  "cep" VARCHAR(9),
  "regiao_id" INT NULL REFERENCES "regiao" ("id")
);


-- -----------------------------------------------------
-- Table "pessoa"
-- -----------------------------------------------------
CREATE TABLE  "pessoa" (
  "id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(200) NOT NULL,
  "cpf_cnpj" VARCHAR(18) NOT NULL,
  "data_nascimento" VARCHAR(10),
  "cnh" VARCHAR(50),
  "tefelone" VARCHAR(20) NOT NULL,
  "situacao" CHAR(2),
  "email" VARCHAR(150),
  "rua" VARCHAR(200) NOT NULL,
  "cep" VARCHAR(9) NOT NULL,
  "complemento" VARCHAR(200),
  "numero" INT NOT NULL,
  "bairro" VARCHAR(150) NOT NULL,
  "tipo_pessoa_id" INT NOT NULL REFERENCES "tipo_pessoa" ("id"),
  "cidade_cod" INT NOT NULL REFERENCES "cidade" ("cod_cidade"),
  "latitude" DOUBLE PRECISION NOT NULL,
  "longetude" DOUBLE PRECISION NOT NULL
);


-- -----------------------------------------------------
-- Table "viagem"
-- -----------------------------------------------------
CREATE TABLE  "viagem" (
  "id" SERIAL PRIMARY KEY,
  "data_inicial" TIMESTAMP NOT NULL,
  "data_final" TIMESTAMP NULL,
  "veiculo_id" INT NOT NULL REFERENCES "veiculo" ("id"),
  "motorista_id" INT NOT NULL REFERENCES "pessoa" ("id"),
  "despesa" VARCHAR(30),
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "categoria_pedido"
-- -----------------------------------------------------
CREATE TABLE  "categoria_pedido" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "pedido"
-- -----------------------------------------------------
CREATE TABLE  "pedido" (
  "id" SERIAL PRIMARY KEY,
  "data_inicial" TIMESTAMP NOT NULL,
  "valor" VARCHAR(30) NOT NULL,
  "situacao" CHAR(2),
  "observacao" VARCHAR(200),
  "rua" VARCHAR(200) NOT NULL,
  "cep" VARCHAR(9) NOT NULL,
  "complemento" VARCHAR(200),
  "numero" INT NOT NULL,
  "bairro" VARCHAR(200) NOT NULL,
  "pessoa_id" INT NOT NULL  REFERENCES "pessoa" ("id"),
  "categoria_pedido_id" INT NOT NULL REFERENCES "categoria_pedido" ("id"),
  "data_entrega" TIMESTAMP NULL
);


-- -----------------------------------------------------
-- Table "grupo_item"
-- -----------------------------------------------------
CREATE TABLE  "grupo_item" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "item"
-- -----------------------------------------------------
CREATE TABLE  "item" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "quantidade" DOUBLE PRECISION NOT NULL,
  "valor_custo" VARCHAR(30) NOT NULL,
  "valor_venda" VARCHAR(30) NOT NULL,
  "situacao" CHAR(2),
  "unidade_medida" VARCHAR(20) NOT NULL,
  "volume" DOUBLE PRECISION NOT NULL,
  "peso" DOUBLE PRECISION NOT NULL,
  "grupo_item_id" INT NOT NULL REFERENCES "grupo_item" ("id")
);


-- -----------------------------------------------------
-- Table "usuario"
-- -----------------------------------------------------
CREATE TABLE "usuario" (
  "id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2),
  "img" TEXT,
  "senha" VARCHAR(200) NOT NULL,
  "admin" BOOLEAN NOT NULL,
  "super" BOOLEAN NOT NULL,
  "email" TEXT NOT NULL
);


-- -----------------------------------------------------
-- Table "tipo_auditoria"
-- -----------------------------------------------------
CREATE TABLE  "tipo_auditoria" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(200) NOT NULL,
  "situacao" CHAR(2)
);


-- -----------------------------------------------------
-- Table "auditoria"
-- -----------------------------------------------------
CREATE TABLE  "auditoria" (
  "id" SERIAL PRIMARY KEY,
  "situacao" CHAR(2),
  "data" TIMESTAMP NOT NULL,
  "tipo_auditoria_id" INT NOT NULL REFERENCES "tipo_auditoria" ("id"),
  "usuario_id" INT NOT NULL REFERENCES "usuario" ("id"),
  "descricao" VARCHAR(200) NOT NULL
);


-- -----------------------------------------------------
-- Table "pedido_has_item"
-- -----------------------------------------------------
CREATE TABLE  "pedido_has_item" (
  "id" SERIAL PRIMARY KEY,
  "pedido_id" INT NOT NULL REFERENCES "pedido" ("id"),
  "item_id" INT NOT NULL REFERENCES "item" ("id")
);


-- -----------------------------------------------------
-- Table "pedido_has_rota"
-- -----------------------------------------------------
CREATE TABLE  "pedido_has_rota" (
  "id" SERIAL PRIMARY KEY,
  "pedido_id" INT NOT NULL REFERENCES "pedido" ("id"),
  "rota_id" INT NOT NULL REFERENCES "viagem" ("id")
);
