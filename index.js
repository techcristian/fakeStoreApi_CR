
import { argv } from "node:process";
import { getAllProducts, getProductById, createProduct, deleteProduct } from './controllers/productControllers.js';

const [, , method, resourse, ...params] = argv;
const metodo = method.toUpperCase(); // Normalizamos a mayúsculas
const recurso=resourse.toLowerCase(); // aunque en el metodo find() convertimos cada indice en minuscula, se debe convertir recurso a minuscula tambien, porque luego lo usamos para comparacion if(recurso==="products")
const match = argv.find((arg) => /^products\/\d+$/.test(arg.toLowerCase()));
const id = match ? match.split("/")[1] : null;

async function main() {
   if (!metodo || !recurso) {
    console.log("Uso: npm run start <METHOD> <RESOURCE=products or products/id> [params]");
    return;
  }

  try {
    switch (metodo) {
      case 'GET':
        try {
          // Si es products/5
          if (recurso.startsWith('products/') && id) {
            if (/^\d+$/.test(id)) {// validar si el id es un numero
              console.log(` Consultando producto con ID: ${id}`);
              await getProductById(id);
            }
            
            // Si es solo "products"
          } else if (recurso === 'products') {//argv[3].toLowerCase()
            console.log(" Consultando todos los productos...");
            await getAllProducts();

            // Otro recurso
          } else {
            console.log(" El ID debe ser un número válido.");
          }
        } catch (error) {
          console.error(error.message);
        }
        break;

      case 'POST':
        const [title, price, category] = params;
       
        if (!title || !price || !category) {
          console.log("Uso: npm run start POST products <title> <price> <category>");
          return;
        }
        //validacion si el price no es numerico
        if(Number(price)) {
          await createProduct(title, price, category);
        } else {
          console.log("El paramametro de <price>, debe ser un digito numerico!")
        }
       
        break;

      case 'DELETE':

        if (!recurso.startsWith('products/') || !id) {
          console.log(" Uso correcto: npm run start DELETE products/<id>");
          break;
        }
        // si el id NO es numerico.
        if (!/^\d+$/.test(id)) {
          console.log(" El ID debe ser un número válido.");
          break;
        }

        console.log(` Eliminando producto con ID: ${id}`);
        await deleteProduct(id);
        break;

      default:
        console.log("Método no reconocido. Usa GET, POST o DELETE.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();