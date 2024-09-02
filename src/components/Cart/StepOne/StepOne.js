import { Basket } from "./Basket"
import { Resume } from "./Resume"
import { NoResult } from "@/components/Shared"
import styles from "./StepOne.module.scss"

export function StepOne(props) {
  const { medicines } = props

  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        {medicines?.length > 0 ? (
          <Basket medicines={medicines} />
        ) : (
          <NoResult text="No hay productos en el carrito" />
        )}
      </div>

      <div className={styles.right}>
        <Resume medicines={medicines} />
      </div>
    </div>
  )
}
