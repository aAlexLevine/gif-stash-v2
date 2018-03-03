DROP DATABASE IF EXISTS stash;

CREATE DATABASE stash;

USE stash;

CREATE TABLE storage (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(400) NOT NULL,
    tag varchar(20) DEFAULT "" NOT NULL,
    PRIMARY KEY (ID)
);

-- ALTER TABLE storage ADD UNIQUE INDEX(pageid, name);