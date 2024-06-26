import { Form } from "semantic-ui-react";
import { Toaster, toast } from "sonner";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./LoginForm.form";

const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
        toast.success("Bienvenido");
      } catch (error) {
        console.error(error);
        toast.error("Credenciales incorrectas");
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Toaster position="bottom-left" richColors />
      <Form.Input
        fluid
        name="identifier"
        type="text"
        placeholder="E-mail o Usuario"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
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

      <Form.Button fluid type="submit" loading={formik.isSubmitting}>
        Iniciar sesión
      </Form.Button>
    </Form>
  );
}
