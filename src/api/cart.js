import { size, forEach } from "lodash"
import { ENV, authFetch } from "@/utils"

export class Cart {
  add(medicineId) {
    const medicines = this.getAll()
    const objIndex = medicines.findIndex(
      (medicine) => medicine.id === medicineId
    )

    if (objIndex < 0) {
      medicines.push({ id: medicineId, quantity: 1 }) // Añade el medicamento al carrito
    } else {
      medicines[objIndex].quantity += 1 // Incrementa la cantidad del medicamento
    }

    localStorage.setItem(ENV.CART, JSON.stringify(medicines))
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART)

    if (!response) {
      return []
    } else {
      return JSON.parse(response)
    }
  }

  count() {
    const response = this.getAll()
    let count = 0

    forEach(response, (item) => {
      count += item.quantity
    })

    return count
  }

  changeQuantityItem(medicineId, quantity) {
    const medicines = this.getAll()
    const objIndex = medicines.findIndex(
      (medicine) => medicine.id === medicineId
    )

    if (objIndex >= 0) {
      medicines[objIndex].quantity = quantity
      localStorage.setItem(ENV.CART, JSON.stringify(medicines))
    }
  }

  delete(medicineId) {
    const medicines = this.getAll()
    const newMedicines = medicines.filter(
      (medicine) => medicine.id !== medicineId
    )

    localStorage.setItem(ENV.CART, JSON.stringify(newMedicines))
  }

  deleteAll() {
    localStorage.removeItem(ENV.CART)
  }

  async paymentCart(token, products, idUser, address) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          products,
          idUser,
          addressShipping: address,
        }),
      }

      const response = await authFetch(url, params)

      return response
    } catch (error) {
      throw error
    }
  }
}
