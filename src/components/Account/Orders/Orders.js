import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Order as OrderCtrl } from "@/api"
import { useAuth } from "@/hooks"
import { NoResult } from "@/components/Shared"
import { Order } from "./Order"

const orderCtrl = new OrderCtrl()

export function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await orderCtrl.getAll(user.id)
        setOrders(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return size(orders) === 0 ? (
    <NoResult text="No has realizado ningún pedido" />
  ) : (
    map(orders, (order) => <Order key={order.id} order={order} />)
  )
}
