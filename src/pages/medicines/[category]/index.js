import { Category, Medicine } from "@/api"
export { default } from "./category"

export async function getServerSideProps(context) {
  const { query, params } = context
  const { page = 1 } = query
  const { category } = params

  const categoryCtrl = new Category()
  const responseCategory = await categoryCtrl.getBySlug(category)

  const medicineCtrl = new Medicine()
  const responseMedicines = await medicineCtrl.getMedicinesByCategorySlug({
    slug: category,
    page,
  })

  return {
    props: {
      category: responseCategory.data[0],
      medicines: responseMedicines.data,
      pagination: responseMedicines.meta.pagination,
    },
  }
}
