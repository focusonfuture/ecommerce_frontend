import api from "./api";

const categoryService = {
  async getMenuCategories() {
    const res = await api.get("/categories/");
    
    // Only categories allowed in menu
    return res.data.filter(cat => cat.show_in_menu);
  },
};

export default categoryService;
