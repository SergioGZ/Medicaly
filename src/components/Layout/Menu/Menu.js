import { useEffect, useState } from "react"
import { Image, Icon, Input } from "semantic-ui-react"
import { Category } from "@/api"
import styles from "./Menu.module.scss"

const categoryCtrl = new Category()

export function Menu(props) {
  const { isOpenSearch } = props
  const [categories, setCategories] = useState(null)

  console.log(categories)

  useEffect(() => {
    ;(async () => {
      try {
        //TODO: Petición GET a la API
        const result = await categoryCtrl.getAll()
        setCategories(result.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return <div></div>
}
