USE meat;
DROP TABLE IF EXISTS meat;
CREATE TABLE meat (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE KEY,
    country_id TINYINT NULL,
    image VARCHAR(250) NOT NULL,
    calories_per_100g SMALLINT NULL,
    cooking_time_min SMALLINT NOT NULL,
    description VARCHAR(300) NOT NULL,
    meat_type VARCHAR(15) NULL,
    FOREIGN KEY (country_id) REFERENCES country(id)
);
ALTER TABLE meat AUTO_INCREMENT = 1;
INSERT INTO meat (name, country_id, image, calories_per_100g, cooking_time_min, description, meat_type)
VALUES ('Wagyu Beef', 2, 'wagyu-beef.jpg', 300, 60, 'Highly marbled, tender beef from Japan', 'BEEF'),
       ('Ribeye', 1, 'Ribeye.jpeg', 250, 0, 'American Ribeye', 'BEEF'),
       ('Chicken', 5, 'Chicken.jpg', 200, 120, 'Best chicken in the country', 'CHICKEN'),
       ('Lamb Shawarma', 7, 'lamb-shawarma.jpeg', 220, 90, 'Spit-roasted, seasoned lamb', 'LAMB');