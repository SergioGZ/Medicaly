import { Icon } from "semantic-ui-react"
import classNames from "classnames"
import styles from "./WishlistIcon.module.scss"

export function WishlistIcon(props) {
  const { medicineId, className } = props
  return (
    <div>
      <Icon
        name="heart"
        className={classNames(styles.wishlistIcon, {
          [className]: className,
        })}
      />
    </div>
  )
}
