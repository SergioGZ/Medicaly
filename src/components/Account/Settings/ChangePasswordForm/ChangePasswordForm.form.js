import * as Yup from "yup"

export function initialValues(password, repeatPassword) {
  return {
    password,
    repeatPassword,
  }
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(20, "La contraseña debe tener como máximo 20 caracteres"),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
  })
}
