import { useEffect, useState } from "react"
import { Image, Icon, Input } from "semantic-ui-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { map, set } from "lodash"
import classNames from "classnames"
import { Category } from "@/api"
import styles from "./Menu.module.scss"

const categoryCtrl = new Category()

export function Menu() {
  const [categories, setCategories] = useState(null)
  const [searchText, setSearchText] = useState("")
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      try {
        const result = await categoryCtrl.getAll()
        setCategories(result.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  useEffect(() => {
    setSearchText(router.query.s || "")
  }, [])

  const onSearch = (text) => {
    setSearchText(text)
    router.replace(`/search?s=${text}`)
  }

  return (
    <>
      <div className={styles.categories}>
        {map(categories, (category) => (
          <Link
            key={category.id}
            href={`/medicines/${category.attributes.slug}`}
          >
            <Image src={category.attributes.icon.data.attributes.url} />
            {category.attributes.title.toUpperCase()}
          </Link>
        ))}
        <div className={styles.search}>
          <Icon name="search" />
          <Input
            id="search-meds"
            placeholder="Buscar medicamentos"
            className={styles.input}
            focus={true}
            value={searchText}
            onChange={(_, data) => onSearch(data.value)}
          />
        </div>
      </div>
    </>
  )
}
