import { useState } from "react"
import { Image } from "semantic-ui-react"
import { map } from "lodash"
import { DateTime } from "luxon"
import { forEach } from "lodash"
import { BasicModal } from "@/components/Shared"
import { fn } from "@/utils"
import styles from "./Order.module.scss"

export function Order(props) {
  const { order } = props
  const [showModal, setShowModal] = useState(false)
  const createdAt = new Date(order.attributes.createdAt).toISOString()
  const products = order.attributes.products
  const address = order.attributes.addressShipping

  const openCloseModal = () => setShowModal(!showModal)

  const getTotalProducts = () => {
    let total = 0
    forEach(products, (product) => {
      total += product.quantity
    })
    return total
  }

  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>
          <p>{getTotalProducts()} productos</p>
        </div>
        <p>{order.attributes.totalPayment.toFixed(2)} €</p>
      </div>

      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Detalles del pedido"
      >
        {map(products, (product) => (
          <div key={product.id} className={styles.product}>
            <Image src={product.attributes.cover.data.attributes.url} />

            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.category.data.attributes.title}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>{product.attributes.price.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.attributes.title}</p>
            <p className={styles.addressInfo}>
              {address.attributes.name}, {address.attributes.address},{" "}
              {address.attributes.state}, {address.attributes.city},{" "}
              {address.attributes.postal_code}
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <p>TOTAL: {order.attributes.totalPayment.toFixed(2)}€</p>
        </div>
      </BasicModal>
    </>
  )
}
