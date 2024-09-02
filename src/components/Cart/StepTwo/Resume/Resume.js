import { useEffect, useState } from "react"
import { Button } from "semantic-ui-react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useRouter } from "next/router"
import { forEach, map } from "lodash"
import { useAuth, useCart } from "@/hooks"
import { Cart } from "@/api"
import { fn } from "@/utils"
import styles from "./Resume.module.scss"

const cartCtrl = new Cart()

export function Resume(props) {
  const { medicines, selectedAddress } = props
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const { deleteAllItems } = useCart()
  const router = useRouter()

  useEffect(() => {
    let totalTemp = 0

    forEach(medicines, (medicine) => {
      totalTemp += fn.calcTotalPrice(
        medicine.attributes.price,
        medicine.quantity
      )
    })
    setTotal(totalTemp.toFixed(2))
  }, [medicines])

  if (!total) return null

  const onPay = async () => {
    setLoading(true)

    if (!stripe || !elements) {
      setLoading(false)
      return
    }

    const cardElement = elements.getElement(CardElement)
    const result = await stripe.createToken(cardElement)

    if (result.error) {
      console.error(result.error.message)
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        medicines,
        user.id,
        selectedAddress
      )

      if (response.status === 200) {
        deleteAllItems()
        goToStepEnd()
      } else {
        console.error(response)
      }
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const goToStepEnd = () => {
    router.replace({ query: { ...router.query, step: 3 } })
  }

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {map(medicines, (medicine) => (
            <div key={medicine.id} className={styles.product}>
              <div>
                <p>{medicine.attributes.title}</p>
                <span>
                  {medicine.attributes.category.data.attributes.title}
                </span>
              </div>
              <span>
                {medicine.quantity > 0 && `${medicine.quantity} x `}
                {medicine.attributes.price}€
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>{total}€</span>
        </div>
        <Button
          primary
          fluid
          disabled={!selectedAddress}
          loading={loading}
          onClick={onPay}
        >
          Pagar
        </Button>
      </div>
    </div>
  )
}
