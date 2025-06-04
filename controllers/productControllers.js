
import fetch from 'node-fetch';

const BASE_URL = 'https://fakestoreapi.com/products';

export async function getAllProducts() {
 try {
   const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log("Productos disponibles:");
  data.forEach(p => {
    console.log(`#${p.id} - ${p.title} ($${p.price})`);
  });
 } catch (error) {
  console.log(error);
 }
}

export async function getProductById(id) {
 try {
   const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`Producto con ID ${id} no encontrado`);
  const data = await res.json();
  console.log("Producto:", data);
 } catch (error) {
  console.log(error);
 }
}

export async function createProduct(title, price, category) {
try {
    const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
      price: parseFloat(price),
      category
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  console.log("Producto creado:", data);
} catch (error) {
  console.log(error);
}
}

export async function deleteProduct(id) {
try {
    const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });

  const data = await res.json();
  console.log("Producto eliminado:", data);
} catch (error) {
  console.log(error);
}
}