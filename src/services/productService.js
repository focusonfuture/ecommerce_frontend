import axios from "axios";

const API_URL = "https://admin.nikandu.in/";

const productService = {
  async getProducts(page = 1) {
    const res = await axios.get(`${API_URL}/products/?page=${page}`);
    return res.data;
  }
};

export default productService;
