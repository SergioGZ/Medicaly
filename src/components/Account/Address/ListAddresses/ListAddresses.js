import { useState, useEffect } from "react"
import { map } from "lodash"
import { Address as AddressCtrl } from "@/api"
import { useAuth } from "@/hooks"
import { Address } from "./Address"
import styles from "./ListAddresses.module.scss"

const addressCtrl = new AddressCtrl()

export function ListAddresses(props) {
  const { reload, onReload, onLoading } = props
  const { user } = useAuth()
  const [addresses, setAddresses] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const response = await addressCtrl.getAll(user.id)
        setAddresses(response.data)
        setTimeout(() => onLoading(), 500)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [reload])

  if (!addresses) return null

  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <Address
          key={address.id}
          addressId={address.id}
          address={address.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  )
}
