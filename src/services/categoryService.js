// src/services/categoryService.js
import api from "./api";

const categoryService = {
  async getCategories() {
    const res = await api.get("/products/categories");

    // HARD GUARD
    if (
      !res.data ||
      typeof res.data !== "object" ||
      !Array.isArray(res.data.results)
    ) {
      throw new Error("Invalid category API response");
    }

    // ✅ RETURN ARRAY ONLY
    return res.data.results;
  },
};

export default categoryService;
