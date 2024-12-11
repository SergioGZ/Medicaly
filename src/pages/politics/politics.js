import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { Separator, Seo } from "@/components/Shared"
import styles from "./politics.module.scss"

export default function Politics() {
  return (
    <>
      <Seo title="Medicaly | Política de Privacidad" />
      <BasicLayout relative>
        <Container className={styles.container}>
          <Separator height={10} />

          <h2>Política de Privacidad</h2>

          <div className={styles.content}>
            <h3>1. Recopilación de Información</h3>
            <p>
              En Medicaly, recopilamos información personal y médica necesaria
              para brindar nuestros servicios farmacéuticos. Esto incluye: datos
              de identificación personal, historial médico, prescripciones
              médicas, información de contacto, dirección de envío y detalles de
              pago. Toda esta información es recopilada bajo estrictos
              protocolos de seguridad.
            </p>

            <h3>2. Uso de la Información Médica</h3>
            <p>
              Su información médica y prescripciones son utilizadas
              exclusivamente para: verificar la validez de las recetas, procesar
              sus pedidos de medicamentos, prevenir contraindicaciones médicas,
              y cumplir con las regulaciones sanitarias vigentes. Nuestros
              farmacéuticos profesionales tienen acceso a esta información para
              garantizar su seguridad.
            </p>

            <h3>3. Protección de Datos Sensibles</h3>
            <p>
              Implementamos medidas de seguridad avanzadas específicas para
              datos médicos, incluyendo encriptación de extremo a extremo,
              acceso restringido solo a personal autorizado, y sistemas de
              monitoreo continuo. Cumplimos con todas las normativas de
              protección de datos sanitarios aplicables.
            </p>

            <h3>4. Compartir Información</h3>
            <p>
              Solo compartimos su información médica cuando es estrictamente
              necesario: con profesionales de salud autorizados, autoridades
              sanitarias cuando sea requerido por ley, y servicios de logística
              (únicamente datos de envío). Nunca comercializamos sus datos
              médicos ni personales.
            </p>

            <h3>5. Cookies y Seguimiento</h3>
            <p>
              Utilizamos cookies esenciales para el funcionamiento de la
              plataforma y la seguridad de sus transacciones. También empleamos
              cookies analíticas para mejorar nuestros servicios, siempre
              respetando su privacidad y anonimizando los datos de navegación.
            </p>

            <h3>6. Retención de Datos</h3>
            <p>
              Mantenemos sus registros médicos y prescripciones durante el
              período legalmente requerido para establecimientos farmacéuticos.
              Los datos de transacciones se conservan según las normativas
              fiscales y sanitarias vigentes.
            </p>

            <h3>7. Contacto</h3>
            <p>
              Para cualquier consulta sobre el tratamiento de sus datos médicos
              o personales, puede contactar a nuestro Delegado de Protección de
              Datos a través de nuestros canales oficiales. Nuestro equipo
              farmacéutico está disponible para atender sus inquietudes sobre la
              privacidad de su información médica.
            </p>
          </div>

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
