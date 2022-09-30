/*product DB Design*/

CREATE TABLE products(
    productid VARCHAR(11) NOT NULL PRIMARY KEY,
    title VARCHAR(280) NOT NULL,
    image VARCHAR NOT NULL,
    description VARCHAR(325) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    quantity VARCHAR(11) NOT NULL,
    created_at TIMESTAMP NOT NULL
);
CREATE INDEX idx_pid ON products(productid);

INSERT INTO products(
	productid, title, image, description, price, quantity, created_at)
	VALUES ('100001', 'T-Shirts', 'https://picsum.photos/200/300', 'Pima cotton unisex t-shirt', 19.99, '1000', '2022-09-02'), ('100002', 'Pants', 'https://picsum.photos/200/300', 'Fitted twill pants', 39.99, '800', '2022-09-02'),
    ('100003', 'Jacket', 'https://picsum.photos/200/300', 'Structured jacket for layering', 54.99, '800', '2022-09-02');