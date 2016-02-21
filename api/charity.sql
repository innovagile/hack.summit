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