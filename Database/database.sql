CREATE database tienda;

USE tienda;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    contrasenia VARCHAR(16) NOT NULL
);

CREATE TABLE producto(
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(30) NOT NULL,
  descripcion VARCHAR(80),
  en_stock BOOLEAN NOT NULL,
  precio VARCHAR(10)
);

CREATE TABLE orden(
  id_orden INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
  id_producto INT,
  FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
  cantidad INT(4) NOT NULL
);

INSERT INTO orden(id_cliente, id_producto, cantidad) VALUES (3, 2, 4);

SELECT * FROM orden, producto, cliente;