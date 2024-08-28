import { Medicine } from "@/api"

export { default } from "./medicine"

export async function getServerSideProps(context) {
  const { medicine } = context.params

  const medicineCtrl = new Medicine()
  const response = await medicineCtrl.getMedicineBySlug(medicine)

  return {
    props: {
      medicine: response,
    },
  }
}
