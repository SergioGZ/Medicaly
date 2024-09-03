import { BasicLayout } from "@/layouts"
import { Home } from "@/components/Home"
import { Medicine } from "@/components/Medicine"
import { Separator, Seo } from "@/components/Shared"

export default function MedicinePage(props) {
  const { medicine } = props

  return (
    <>
      <Seo
        title={`Medicaly | ${medicine.attributes.title}`}
        description={medicine.attributes.summary}
      />
      <BasicLayout>
        <Home.Banner />
        <Medicine.Panel
          medicineId={medicine.id}
          medicine={medicine.attributes}
        />

        <Separator height={50} />

        <Medicine.Info medicine={medicine.attributes} />
      </BasicLayout>
    </>
  )
}
