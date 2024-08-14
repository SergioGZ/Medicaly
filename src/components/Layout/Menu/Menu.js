import { useEffect, useState } from "react"
import { Image, Icon, Input } from "semantic-ui-react"
import Link from "next/link"
import { map, set } from "lodash"
import classNames from "classnames"
import { Category } from "@/api"
import styles from "./Menu.module.scss"

const categoryCtrl = new Category()

export function Menu(props) {
  const { isOpenSearch } = props
  const [categories, setCategories] = useState(null)
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = () => setShowSearch((prevState) => !prevState)

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

  return (
    <div className={styles.categories}>
      {map(categories, (category) => (
        <Link key={category.id} href={`/category/${category.attributes.slug}`}>
          <Image src={category.attributes.icon.data.attributes.url} />
          {category.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={() => handleSearch()}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-meds"
          placeholder="Buscar medicamentos"
          className={styles.input}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={() => handleSearch()}
        />
      </div>
    </div>
  )
}
