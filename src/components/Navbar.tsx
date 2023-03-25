import {
  Navbar as BootstrapNavbar,
  Button,
  Container,
  Nav
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { Cart } from '../data/Icons'

type Props = {}
const Navbar = (props: Props) => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <BootstrapNavbar sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant='outline-primary'
            className='rounded-circle'
            onClick={openCart}
          >
            <Cart />
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                top: '-0.5rem',
                right: '-0.5rem'
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </BootstrapNavbar>
  )
}
export default Navbar
