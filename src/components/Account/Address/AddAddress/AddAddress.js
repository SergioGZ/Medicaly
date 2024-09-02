import { Fragment, useState } from "react"
import { Button } from "semantic-ui-react"
import { BasicModal } from "@/components/Shared"
import { AddressForm } from "../AddressForm"
import styles from "./AddAddress.module.scss"

export function AddAddress(props) {
  const { onReload } = props
  const [show, setShow] = useState(false)

  const onOpenCloseModal = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <>
      <Button
        primary
        className={styles.addBtn}
        onClick={() => onOpenCloseModal()}
      >
        Añadir dirección
      </Button>

      <BasicModal
        show={show}
        onClose={onOpenCloseModal}
        title="Nueva dirección"
      >
        <AddressForm onClose={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  )
}
