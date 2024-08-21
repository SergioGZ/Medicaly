import { Form } from "semantic-ui-react"
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
        console.log(formValue)
        console.log(user.id)
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
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
