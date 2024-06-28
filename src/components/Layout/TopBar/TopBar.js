import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "semantic-ui-css/semantic.min.css"
import { useEffect, useState } from "react"
import { Image, Icon, Input, Label, Button } from "semantic-ui-react"
import { useRouter } from "next/router"
import Link from "next/link"
import { map, set } from "lodash"
import classNames from "classnames"
import { Category } from "@/api"
import styles from "./TopBar.module.scss"
import { useAuth } from "@/hooks"

const categoryCtrl = new Category()

export function TopBar(props) {
  const { isOpenSearch } = props
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
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.logo}`} href="/">
          <Image
            src="/images/logoMedicaly.png"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.menu}`}>
            {map(categories, (category) => (
              <li
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
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
