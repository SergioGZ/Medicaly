import Link from "next/link";
import Head from "next/head";
import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";
import { LoginForm } from "@/components/Auth";

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>Medicaly | Iniciar sesión</title>
      </Head>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>
          <LoginForm />
          <div className={styles.links}>
            <Link href="/join/forgot-password">¿Olvidaste tu contraseña?</Link>
            <Link href="/join/sign-up">¿No tienes cuenta? Regístrate</Link>
          </div>
        </div>
      </JoinLayout>
    </div>
  );
}
