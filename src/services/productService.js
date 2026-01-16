import axios from "axios";

const API_URL = "http://localhost:8000/api";

const productService = {
  async getProducts(page = 1) {
    const res = await axios.get(`${API_URL}/products/?page=${page}`);
    return res.data;
  }
};

export default productService;
