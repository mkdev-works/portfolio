import React from "react"
import { Helmet } from "react-helmet"

export default props => {
  const baseTitle = "KM's Site"
  const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={props.desc} />
    </Helmet>
  )
}
