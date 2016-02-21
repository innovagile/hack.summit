DROP TABLE IF EXISTS organization;
CREATE TABLE organization (
  id bigserial PRIMARY KEY,
  name CHARACTER VARYING(255),
  slug CHARACTER VARYING(255),
  lat numeric(10, 7),
  lon numeric(10, 7),
  blurb text,
  description text
);

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
  id bigserial PRIMARY KEY,
  username character varying(32),
  password character varying(64),
  first_name character varying(32),
  last_name character varying(32),
  bio text
);

DROP TABLE IF EXISTS user_organization;
CREATE TABLE user_organization (
  id bigserial PRIMARY KEY,
  user_id bigint NOT NULL,
  organization_id bigint NOT NULL
);
