# FakeStore API 

Este proyecto permite interactuar con la API pública de [FakeStore](https://fakestoreapi.com/) directamente desde la terminal usando comandos en Node.js.
utliamos el metodo {argv} importado desde el modulo "node:process",que nos permite hacer peticiones por consola.

y podés:
- Consultar todos los productos
- Consultar un producto específico por ID
- Crear un nuevo producto
- Eliminar un producto por ID

 Uso:
Ejecutá los siguientes comandos desde la terminal:
➤ Obtener todos los productos: npm run start GET products
➤ Obtener un producto por ID:npm run start GET products/5
➤ Crear un nuevo producto: npm run start POST products "Remera Negra" 2500 "remeras"
➤ Eliminar un producto por ID: npm run start DELETE products/7

## Ver imagenes de ejemplos por consola de peticiones 
entrar en la carpeta: imgConsola
