import Api from "./Api";

export const ProductService = {
    get: async (params = {}) => {
        try {
            const response = await Api.get('/jdih/produk-hukum', { params });
            return {
                success: true,
                data: response.data,
                message: 'Data berhasil diambil',
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw {
                success: false,
                error: error.response?.data?.message || error.message,
                status: error.response?.status,
            };
        }
    },
};
