CREATE TABLE  "pedido_has_rota" (
  "id" SERIAL PRIMARY KEY,
  "pedido_id" INT NOT NULL REFERENCES "pedido" ("id"),
  "rota_id" INT NOT NULL REFERENCES "viagem" ("id")
);

ALTER TABLE pedido DROP COLUMN viagem_id;