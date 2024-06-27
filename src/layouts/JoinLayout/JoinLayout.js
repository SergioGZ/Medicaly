import Link from "next/link"
import { Icon, Image, Header } from "semantic-ui-react"
import { useRouter } from "next/router"
import { useAuth } from "@/hooks"
import styles from "./JoinLayout.module.scss"

export function JoinLayout(props) {
  const { children } = props
  const { user } = useAuth()
  const router = useRouter()

  if (user) {
    router.push("/") // Redirect to home if user is logged in
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Icon name="close" size="big" />
        </Link>
      </div>
      <div className={styles.blockLeft}>
        <Link href="/">
          <Image src="/images/logoMedicaly.png" alt="logo" />
        </Link>
        {children}
      </div>
      <div className={styles.blockRight} />
    </div>
  )
}
