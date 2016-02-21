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

COPY "user" (id, username, password, first_name, last_name, bio) FROM stdin;
1	duraseb	encrypted	Sebastian	Szulc	hacking with innovAgaile.com
\.

COPY organization (id, name, slug, lat, lon, blurb, description) FROM stdin;
1	UNICEF	unicef	40.7503928	73.9721646	The United Nations Children's Emergency Fund (UNICEF) is a United Nations program headquartered in New York City that provides long-term humanitarian and developmental assistance to children and mothers in developing countries. It is one of the members of the United Nations Development Group and its Executive Committee.	UNICEF was created by the United Nations General Assembly on December 11, 1946, to provide emergency food and healthcare to children in countries that had been devastated by World War II. Maurice Pate, American humanitarian and businessman, co-founded the United Nations Children's Emergency Fund (UNICEF) with Herbert Hoover in 1947. Pate served as its first executive director from 1947 until his death in 1965.[3] In 1953, UNICEF became a permanent part of the United Nations System and its name was shortened from the original United Nations International Children's Emergency Fund but it has continued to be known by the popular acronym based on this previous title.\n\nUNICEF relies on contributions from governments and private donors, UNICEF's total income for 2008 was $3,372,540,239.[4] Governments contribute two thirds of the organization's resources; private groups and some 6 million individuals contribute the rest through the National Committees. It is estimated that 91.8% of their revenue is distributed to Program Services.[5] UNICEF's programs emphasize developing community-level services to promote the health and well-being of children. UNICEF was awarded the Nobel Peace Prize in 1965 and the Prince of Asturias Award of Concord in 2006.\n\nSource: wikipedia.org
2	UNESCO	unesco	48.8461560	2.3031863	The United Nations Educational, Scientific and Cultural Organization (UNESCO) is a specialized agency of the United Nations (UN). Its purpose is to contribute to peace and security by promoting international collaboration through educational, scientific, and cultural reforms in order to increase universal respect for justice, the rule of law, and human rights along with fundamental freedom proclaimed in the United Nations Charter.	UNESCO pursues its objectives through five major programs: education, natural sciences, social/human sciences, culture and communication/information. Projects sponsored by UNESCO include literacy, technical, and teacher-training programmes, international science programmes, the promotion of independent media and freedom of the press, regional and cultural history projects, the promotion of cultural diversity, translations of world literature, international cooperation agreements to secure the world cultural and natural heritage (World Heritage Sites) and to preserve human rights, and attempts to bridge the worldwide digital divide. It is also a member of the United Nations Development Group.\n\nUNESCO's aim is "to contribute to the building of peace, the eradication of poverty, sustainable development and intercultural dialogue through education, the sciences, culture, communication and information". Other priorities of the organization include attaining quality Education For All and lifelong learning, addressing emerging social and ethical challenges, fostering cultural diversity, a culture of peace and building inclusive knowledge societies through information and communication.\n\nSource: wikipedia.org
\.
