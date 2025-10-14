'use client'

import React, {createContext, useContext, useMemo, useState} from 'react'
import {products as seedProducts, type Product} from '@/data/products'
import {sellers as seedSellers, type Seller} from '@/data/sellers'

export type CartItem = { id: string; qty: number };

export type StoreState = {
  products: Product[];
  addProduct: (p: Product, sellerId: string) => void; // for /sell prototype
  sellers: Seller[];
  addSeller: (name: string) => void;
  cart: CartItem[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreState | undefined>(undefined)

export function StoreProvider({children}: {children: React.ReactNode}) {
  const [products, setProducts] = useState<Product[]>(seedProducts)
  const [sellers, setSellers] = useState<Seller[]>(seedSellers)
  const [cart, setCart] = useState<CartItem[]>([])

  const addProduct = (p: Product, sellerId: string) => {
    const newProduct = {...p, id: p.id || `${Date.now()}`};
    setProducts(prev => [newProduct, ...prev])
    setSellers(prev => prev.map(s => s.id === sellerId ? {...s, productIds: [...s.productIds, newProduct.id]} : s))
  }

  const addSeller = (name: string) => {
    const newSeller = {id: `${Date.now()}`, name, productIds: []};
    setSellers(prev => [newSeller, ...prev])
  }

  const addToCart = (id: string, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === id)
      if (existing) {
        return prev.map(i => i.id === id ? {...i, qty: i.qty + qty} : i)
      }
      return [...prev, {id, qty}]
    })
  }

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id))

  const setQty = (id: string, qty: number) => setCart(prev => prev.map(i => i.id === id ? {...i, qty} : i))

  const clearCart = () => setCart([])

  const value = useMemo<StoreState>(() => ({products, addProduct, sellers, addSeller, cart, addToCart, removeFromCart, setQty, clearCart}), [products, sellers, cart])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
