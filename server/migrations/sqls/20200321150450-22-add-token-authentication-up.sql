CREATE TABLE token (
    id SERIAL PRIMARY KEY,
    "usuario_id" INT NOT NULL REFERENCES "usuario" ("id") ON DELETE CASCADE UNIQUE,
    "token" TEXT NOT NULL
);
