import { Button, Icon } from "semantic-ui-react"
import { DateTime } from "luxon"
import { useAuth } from "@/hooks"
import styles from "./Info.module.scss"

export function Info() {
  const { user } = useAuth()
  const createdAt = DateTime.fromISO(user.createdAt).toLocaleString(
    DateTime.DATE_FULL
  )

  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user outline" />
      </Button>
      <h3 className={styles.username}>{user.username}</h3>
      <h4 className={styles.email}>{user.email}</h4>
      <p className={styles.createdAt}>Miembro desde: {createdAt}</p>
    </div>
  )
}
