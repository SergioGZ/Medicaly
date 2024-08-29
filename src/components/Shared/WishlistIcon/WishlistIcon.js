import { useEffect, useState } from "react"
import { Icon } from "semantic-ui-react"
import classNames from "classnames"
import { Wishlist } from "@/api"
import { useAuth } from "@/hooks"
import styles from "./WishlistIcon.module.scss"

const wishlistCtrl = new Wishlist()

export function WishlistIcon(props) {
  const { medicineId, className, removeCallback } = props
  const { user } = useAuth()
  const [hasWishlist, setHasWishlist] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await wishlistCtrl.check(user.id, medicineId)
        setHasWishlist(response)
      } catch (error) {
        setHasWishlist(false)
        console.error(error)
      }
    })()
  }, [medicineId])

  const addWishlist = async () => {
    const response = await wishlistCtrl.add(user.id, medicineId)
    setHasWishlist(response)
  }

  const deleteWishlist = async () => {
    try {
      await wishlistCtrl.delete(hasWishlist.id)
      setHasWishlist(false)
      if (removeCallback) removeCallback()
    } catch (error) {
      console.error(error)
    }
  }

  if (hasWishlist === null) return null

  return (
    <div>
      <Icon
        name={hasWishlist ? "heart" : "heart outline"}
        onClick={hasWishlist ? deleteWishlist : addWishlist}
        className={classNames(styles.wishlistIcon, {
          [className]: className,
        })}
      />
    </div>
  )
}
