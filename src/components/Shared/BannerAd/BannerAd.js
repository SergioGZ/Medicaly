import { Button, Container, Image } from "semantic-ui-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Medicine } from "@/api"
import styles from "./BannerAd.module.scss"

const medicineCtrl = new Medicine()

export function BannerAd(props) {
  const { wallpaper } = props
  const [medicine, setMedicine] = useState(null)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await medicineCtrl.getRandomMedicine()
        // Generar descuento aleatorio entre 5 y 20, en múltiplos de 5
        const randomDiscount = Math.floor(Math.random() * 4) * 5 + 5
        setDiscount(randomDiscount)
        setMedicine(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (!medicine) return null

  const medicineImage = medicine.attributes.cover?.data?.attributes?.url

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />
      <div className={styles.gradient}>
        <Container className={styles.containerInfo}>
          <div className={styles.content}>
            {medicineImage && (
              <div className={styles.medicineImage}>
                <Image src={medicineImage} alt={medicine.attributes.title} />
              </div>
            )}
            <div className={styles.info}>
              <h3>{medicine.attributes.title}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>
                  {medicine.attributes.price.toFixed(2)}€
                </span>
                <span className={styles.discount}>-{discount}%</span>
              </div>
              <h3>¡Oferta especial por tiempo limitado!</h3>
              <Button as={Link} href={`/${medicine.attributes.slug}`} primary>
                Ver producto
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
