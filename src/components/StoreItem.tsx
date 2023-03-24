import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imageURL: string
}

const StoreItem = ({ id, name, price, imageURL }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={imageURL}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
