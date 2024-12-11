import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Separator, Seo } from "@/components/Shared"
import styles from "./faqs.module.scss"

export default function Faqs() {
  return (
    <>
      <Seo title="Medicaly | Preguntas Frecuentes" />
      <BasicLayout relative>
        <Container className={styles.container}>
          <Separator height={10} />

          <h2>Preguntas Frecuentes</h2>

          <div className={styles.content}>
            <h3>Pedidos y Envíos</h3>
            <p>
              <strong>¿Cuánto tarda en llegar mi pedido?</strong>
              <br />
              Los pedidos se entregan en 24-48 horas laborables en península.
              Para envíos a islas el plazo puede extenderse hasta 72 horas.
            </p>

            <p>
              <strong>¿Cuál es el coste de envío?</strong>
              <br />
              Los envíos son gratuitos para pedidos superiores a 49€. Para
              pedidos inferiores, el coste es de 3.95€ en península.
            </p>

            <h3>Medicamentos y Recetas</h3>
            <p>
              <strong>¿Necesito receta para comprar medicamentos?</strong>
              <br />
              Algunos medicamentos requieren prescripción médica. Estos están
              claramente identificados en nuestra web y solo podrán ser
              adquiridos presentando una receta válida.
            </p>

            <p>
              <strong>¿Cómo puedo enviar mi receta?</strong>
              <br />
              Puedes subir una imagen de tu receta durante el proceso de compra
              o enviarla por email a recetas@medicaly.com.
            </p>

            <h3>Pagos y Devoluciones</h3>
            <p>
              <strong>¿Qué métodos de pago aceptan?</strong>
              <br />
              Aceptamos tarjetas de crédito/débito, PayPal y transferencia
              bancaria. Todos los pagos se procesan de forma segura.
            </p>

            <p>
              <strong>¿Puedo devolver un medicamento?</strong>
              <br />
              Por razones de seguridad e higiene, no se aceptan devoluciones de
              medicamentos. Solo se admiten en caso de error en el envío o
              producto defectuoso.
            </p>

            <h3>Cuenta y Privacidad</h3>
            <p>
              <strong>¿Cómo puedo crear una cuenta?</strong>
              <br />
              Puedes registrarte fácilmente haciendo clic en el icono de usuario
              y siguiendo los pasos. Necesitarás un email válido y crear una
              contraseña segura.
            </p>

            <p>
              <strong>¿Mis datos médicos están seguros?</strong>
              <br />
              Sí, todos los datos médicos y personales están protegidos bajo
              estrictos protocolos de seguridad y cifrado, cumpliendo con la
              normativa RGPD.
            </p>
          </div>

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
