import { useState, useEffect, createContext } from "react"
import { Cart } from "@/api"

const cartCtrl = new Cart()
export const CartContext = createContext()

export function CartProvider(props) {
  const { children } = props
  const [cart, setCart] = useState(null)
  const [total, setTotal] = useState(cartCtrl.count())

  useEffect(() => {
    const response = cartCtrl.getAll()
    setCart(response)
  }, [])

  const addCart = (medicineId) => {
    cartCtrl.add(medicineId)
    refreshTotalCart()
  }

  const changeQuantityItem = (medicineId, quantity) => {
    cartCtrl.changeQuantityItem(medicineId, quantity)
    refreshTotalCart()
  }

  const deleteItem = (medicineId) => {
    cartCtrl.delete(medicineId)
    refreshTotalCart()
  }

  const deleteAllItems = () => {
    cartCtrl.deleteAll()
    refreshTotalCart()
  }

  const refreshTotalCart = () => {
    setTotal(cartCtrl.count(cartCtrl.count())) // Actualiza el total del carrito
    setCart(cartCtrl.getAll()) // Actualiza el carrito
  }

  const data = {
    cart,
    addCart,
    total,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
