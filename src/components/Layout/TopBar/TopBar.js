import { Image } from "semantic-ui-react"
import Link from "next/link"
import { Account, Menu } from "@/components/Layout"
import styles from "./TopBar.module.scss"

export function TopBar() {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <div className={styles.link}>
            <Link href="/">
              <Image src="/images/logoMedicaly.png" alt="Medicaly" />
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <Menu />
        </div>

        <div className={styles.right}>
          <Account />
        </div>
      </div>
    </div>
  )
}
