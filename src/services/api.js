const BASE_URL = 'https://api.samudrawasesa.co.id/api';

export async function getPackages() {
    try {
        const response = await fetch(`${BASE_URL}/landing/paket`);
        const data = await response.json();
        if (data.success) {
            return data.metadata;
        }
        throw new Error(data.message || 'Gagal mengambil data paket');
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;
    }
}

export async function registerUser(formData) {
    try {
        const response = await fetch(`${BASE_URL}/landing/registrasi`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        if (data.success || data.code === 200) { // Adjust based on actual success response structure if needed
            return data;
        }
        throw new Error(data.message || 'Gagal melakukan registrasi');
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}
