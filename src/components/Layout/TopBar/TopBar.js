import { Image } from "semantic-ui-react"
import Link from "next/link"
import { Account, Menu } from "@/components/Layout"
import styles from "./TopBar.module.scss"

export function TopBar(props) {
  const { isOpenSearch } = props

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <Link href="/">
            <Image src="/images/logoMedicaly.png" alt="Medicaly" />
          </Link>
        </div>

        <div className={styles.center}>
          <Menu isOpenSearch={isOpenSearch} />
        </div>

        <div className={styles.right}>
          <Account />
        </div>
      </div>
    </div>
  )
}
