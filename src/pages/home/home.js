import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared"
import { useAuth } from "@/hooks"

const categoryId = {
  analgesicos: 1,
  antigripales: 2,
  digestivos: 3,
}

export default function HomePage() {
  const { user } = useAuth()

  return (
    <>
      <Seo />
      <BasicLayout>
        <Home.Banner />

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines
            title="Antiinflamatorios y analgésicos"
            limit={10}
            categoryId={categoryId.analgesicos}
          />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines
            title="Resfriados y gripe"
            limit={5}
            categoryId={categoryId.antigripales}
          />
        </Container>

        <Separator height={100} />

        <BannerAd wallpaper="/images/banner2.jpg" />

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines
            title="Sistema digestivo"
            limit={5}
            categoryId={categoryId.digestivos}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  )
}
