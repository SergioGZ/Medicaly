import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Medicine } from "@/api"
import { useCart } from "@/hooks"
import { CartLayout } from "@/layouts"
import { Cart } from "@/components/Cart"

const medicineCtrl = new Medicine()

export default function CartPage() {
  const {
    query: { step = 1 },
  } = useRouter()

  const currentStep = Number(step)
  const [medicines, setMedicines] = useState(null)
  const { cart } = useCart()

  useEffect(() => {
    ;(async () => {
      try {
        const data = []
        for await (const item of cart) {
          const response = await medicineCtrl.getMedicineById(item.id)
          data.push({ ...response.data, quantity: item.quantity })
        }
        setMedicines(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])

  return (
    <>
      <CartLayout>
        {currentStep === 1 && <Cart.StepOne medicines={medicines} />}
        {currentStep === 2 && <Cart.StepTwo medicines={medicines} />}
        {currentStep === 3 && <Cart.StepThree medicines={medicines} />}
      </CartLayout>
    </>
  )
}
