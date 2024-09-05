import { useEffect, useState } from "react"
import { map, size } from "lodash"
import classNames from "classnames"
import { Address } from "@/api"
import { useAuth } from "@/hooks"
import { NoResult } from "@/components/Shared"
import styles from "./Addresses.module.scss"

const addressCtrl = new Address()

export function Addresses(props) {
  const { selectedAddress, setSelectedAddress } = props
  const { user } = useAuth()
  const [addresses, setAddresses] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await addressCtrl.getAll(user.id)
        setAddresses(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={styles.addresses}>
      <h2>Dirección</h2>
      {size(addresses) > 0 ? (
        map(addresses, (address) => (
          <div
            key={address.id}
            className={classNames(styles.address, {
              [styles.active]: selectedAddress?.id === address.id,
            })}
            onClick={() => setSelectedAddress(address)}
          >
            <p>
              {address.attributes.name} ({address.attributes.title})
            </p>
            <p>
              {address.attributes.address}, {address.attributes.city},{" "}
              {address.attributes.state}, {address.attributes.postal_code}
            </p>
          </div>
        ))
      ) : (
        <NoResult text="No tienes direcciones registradas. Agrega una dirección desde tu cuenta." />
      )}
    </div>
  )
}
