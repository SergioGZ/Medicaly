import { Form } from "semantic-ui-react"
import { Toaster, toast } from "sonner"
import { useFormik } from "formik"
import { User } from "@/api"
import { useAuth } from "@/hooks"
import { initialValues, validationSchema } from "./ChangeNameForm.form"
import styles from "./ChangeNameForm.module.scss"

const userCtrl = new User()

export function ChangeNameForm() {
  const { user } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(user.name),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
        toast.success("Nombre actualizado")
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Toaster position="bottom-left" richColors />
      <label>Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input
          name="name"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Actualizar
        </Form.Button>
      </div>
    </Form>
  )
}
