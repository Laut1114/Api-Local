USE tienda;

CREATE TABLE Cliente(
    id_cliente INT(8) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20),
    email VARCHAR(40),
    contraseña PASSWORD(16)
)

DESCRIBE Cliente;