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
}
