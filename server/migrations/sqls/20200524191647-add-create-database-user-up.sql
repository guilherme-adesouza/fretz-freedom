DROP ROLE IF EXISTS fretz;
CREATE USER fretz WITH PASSWORD 'fretz_913162afcdae75583c';

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO fretz;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO fretz;