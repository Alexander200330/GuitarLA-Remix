import Guitarras from "./guitarras";

export default function ListadoGuitarras({guitarras}) {
    return (
        <div>
            <h2 className="heading">Nuestra colección</h2>

            {guitarras.length && (
                <div className="guitarras-grid">
                    {
                        guitarras?.map(guitarra => (
                            <Guitarras key={guitarra?.id} guitarra={guitarra?.attributes} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}
