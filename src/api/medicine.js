import { ENV } from "@/utils"

export class Medicine {
  async getLatestPublished({ limit, categoryId }) {
    try {
      const filterCategory =
        categoryId && `filters[category][id][$eq]=${categoryId}`
      const paginationLimit = `pagination[limit]=${limit}`
      const sort = `sort[0]=publishedAt:DESC`
      const populate = `populate=*`
      const urlParams = `${filterCategory}&${paginationLimit}&${sort}&${populate}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MEDICINE}?${urlParams}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async getMedicinesByCategorySlug({ slug, page }) {
    try {
      const filters = `filters[category][slug][$eq]=${slug}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=8`
      const sort = `sort[0]=publishedAt:DESC`
      const populate = `populate=*`
      const urlParams = `${filters}&${pagination}&${sort}&${populate}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MEDICINE}?${urlParams}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async searchMedicines(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=12`
      const sort = `sort[0]=publishedAt:DESC`
      const populate = `populate=*`
      const urlParams = `${filters}&${pagination}&${sort}&${populate}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MEDICINE}?${urlParams}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }

  async getMedicineBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`
      const populate = `populate[0]=cover&populate[1]=category&populate[2]=category.icon`
      const urlParams = `${filters}&${populate}`

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MEDICINE}?${urlParams}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result.data[0]
    } catch (error) {
      throw error
    }
  }

  async getMedicineById(id) {
    try {
      const populate = `populate[0]=cover&populate[1]=category`
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MEDICINE}/${id}?${populate}`

      const response = await fetch(url)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      throw error
    }
  }
}
