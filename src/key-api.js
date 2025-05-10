import axios from "axios";

const ACCESS_KEY = "m9HqyYxW26xA9ZLP3KfDmK6Np1Fj1sE_AfGg11xv484"
axios.defaults.baseURL = "https://api.unsplash.com"

export const fetchImages = async (query, page = 1) => {
    const response = await axios.get(`/search/photos`, {
        params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
          }, 
    })
    return response.data
}