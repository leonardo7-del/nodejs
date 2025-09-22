import axios from 'axios';
import { products } from '../data/products';

// Función para obtener todos los productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get('/products.json', { timeout: 5000 });
    const data = Array.isArray(response.data) ? response.data : [];
    return { data };
  } catch (error) {
    console.warn('No se pudo cargar /products.json, usando datos locales', error);
    return { data: products };
  }
};

// Función para obtener un producto por ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get('/products.json', { timeout: 5000 });
    const list = Array.isArray(response.data) ? response.data : [];
    const product = list.find(p => String(p.id) === String(id));
    if (product) return { data: product };
  } catch (error) {
    console.warn('Fallo leyendo /products.json, buscando en datos locales', error);
  }
  const localProduct = products.find(p => String(p.id) === String(id));
  if (localProduct) return { data: localProduct };
  throw new Error('Producto no encontrado');
};

// Función para obtener categorías
export const fetchCategories = async () => {
  try {
    const response = await axios.get('/products.json', { timeout: 5000 });
    const list = Array.isArray(response.data) ? response.data : [];
    const categories = [...new Set(list.map(p => p?.data?.category).filter(Boolean))];
    return { data: categories };
  } catch (error) {
    console.warn('No se pudieron obtener categorías de /products.json', error);
    return { data: [] };
  }
};