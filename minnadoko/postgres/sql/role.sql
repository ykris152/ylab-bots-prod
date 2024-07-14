create role authenticator noinherit login password 'password';

CREATE ROLE members_user nologin;
GRANT members_user TO authenticator;

GRANT usage ON SCHEMA api TO members_user;
GRANT all ON api.members TO members_user;
-- GRANT usage, SELECT ON SEQUENCE api.members_id_seq TO members_user;