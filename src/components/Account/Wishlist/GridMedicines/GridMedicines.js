import Link from "next/link"
import { map } from "lodash"
import { WishlistIcon } from "@/components/Shared"
import styles from "./GridMedicines.module.scss"

export function GridMedicines(props) {
  const { wishlist, onReload } = props

  return (
    <div className={styles.gridMedicines}>
      {map(wishlist, (item) => {
        const medicine = item.attributes.medicine.data
        const cover = medicine.attributes.cover.data

        return (
          <div key={item.id} className={styles.medicine}>
            <Link href={`/${medicine.attributes.slug}`}>
              <div>
                <img
                  src={cover.attributes.url}
                  alt={medicine.attributes.title}
                />
              </div>

              <div>
                <span className={styles.title}>
                  {medicine.attributes.title}
                </span>
                <span className={styles.price}>
                  {medicine.attributes.price} €
                </span>
              </div>
            </Link>
            <WishlistIcon
              medicineId={medicine.id}
              className={styles.wishlistIcon}
              removeCallback={onReload}
            />
          </div>
        )
      })}
    </div>
  )
}
