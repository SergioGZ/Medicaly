import { Form } from "semantic-ui-react"
import { useFormik } from "formik"
import { User } from "@/api"
import { useAuth } from "@/hooks"
import { initialValues, validationSchema } from "./ChangePasswordForm.form"
import { Toaster, toast } from "sonner"
import styles from "./ChangePasswordForm.module.scss"

const userCtrl = new User()

export function ChangePasswordForm() {
  const { user } = useAuth()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { password: formValue.password })
        formik.resetForm({ values: { password: "", repeatPassword: "" } })
        toast.success("Contraseña cambiada correctamente")
      } catch (error) {
        console.error(error)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <Toaster position="bottom-left" richColors />
      <label>Contraseña</label>
      <div className={styles.content}>
        <Form.Input
          name="password"
          type="password"
          placeholder="Nueva contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Form.Input
          name="repeatPassword"
          type="password"
          placeholder="Repetir contraseña"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Actualizar
        </Form.Button>
      </div>
    </Form>
  )
}
