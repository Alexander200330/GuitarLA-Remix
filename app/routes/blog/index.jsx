import {useLoaderData } from "react-router";
import { getPosts } from "../../models/posts.server.js"
import ListadoPosts from "../../components/listado-posts";

export async function loader(){
  const posts = await getPosts();
  return posts.data
}

export function meta() {
    return (
        {
            title: "GuitarLA - Blog",
            description: "GuitarLA - Nuestra colección de guitarras"
        }
    )
}



function Blog() {

  const posts = useLoaderData();

  return (
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
  )
}

export default Blog