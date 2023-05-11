import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return (
    {
      title: "GuitarLA - Nosotros",
      description: "Venta de guitarras, blog de música"
    }
  )
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }

  ]
}


function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div className="">
          <p>Aenean finibus mattis gravida. Nulla non nulla rhoncus, luctus tortor euismod, suscipit nibh. Vivamus consequat turpis nec massa auctor, ut luctus lorem accumsan. Nullam aliquam volutpat vehicula. Cras sapien ante, lobortis eu viverra vel, efficitur volutpat justo.</p>
          <p>Aenean finibus mattis gravida. Nulla non nulla rhoncus, luctus tortor euismod, suscipit nibh. Vivamus consequat turpis nec massa auctor, ut luctus lorem accumsan. Nullam aliquam volutpat vehicula. Cras sapien ante, lobortis eu viverra vel, efficitur volutpat justo. </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros