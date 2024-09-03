import { Container } from "semantic-ui-react"
import { size } from "lodash"
import { BasicLayout } from "@/layouts"
import {
  GridMedicines,
  Separator,
  NoResult,
  Pagination,
  Seo,
} from "@/components/Shared"

export default function CategoryPage(props) {
  const { medicines, category, pagination } = props
  const hasProducts = size(medicines) > 0

  return (
    <>
      <Seo title={`Medicaly | ${category.attributes.title}`} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{category.attributes.title}</h2>
          {hasProducts ? (
            <>
              <GridMedicines medicines={medicines} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La categoría ${category.attributes.title} no tiene productos`}
            />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
