import { Image } from "semantic-ui-react"
import Link from "next/link"
import { useState } from "react"
import { Account, Menu } from "@/components/Layout"
import styles from "./TopBar.module.scss"

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <Link href="/">
            <Image src="/images/logoMedicaly.png" alt="Medicaly" />
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          className={`${styles.burgerButton} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}
        >
          <Menu />
          <div className={styles.mobileAccount}>
            <Account />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <div className={styles.center}>
            <Menu />
          </div>
          <div className={styles.right}>
            <Account />
          </div>
        </div>
      </div>
    </div>
  )
}
