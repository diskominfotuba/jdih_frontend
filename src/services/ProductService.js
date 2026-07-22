import Api from "./Api";

export const ProductService = {
  get: async (params = {}) => {
    try {
      const response = await Api.get("/jdih/produk-hukum", { params });
      return {
        success: true,
        data: response.data,
        message: "Data berhasil diambil",
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw {
        success: false,
        error: error.response?.data?.message || error.message,
        status: error.response?.status,
      };
    }
  },

  getById: async (id) => {
    try {
      const response = await Api.get("/jdih/produk-hukum", {
        params: { per_page: 1000 },
      });

      const product = response.data.data.find(
        (item) => item.id === parseInt(id)
      );

      if (!product) {
        throw new Error("Data tidak ditemukan");
      }

      return {
        success: true,
        data: product,
        message: "Data berhasil diambil",
      };
    } catch (error) {
      console.error("Error fetching detail:", error);
      throw {
        success: false,
        error: error.response?.data?.message || error.message,
        status: error.response?.status,
      };
    }
  },
};
