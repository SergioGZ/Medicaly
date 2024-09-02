import { Icon, Image, Dropdown } from "semantic-ui-react"
import { map } from "lodash"
import { useCart } from "@/hooks"
import { fn } from "@/utils"
import styles from "./Basket.module.scss"

export function Basket(props) {
  const { medicines } = props
  const { changeQuantityItem, deleteItem } = useCart()

  const options = Array.from({ length: 10 }, (_, i) => {
    const number = i + 1
    return {
      key: number,
      text: String(number),
      value: number,
    }
  })

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

      <div className={styles.block}>
        {map(medicines, (medicine) => (
          <div key={medicine.id} className={styles.item}>
            <Image src={medicine.attributes.cover.data.attributes.url} />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{medicine.attributes.title}</p>
                  <p>{medicine.attributes.category.data.attributes.title}</p>
                </div>
                <Icon
                  name="trash alternate online"
                  link
                  onClick={() => deleteItem(medicine.id)}
                />
              </div>
              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={medicine.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(medicine.id, data.value)
                  }
                />
                <span>
                  {fn
                    .calcTotalPrice(
                      medicine.attributes.price,
                      medicine.quantity
                    )
                    .toFixed(2)}
                  €
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
