USE tienda;

CREATE TABLE cliente(
    id_cliente INTEGER(5) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE,
    contrasenia VARCHAR(16) NOT NULL
);

CREATE TABLE producto(
    id_producto INTEGER(5) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(80),
    en_stock BOOLEAN NOT NULL,
    precio VARCHAR(10) NOT NULL
);

CREATE TABLE orden(
    id_orden INTEGER(5) PRIMARY KEY AUTO_INCREMENT,
    id_producto INTEGER(5),
    id_cliente INTEGER(5),
    cantidad INTEGER(4) NOT NULL,
    FOREIGN KEY id_producto REFERENCES producto(id_producto),
    FOREIGN KEY id_cliente REFERENCES cliente(id_cliente),
);

DESCRIBE orden;