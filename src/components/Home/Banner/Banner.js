import { Image } from "semantic-ui-react"
import styles from "./Banner.module.scss"

export function Banner() {
  const wallpaper = "/images/banner3.jpg"

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />
      <div className={styles.gradient}>
        <h2 className={styles.title}>Tu salud no espera, nosotros tampoco</h2>
      </div>
    </div>
  )
}
