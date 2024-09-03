import { JoinLayout } from "@/layouts"
import { RegisterForm } from "@/components/Auth"
import { Seo } from "@/components/Shared"
import styles from "./sign-up.module.scss"

export default function SignUpPage() {
  return (
    <>
      <Seo />
      <JoinLayout>
        <div className={styles.signUp}>
          <h3>Crear cuenta</h3>
          <RegisterForm />
        </div>
      </JoinLayout>
    </>
  )
}
