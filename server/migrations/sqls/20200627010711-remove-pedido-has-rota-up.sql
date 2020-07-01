DROP TABLE IF EXISTS "pedido_has_rota";
ALTER TABLE pedido ADD COLUMN viagem_id INTEGER REFERENCES viagem (id);