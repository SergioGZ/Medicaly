import { useState, useEffect } from "react"
import { Container, Image } from "semantic-ui-react"
import { DateTime } from "luxon"
import { Link } from "next/link"
import styles from "./Banner.module.scss"

export function Banner() {
  const wallpaper = "/images/banner3.jpg"

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />
      <h2 className={styles.title}>Tu salud no espera, nosotros tampoco</h2>
    </div>
  )
}