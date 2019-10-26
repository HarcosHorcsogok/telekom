CREATE TABLE person(
   PERSON_ID      INT      NOT NULL,
   NAME           TEXT     NOT NULL,
   EMAIL          TEXT     NOT NULL,
   ROLE           CHAR(20) NOT NULL,
   PHONE          CHAR(50)
);

CREATE TABLE skills(
  PERSON_ID INT         NOT NULL,
  SKILL     VARCHAR(30) NOT NULL
);

CREATE TABLE teams(
  TEAM_ID INT      NOT NULL,
  NAME    CHAR(50) NOT NULL
);

CREATE TABLE team_members(
  PERSON_ID INT NOT NULL,
  TEAM_ID   INT NOT NULL
);

CREATE TABLE technologies(
  TECHNOLOGY TEXT NOT NULL,
  TEAM_ID    INT  NOT NULL
);

.mode csv
.separator ;
.import person.csv person