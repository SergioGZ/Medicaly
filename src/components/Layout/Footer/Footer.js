import Link from "next/link"
import { Container, Image, Button } from "semantic-ui-react"
import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="images/logoMedicaly.png" alt="Medicaly" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="google" icon="google" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>© 2024 Medicaly</span>
        </div>
      </Container>
    </div>
  )
}
