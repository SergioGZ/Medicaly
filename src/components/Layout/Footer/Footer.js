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
              <Image src="/images/logoMedicaly.png" alt="Medicaly" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="/terms">Términos y condiciones</Link>
              <Link href="/politics">Política de privacidad</Link>
              <Link href="/contact">Contacto</Link>
              <Link href="/faqs">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="red" icon="google" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>© 2024 Medicaly</span>
        </div>
      </Container>
    </div>
  )
}
