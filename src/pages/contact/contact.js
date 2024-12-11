import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Separator, Seo } from "@/components/Shared"
import styles from "./contact.module.scss"

export default function Contact() {
  return (
    <>
      <Seo title="Medicaly | Contacto" />
      <BasicLayout relative>
        <Container className={styles.container}>
          <Separator height={10} />

          <h2>Contacto</h2>

          <div className={styles.content}>
            <h3>Atención al Cliente</h3>
            <p>
              Nuestro equipo de atención al cliente está disponible de lunes a
              viernes de 9:00 a 20:00 horas para resolver cualquier duda que
              puedas tener sobre nuestros productos o servicios.
            </p>

            <h3>Información de Contacto</h3>
            <p>
              <strong>Teléfono:</strong> +34 900 123 456
              <br />
              <strong>Email:</strong> info@medicaly.com
              <br />
              <strong>Dirección:</strong> Calle Principal 123, 28001 Madrid,
              España
            </p>

            <h3>Farmacéuticos Profesionales</h3>
            <p>
              Contamos con un equipo de farmacéuticos profesionales disponibles
              para consultas sobre medicamentos y tratamientos. Tu salud es
              nuestra prioridad.
            </p>

            <h3>Servicio Técnico</h3>
            <p>
              Para incidencias técnicas con la web o la app, contacta con
              nuestro servicio técnico en: soporte@medicaly.com
            </p>

            <h3>Redes Sociales</h3>
            <p>
              Síguenos en nuestras redes sociales para estar al día de nuestras
              novedades y promociones:
              <br />
              LinkedIn: @medicalyES
              <br />
              Facebook: @medicalyES
              <br />
              Google: @medicalyES
            </p>

            <h3>Horario de Atención</h3>
            <p>
              Atención al Cliente: L-V 9:00-20:00
              <br />
              Consultas Farmacéuticas: L-V 10:00-19:00
              <br />
              Soporte Online: 24/7
            </p>
          </div>

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
