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

  const data = [
    {
      id: 1,
      slug: "analgesicos",
      imgUrl:
        "https://medicaly.s3.eu-west-1.amazonaws.com/pildora_3f494e0d91.png",
      title: "Antiinflamatorios",
    },
    {
      id: 2,
      slug: "antigripales",
      imgUrl:
        "https://medicaly.s3.eu-west-1.amazonaws.com/antigripales_a1d819ad8e.png",
      title: "Resfriados y gripe",
    },
    {
      id: 3,
      slug: "digestivos",
      imgUrl:
        "https://medicaly.s3.eu-west-1.amazonaws.com/analgesicos_86569d60c0.png",
      title: "Sistema digestivo",
    },
  ]

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const result = await categoryCtrl.getAll()
  //       setCategories(result.data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // }, [])

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
        {map(data, (category) => (
          <Link key={category.id} href={`/medicines/${category.slug}`}>
            <Image src={category.imgUrl} />
            {category.title.toUpperCase()}
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
