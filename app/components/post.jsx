import { Link } from "react-router-dom"
import { formatearFecha } from "../utils/helpers"


export default function Post({post}) {
    const {titulo, contenido, imagen, url, publishedAt} = post
  return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />

        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`}>Leer post</Link>
        </div>
    </article>
  )
}
