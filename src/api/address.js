import { ENV, authFetch } from "@/utils"

export class Address {
  async create(data, userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...data,
            user: userId,
          },
        }),
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async getAll(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}&sort=id`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async update(data, addressId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }

      const response = await authFetch(url, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }
}
