import { useEffect } from "react"
import { Container } from "semantic-ui-react"
import { size } from "lodash"
import {
  GridMedicines,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared"
import { BasicLayout } from "@/layouts"

export default function SearchPage(props) {
  const { medicines, pagination, searchText } = props
  const hasMedicines = size(medicines) > 0

  useEffect(() => {
    document.getElementById("search-meds").focus()
  }, [])

  return (
    <div>
      <>
        <BasicLayout relative>
          <Container>
            <Separator height={50} />
            <h2>Buscando: {searchText}</h2>
            {hasMedicines ? (
              <>
                <GridMedicines medicines={medicines} />
                <Separator height={30} />
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.pageCount}
                />
              </>
            ) : (
              <NoResult text="No se encontraron resultados" />
            )}

            <Separator height={100} />
          </Container>
        </BasicLayout>
      </>
    </div>
  )
}
