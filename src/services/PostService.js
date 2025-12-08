import Api from "./Api";

export const PostService = {
  get: async (params = {}) => {
    try {
      const response = await Api.get("/berita/opd/sub1", { params });
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
};
