import { ENV, authFetch } from "@/utils"

export class Wishlist {
  async check(userId, medicineId) {
    try {
      const filterUser = `filters[user][id][$eq][0]=${userId}`
      const filterMedicine = `filters[medicine][id][$eq][1]=${medicineId}`
      const urlParams = `${filterUser}&${filterMedicine}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

      const response = await authFetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      if (result.data.length === 0) {
        return false
      }

      return result.data[0]
    } catch (error) {
      throw error
    }
  }

  async add(userId, medicineId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: userId,
            medicine: medicineId,
          },
        }),
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result.data
    } catch (error) {
      throw error
    }
  }

  async delete(wishlistId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${wishlistId}`

      const params = {
        method: "DELETE",
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result.data
    } catch (error) {
      throw error
    }
  }

  async getAll(userId) {
    try {
      const filterUser = `filters[user][id][$eq][0]=${userId}`
      const populate = `populate[0]=medicine&populate[1]=medicine.cover`
      const urlParams = `${filterUser}&${populate}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

      const response = await authFetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result.data
    } catch (error) {
      throw error
    }
  }
}
