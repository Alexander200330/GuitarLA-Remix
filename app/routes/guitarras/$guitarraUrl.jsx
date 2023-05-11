import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useLayoutEffect, useState } from "react";
import Swal from "sweetalert2";
import { getGuitarra } from "../../models/guitarras.server";

export async function loader({params}){
  
  const {guitarraUrl} = params;
  
  const guitarra = await getGuitarra(guitarraUrl);
  
  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }

  return guitarra
}

export function meta({data}){

  if(!data){

    return(
      {
        title: `GuitarLA - Guitarra no encontrada`,
        description: `ventas de guitarras, guitarras`
      }
    )
  }
  
  return(
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
      description: `ventas de guitarras, guitarras, ${data.data[0].attributes.nombre}`
    }
  )
}

function Guitarra() {

  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
  const {agregarCarrito} = useOutletContext();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cantidad < 1){
      alert("Debes seleccionar una cantidad")
      return
    }

    const newObject = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(newObject);


    Swal.fire({
      icon: 'success',
      title: 'Good job!',
      text: 'Guitarra agregada al carrito con éxito!',
      timer: 2000
    })

    setCantidad(0);

  }

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>

          <select value={cantidad} id="cantidad" onChange={e => setCantidad(+e.target.value)}>
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value={"Agregar al carrito"} />
        </form>
      </div>
    </div>
  )
}

export default Guitarra