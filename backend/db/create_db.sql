DROP TABLE IF EXISTS parson;
CREATE TABLE person(
   PERSON_ID      INT      NOT NULL,
   NAME           TEXT     NOT NULL,
   EMAIL          TEXT     NOT NULL,
   ROLE           CHAR(20) NOT NULL,
   TEAM_ID        INT      NOT NULL
);

DROP TABLE IF EXISTS skills;
CREATE TABLE skills(
  PERSON_ID INT         NOT NULL,
  SKILL     VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS teams;
CREATE TABLE teams(
  TEAM_ID INT      NOT NULL,
  NAME    CHAR(50) NOT NULL
);

DROP TABLE IF EXISTS technologies;
CREATE TABLE technologies(
  TECHNOLOGY TEXT NOT NULL,
  TEAM_ID    INT  NOT NULL
);

.mode csv
.separator ;
.import person.csv person