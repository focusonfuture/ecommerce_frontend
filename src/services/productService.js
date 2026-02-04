// src/services/productService.js
import api from "./api";

const productService = {
  async getProducts(page = 1) {
    const res = await api.get("/products/products/", {
      params: { page },
    });

    // If backend returned HTML, endpoint is wrong
    if (typeof res.data === "string") {
      throw new Error("Backend returned HTML instead of JSON");
    }

    // Validate paginated response
    if (!res.data || !Array.isArray(res.data.results)) {
      throw new Error("Invalid products API response shape");
    }

    return {
      products: res.data.results,
      total: res.data.count,
      next: res.data.next,
      previous: res.data.previous,
    };
  },
};

export default productService;
