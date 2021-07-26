import { Navbar } from "react-bootstrap"
import Sections from '../../config/Sections.json'

function AppNav() {
    const renderNavItems = () => {
    let elements = Sections.map((item, index) => {
      return (
          <Navbar.Text  key={index} text='light'>
            <a href='#' onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } |
            </a> 
          </Navbar.Text> 
      )
    })
    return (
      <span>
        { elements }
      </span>
    )
  }
  return (
    <div>
      <Navbar bg='secondary' text='light' variant='light' fixed='top' >
        { renderNavItems() }
      </Navbar>
    </div>
  )
}

export default AppNav;