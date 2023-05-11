import { useLoaderData } from "react-router";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "../../components/listado-guitarras";

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

export function meta() {
  return {
    title: "GuitarLA - Tienda de guitarras",
    description: "GuitarLA - Nuestra colección de guitarras"
  };
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    
      <ListadoGuitarras guitarras={guitarras} />
   
  );
}

export default Tienda;
