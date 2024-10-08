import { useState } from "react"
import { Tab } from "semantic-ui-react"
import { useRouter } from "next/router"
import { BasicLayout } from "@/layouts"
import { useAuth } from "@/hooks"
import { Info, Settings, Address, Wishlist, Orders } from "@/components/Account"
import { Separator, Seo } from "@/components/Shared"
import styles from "./account.module.scss"

export default function AccountPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [reload, setReload] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!user) {
    router.push("/")
    return null
  }

  const onReload = () => setReload((prevState) => !prevState)

  const onLoading = () => setLoading((prevState) => !prevState)

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false} loading={loading}>
          <Orders onLoading={onLoading} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false} loading={loading}>
          <Wishlist onLoading={onLoading} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false} loading={loading}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses
            reload={reload}
            onReload={onReload}
            onLoading={onLoading}
          />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        //key: 20,
        icon: "settings",
        content: "Ajustes",
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        //key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
        title: "Cerrar sesión",
      },
    },
  ]

  return (
    <>
      <Seo title="Medicaly | Mi cuenta" />
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  )
}
