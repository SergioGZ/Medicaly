import { useState, useEffect } from "react"
import { Medicine } from "@/api"
import { GridMedicines } from "@/components/Shared"
import styles from "./LatestMedicines.module.scss"

const medicineCtrl = new Medicine()

export function LatestMedicines(props) {
  const { title, limit, categoryId = null } = props
  const [medicines, setMedicines] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await medicineCtrl.getLatestPublished({
          limit,
          categoryId,
        })
        setMedicines(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (!medicines) return null

  return (
    <div className={styles.latestMedicines}>
      <h2>{title}</h2>
      <GridMedicines medicines={medicines} title={title} />
    </div>
  )
}
