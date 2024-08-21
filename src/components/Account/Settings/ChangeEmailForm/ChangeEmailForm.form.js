import * as Yup from "yup"

export function initialValues(email, repeatEmail) {
  return {
    email,
    repeatEmail,
  }
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .required("El e-mail es requerido")
      .email("E-mail inválido"),
    repeatEmail: Yup.string()
      .required("Repetir e-mail es requerido")
      .oneOf([Yup.ref("email"), null], "Los e-mails no coinciden"),
  })
}
