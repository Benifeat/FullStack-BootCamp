USE meat;

DROP TABLE IF EXISTS country;

CREATE TABLE country (
    id TINYINT NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE KEY,
    continent VARCHAR(15) NOT NULL,
    flag VARCHAR(250) NULL,
    description VARCHAR(500) NULL
);

INSERT INTO country (id, name, continent)
VALUES (1, 'United States', 'North America'),
       (2, 'Japan', 'Asia'),
       (3, 'Australia', 'Australia'),
       (4, 'Brazil', 'South America'),
       (5, 'France', 'Europe'),
       (6, 'Spain', 'Europe'),
       (7, 'Israel', 'Asia');