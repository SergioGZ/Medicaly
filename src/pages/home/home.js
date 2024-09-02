import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Separator, BarTrust, BannerAd } from "@/components/Shared"
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
      <BasicLayout>
        <Home.Banner />

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines title="Nuevos medicamentos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines
            title="Antiinflamatorios y analgésicos"
            limit={4}
            categoryId={categoryId.analgesicos}
          />
        </Container>

        <Separator height={100} />

        {!user ? (
          <BannerAd
            title="Regístrate para realizar tus compras"
            subtitle="Recibe tus pedidos en la puerta de tu casa"
            btnTitle="Entrar ahora"
            btnLink="/join/sign-up"
            wallpaper="/images/banner2.jpg"
          />
        ) : (
          <BannerAd
            title="¡Bienvenido de nuevo!"
            subtitle="Disfruta de nuestras ofertas exclusivas"
            btnTitle="Ver mi cuenta"
            btnLink="/account"
            wallpaper="/images/banner2.jpg"
          />
        )}

        <Separator height={100} />

        <Container>
          <Home.LatestMedicines
            title="Resfriados y gripe"
            limit={4}
            categoryId={categoryId.antigripales}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  )
}
