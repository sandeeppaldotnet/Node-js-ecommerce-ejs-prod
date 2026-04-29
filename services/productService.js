const axios = require('axios');

const API = 'https://fakestoreapi.com/products';

// Fallback data (used if API fails)
const fallbackProducts = [
  {
    id: 1,
    title: "Demo Product 1",
    price: 29.99,
    description: "Fallback product (API failed)",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    title: "Demo Product 2",
    price: 49.99,
    description: "Fallback product (API failed)",
    image: "https://via.placeholder.com/200"
  }
];

exports.getAllProducts = async () => {
  try {
    const res = await axios.get(API, { timeout: 5000 });
    return res.data;
  } catch (error) {
    console.error("API Failed → Using fallback data");
    return fallbackProducts;
  }
};

exports.getProductById = async (id) => {
  try {
    const res = await axios.get(`${API}/${id}`, { timeout: 5000 });
    return res.data;
  } catch (error) {
    return fallbackProducts.find(p => p.id == id) || fallbackProducts[0];
  }
};