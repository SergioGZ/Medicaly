import "semantic-ui-css/semantic.min.css"
import { useEffect, useState } from "react"
import { Image, Input } from "semantic-ui-react"
import { Account } from "@/components/Layout"
import { useRouter } from "next/router"
import Link from "next/link"
import { map } from "lodash"
import classNames from "classnames"
import { Category } from "@/api"
import styles from "./TopBar.module.scss"
import { useAuth } from "@/hooks"

const categoryCtrl = new Category()

export function TopBar(props) {
  const [categories, setCategories] = useState(null)

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
    <section>
      <header>
        <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-1">
          <div className="min-h-[10vh] col-auto flex justify-center items-center">
            <Link href="/">
              <Image src="/images/logoMedicaly.png" className={styles.logo} />
            </Link>
          </div>
          <div className="min-h-[100px] col-span-2 flex justify-center items-center">
            <div className="flex justify-center items-center">
              {map(categories, (category) => (
                <span key={category.id} className={` ${styles.category}`}>
                  <Link
                    href={`/category/${category.attributes.slug}`}
                    className="flex justify-center items-center"
                  >
                    <Image
                      src={category.attributes.icon.data.attributes.url}
                      size="mini"
                      className="me-3"
                    />
                    {category.attributes.title}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div class="min-h-[100px] col-auto flex justify-center items-center">
            <div class="flex items-center">
              <Input
                icon="search"
                placeholder="Buscar producto..."
                size="large"
                className="me-8"
              />
              <Account />
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
