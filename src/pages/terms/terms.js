import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Separator, Seo } from "@/components/Shared"
import styles from "./terms.module.scss"

export default function Terms() {
  return (
    <>
      <Seo title="Medicaly | Términos y Condiciones" />
      <BasicLayout relative>
        <Container className={styles.container}>
          <Separator height={20} />

          <h2>Términos y Condiciones</h2>

          <div className={styles.content}>
            <h3>1. Introducción</h3>
            <p>
              Bienvenido a Medicaly, su farmacia online de confianza. Al acceder
              y utilizar esta plataforma, usted acepta estos términos y
              condiciones en su totalidad. Este servicio está destinado
              únicamente a usuarios mayores de edad.
            </p>

            <h3>2. Registro y Cuenta de Usuario</h3>
            <p>
              Para realizar compras en Medicaly, es necesario registrarse y
              crear una cuenta. Usted es responsable de mantener la
              confidencialidad de su cuenta y contraseña, y de restringir el
              acceso a su dispositivo. Se compromete a aceptar la
              responsabilidad de todas las actividades que se realicen bajo su
              cuenta.
            </p>

            <h3>3. Pedidos y Prescripciones</h3>
            <p>
              Para medicamentos que requieren receta médica, será necesario
              cargar una prescripción válida antes de procesar el pedido. Nos
              reservamos el derecho de rechazar cualquier pedido que no cumpla
              con los requisitos legales o presente una prescripción inválida o
              sospechosa.
            </p>

            <h3>4. Precios y Pagos</h3>
            <p>
              Todos los precios mostrados incluyen IVA. Nos reservamos el
              derecho de modificar los precios en cualquier momento. El pago se
              procesará únicamente una vez verificada la validez de la
              prescripción médica cuando sea requerida.
            </p>

            <h3>5. Envíos y Entregas</h3>
            <p>
              Los medicamentos serán enviados de manera segura y discreta. Los
              tiempos de entrega pueden variar según la ubicación. No nos
              hacemos responsables por retrasos causados por terceros o
              situaciones fuera de nuestro control.
            </p>

            <h3>6. Privacidad y Datos Personales</h3>
            <p>
              Su información médica y personal será tratada con estricta
              confidencialidad según nuestra política de privacidad y las leyes
              de protección de datos vigentes. No compartiremos su información
              con terceros sin su consentimiento.
            </p>

            <h3>7. Limitación de Responsabilidad</h3>
            <p>
              Medicaly no será responsable por el uso inadecuado de los
              medicamentos o por reacciones adversas. Siempre siga las
              indicaciones de su médico y lea los prospectos antes de consumir
              cualquier medicamento.
            </p>

            <h3>8. Contacto</h3>
            <p>
              Si tiene alguna pregunta sobre estos términos o sobre nuestros
              servicios, por favor contáctenos a través de nuestros canales
              oficiales. Nuestro equipo farmacéutico está disponible para
              resolver sus dudas.
            </p>
          </div>

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
