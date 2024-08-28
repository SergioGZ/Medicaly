import { Container } from "semantic-ui-react"
import styles from "./Info.module.scss"

export function Info(props) {
  const { medicine } = props

  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{medicine.summary}</p>
      </div>
    </Container>
  )
}
