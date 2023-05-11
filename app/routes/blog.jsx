import {Outlet} from '@remix-run/react'
import styles from '../styles/blogs.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
function Blog() {

  return (
    <div className="contenedor">
      <Outlet />
    </div>
  )
}

export default Blog