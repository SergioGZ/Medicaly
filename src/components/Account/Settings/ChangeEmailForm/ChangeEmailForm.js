import { Form } from "semantic-ui-react"
import { useFormik } from "formik"
import { User } from "@/api"
import { useAuth } from "@/hooks"
import { initialValues, validationSchema } from "./ChangeEmailForm.form"
import { Toaster, toast } from "sonner"
import styles from "./ChangeEmailForm.module.scss"

const userCtrl = new User()

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValue.email })
        updateUser("email", formValue.email)
        formik.resetForm({ values: { email: "", repeatEmail: "" } })
        toast.success("E-mail cambiado")
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <Toaster position="bottom-left" richColors />
      <label>E-mail</label>
      <div className={styles.content}>
        <Form.Input
          name="email"
          placeholder="Nuevo e-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="repeatEmail"
          placeholder="Repetir e-mail"
          value={formik.values.repeatEmail}
          onChange={formik.handleChange}
          error={formik.errors.repeatEmail}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Actualizar
        </Form.Button>
      </div>
    </Form>
  )
}
