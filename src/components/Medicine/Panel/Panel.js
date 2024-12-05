import { useState } from "react"
import { Button, Container, Icon, Image } from "semantic-ui-react"
import { useCart } from "@/hooks"
import styles from "./Panel.module.scss"
import { WishlistIcon } from "@/components/Shared"

export function Panel(props) {
  const { medicineId, medicine } = props
  const [loading, setLoading] = useState(false)
  const { addCart } = useCart()

  const category = medicine.category.data

  const addCartWrapper = () => {
    setLoading(true)
    addCart(medicineId)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={medicine.cover.data.attributes.url} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{medicine.title}</h2>
          <div className={styles.moreInfo}>
            <span>
              <Image src={category.attributes.icon.data.attributes.url} />
              {category.attributes.title}
            </span>
            <span>
              <Icon name="check" />
              En stock
            </span>
          </div>

          <div className={styles.price}>
            <span className={styles.finalPrice}>
              <Icon name="tag" />
              {medicine.price.toFixed(2)} €
            </span>
            <WishlistIcon medicineId={medicineId} className={styles.heart} />
          </div>

          <Button primary fluid loading={loading} onClick={addCartWrapper}>
            Añadir al carrito
          </Button>
        </div>
      </div>
    </Container>
  )
}
