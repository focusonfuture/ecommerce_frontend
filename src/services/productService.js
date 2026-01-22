import api from "./api";

const productService = {
  async getProducts(page = 1) {
    const res = await api.get("/products/", {
      params: { page },
    });

    // Django view may return HTML → catch it early
    if (typeof res.data === "string") {
      throw new Error(
        "Backend returned HTML, not JSON. /products/ is not an API endpoint."
      );
    }

    if (!Array.isArray(res.data)) {
      throw new Error("Expected product array from backend");
    }

    return res.data;
  },
};

export default productService;
