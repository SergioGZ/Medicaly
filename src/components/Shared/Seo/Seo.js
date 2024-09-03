import Head from "next/head"

export function Seo(props) {
  const {
    title = "Medicaly",
    description = "Tu farmacia online al mejor precio",
  } = props
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  )
}
