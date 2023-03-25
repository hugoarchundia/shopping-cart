import { createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      return currItems.find(item => item.id === id) == null
        ? [...currItems, { id, quantity: 1 }]
        : currItems.map(item => {
            return item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          })
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems(currentItems => {
      return currentItems.find(item => item.id === id)?.quantity === 1
        ? currentItems.filter(item => item.id !== id)
        : currentItems.map(item => {
            return item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          })
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
