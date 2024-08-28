import { Button, Container, Icon, Image } from "semantic-ui-react"
import { fn } from "@/utils"
import styles from "./Panel.module.scss"
import { WishlistIcon } from "@/components/Shared"

export function Panel(props) {
  const { medicineId, medicine } = props
  const category = medicine.category.data

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
              {medicine.price} €
            </span>
            <WishlistIcon medicineId={medicineId} className={styles.heart} />
          </div>

          <Button primary fluid>
            Comprar ahora
          </Button>
        </div>
      </div>
    </Container>
  )
}
