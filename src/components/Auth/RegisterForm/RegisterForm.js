import { Form } from "semantic-ui-react"
import { Toaster, toast } from "sonner"
import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { Auth } from "@/api"
import { initialValues, validationSchema } from "./RegisterForm.form"

const authCtrl = new Auth()

export function RegisterForm() {
  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(formValue)
        toast.success("Usuario registrado")
        router.push("/join/sign-in")
      } catch (error) {
        console.error(error)
        toast.error("Error al registrar usuario")
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Toaster position="bottom-left" richColors />
      <div className="error"></div>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="email"
          type="text"
          placeholder="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          fluid
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          fluid
          name="name"
          type="text"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Registrarse
      </Form.Button>
      <Link href="/join/sign-in">
        <Form.Button type="button" fluid>
          Atrás
        </Form.Button>
      </Link>
    </Form>
  )
}
