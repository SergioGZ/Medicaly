import { useState, useEffect } from "react"
import { size } from "lodash"
import { Wishlist as WishlistCtrl } from "@/api"
import { useAuth } from "@/hooks"
import { NoResult } from "@/components/Shared"
import { GridMedicines } from "./GridMedicines"
import style from "./Wishlist.module.scss"

const wishlistCtrl = new WishlistCtrl()

export function Wishlist() {
  const { user } = useAuth()
  const [wishlist, setWishlist] = useState(null)
  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await wishlistCtrl.getAll(user.id)
        setWishlist(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [reload])

  return size(wishlist) === 0 ? (
    <NoResult text="No hay medicamentos en tu lista de deseos" />
  ) : (
    <GridMedicines wishlist={wishlist} onReload={onReload} />
  )
}
