USE markIt;


INSERT INTO markIt.Categories (name, UserUuid, createdAt, updatedAt) 
VALUES  ("Recipes", 1,"2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Fashion", 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Craft", 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00");

INSERT INTO markIt.Subcategories (name, UserUuid, CategoryId, createdAt, updatedAt) 
VALUES  ("Burgers", 1, 1,"2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Skirts", 1, 2, "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("DIY table", 1, 3, "2018-01-01 01:00:00", "2018-01-01 01:00:00");


INSERT INTO markIt.Bookmarks (name, description, url, UserUuid, CategoryId, SubcategoryId, createdAt, updatedAt)
VALUES ("Food", "A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat.", "https://www.allrecipes.com/recipe/49404/juiciest-hamburgers-ever/", 1, 1, 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00");
