import Link from "next/link"
import { map } from "lodash"
import { fn } from "@/utils"
import styles from "./GridMedicines.module.scss"

export function GridMedicines(props) {
  const { medicines } = props
  console.log(medicines)
  return (
    <div className={styles.gridMedicines}>
      {map(medicines, (medicine) => (
        <Link
          key={medicine.id}
          href={`/${medicine.attributes.slug}`}
          className={styles.medicine}
        >
          <div>
            <img src={medicine.attributes.cover.data.attributes.url} />
          </div>

          <div>
            <span className={styles.title}>{medicine.attributes.title}</span>
            <span className={styles.price}>{medicine.attributes.price}€</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
