import { useEffect, useState } from "react"
import { Image, Icon, Input } from "semantic-ui-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { map, set } from "lodash"
import classNames from "classnames"
import { Category } from "@/api"
import styles from "./Menu.module.scss"

const categoryCtrl = new Category()

export function Menu(props) {
  const { isOpenSearch } = props
  const [categories, setCategories] = useState(null)
  const [showSearch, setShowSearch] = useState(isOpenSearch)
  const [searchText, setSearchText] = useState("")
  const router = useRouter()

  const handleSearch = () => setShowSearch((prevState) => !prevState)

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
            focus={true}
            value={searchText}
            onChange={(_, data) => onSearch(data.value)}
          />
          <Icon
            name="close"
            className={styles.closeInput}
            onClick={() => handleSearch()}
          />
        </div>
      </div>
    </>
  )
}
