DROP TABLE IF EXISTS api.members;

CREATE SCHEMA api;

CREATE TABLE api.members (
  student_id text NOT NULL PRIMARY KEY,
  display_name text NOT NULL,
  member_level int,
  laboratory boolean NOT NULL DEFAULT FALSE,
  class boolean NOT NULL DEFAULT FALSE,
  in_univ boolean NOT NULL DEFAULT FALSE,
  out_univ boolean NOT NULL DEFAULT FALSE,
  exp_room boolean NOT NULL DEFAULT FALSE,
  workshop boolean NOT NULL DEFAULT FALSE,
  central_building boolean NOT NULL DEFAULT FALSE,
  gym boolean NOT NULL DEFAULT FALSE,
  work_in_remote boolean NOT NULL DEFAULT FALSE,
  home boolean NOT NULL DEFAULT TRUE,
  activity int NOT NULL DEFAULT 0,
  created_at TIMESTAMP default current_timestamp NOT NULL
);