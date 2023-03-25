import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from './../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(item => item.id === id)
  if (!item) return null

  return (
    <Stack direction='horizontal' gap={2}>
      <img
        src={item.imageURL}
        alt='Product'
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
        className='d-flex align-items-center'
      />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '0.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '0.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant='outline-danger' onClick={() => removeFromCart(id)}>
        &times;
      </Button>
    </Stack>
  )
}

export default CartItem
