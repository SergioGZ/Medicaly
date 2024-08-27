import { Medicine } from "@/api"

export { default } from "./search"

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context

  const medicineCtrl = new Medicine()
  const response = await medicineCtrl.searchMedicines(s, page)

  return {
    props: {
      medicines: response.data,
      pagination: response.meta.pagination,
      searchText: s,
    },
  }
}
