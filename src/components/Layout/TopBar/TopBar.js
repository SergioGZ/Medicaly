import "semantic-ui-css/semantic.min.css"
import { useEffect, useState } from "react"
import { Image, Icon, Input, Label, Button } from "semantic-ui-react"
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
    <nav className={styles.topBar}>
      <div className="fluid">
        <div className="row py-3">
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <div className={styles.logo}>
              <Link href="/">
                <Image src="images/logoMedicaly.png" alt="Medicaly" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-0">
            <div className={styles.menu}>
              {map(categories, (category) => (
                <span
                  key={category.id}
                  className={`nav-item px-4 ${styles.category}`}
                >
                  <Link
                    href={`/category/${category.attributes.slug}`}
                    className="d-flex align-items-center"
                  >
                    <Image
                      src={category.attributes.icon.data.attributes.url}
                      size="mini"
                      className="pe-2"
                    />
                    {category.attributes.title}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <div className={styles.actions}>
              <div className={styles.search}>
                <Input icon="search" placeholder="Buscar..." />
              </div>
              <Account />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
