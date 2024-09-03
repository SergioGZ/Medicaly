import { Container } from "semantic-ui-react"
import classNames from "classnames"
import { TopBar, Footer } from "@/components/Layout"
import styles from "./BasicLayout.module.scss"

export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />

      <Container fluid className={styles.container}>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  )
}
