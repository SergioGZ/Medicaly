import { useEffect, useState } from "react"
import { Button } from "semantic-ui-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { forEach } from "lodash"
import { fn } from "@/utils"
import styles from "./Resume.module.scss"

export function Resume(props) {
  const { medicines } = props
  const router = useRouter()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0
    forEach(medicines, (medicine) => {
      const price = medicine.attributes.price
      const quantity = medicine.quantity
      total += fn.calcTotalPrice(price, quantity)
    })

    setTotal(total)
  }, [medicines])

  const goToStepTwo = () => {
    router.replace({ query: { ...router.query, step: 2 } })
  }

  if (!total) return null

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Subtotal</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </div>

        <Button primary fluid onClick={goToStepTwo}>
          Proceder al pago
        </Button>

        <Link href="/">Continuar comprando</Link>
      </div>
    </div>
  )
}
