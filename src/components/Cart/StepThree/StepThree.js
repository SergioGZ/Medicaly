import { Button, Icon } from "semantic-ui-react"
import Link from "next/link"
import styles from "./StepThree.module.scss"

export function StepThree() {
  return (
    <div className={styles.stepThree}>
      <div>
        <Icon name="check circle outline" />
        <h2>¡Gracias por la compra!</h2>
        <Button href="/account" primary>
          Ver pedido
        </Button>
      </div>
    </div>
  )
}
