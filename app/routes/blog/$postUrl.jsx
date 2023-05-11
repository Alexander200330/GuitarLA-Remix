import { useLoaderData } from "react-router";
import { getPost } from "../../models/posts.server";
import { formatearFecha } from "../../utils/helpers";
import styles from '~/styles/blogs.css'
import { useLayoutEffect } from "react";

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({params}){
    const {postUrl} = params;

    const post = await getPost(postUrl);

    if(post.length === 0){
        throw new Response('', {
            status: 404,
            statusText: "Entrada no encontrada"
        })
    }

    return post;
}

export function meta({data}){

    if(!data){
  
      return(
        {
          title: `GuitarLA - Entrada no encontrada`,
          description: `ventas de guitarras, guitarras`
        }
      )
    }
    
    return(
      {
        title: `GuitarLA - ${data[0].attributes.titulo}`,
        description: `ventas de guitarras, entrada, ${data[0].attributes.titulo}`
      }
    )
  }
  

export default function PostUrl() {

    const post = useLoaderData();

    const {titulo, contenido, imagen, publishedAt} = post[0].attributes;

    // Esto me trae la página al inicio
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <article className="post mt-3">
        <img src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />

        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}
