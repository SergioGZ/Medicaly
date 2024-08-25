import { Button, Container, Image } from "semantic-ui-react"
import { Link } from "next/link"
import styles from "./BannerAd.module.scss"

export function BannerAd(props) {
  const { title, subtitle, btnTitle, btnLink, wallpaper } = props

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />
      <div className={styles.gradient}>
        <Container className={styles.containerInfo}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <Button as={Link} to={btnLink} primary>
            {btnTitle}
          </Button>
        </Container>
      </div>
    </div>
  )
}
