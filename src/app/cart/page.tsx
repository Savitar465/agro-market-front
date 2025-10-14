'use client'

import Link from 'next/link'
import {useMemo} from 'react'
import {useStore} from '@/lib/store'

export default function CartPage(){
  const {cart, products, setQty, removeFromCart} = useStore()

  const items = useMemo(() => cart.map(ci => ({
    ...products.find(p => p.id === ci.id)!,
    qty: ci.qty
  })).filter(Boolean), [cart, products])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it: any) => sum + it.price * it.qty, 0)
    return {subtotal, shipping: subtotal > 0 ? 5 : 0, total: subtotal > 0 ? subtotal + 5 : 0}
  }, [items])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Your cart</h1>
        {items.length === 0 ? (
          <div className="mt-8 text-gray-600">Your cart is empty. <Link href="/store" className="text-emerald-700 hover:underline">Continue shopping</Link></div>
        ) : (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((it: any) => (
                <div key={it.id} className="flex gap-4 border rounded-lg p-4">
                  <img src={it.image} alt={it.name} className="w-24 h-24 rounded object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{it.name}</h3>
                    <p className="text-sm text-gray-500">{it.category}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm text-gray-700">Qty</label>
                      <input type="number" min={1} value={it.qty}
                             onChange={(e)=>setQty(it.id, Math.max(1, Number(e.target.value)))}
                             className="w-20 rounded border-gray-300" />
                      <button onClick={()=>removeFromCart(it.id)} className="ml-auto text-sm text-red-600 hover:underline">Remove</button>
                    </div>
                  </div>
                  <div className="text-right font-semibold">${(it.price * it.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="border rounded-lg p-4 h-fit">
              <h2 className="font-semibold text-gray-900">Order summary</h2>
              <div className="mt-2 space-y-1 text-sm text-gray-700">
                <div className="flex justify-between"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${totals.shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-semibold text-gray-900 border-t pt-2"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
              </div>
              <Link href="/checkout" className="mt-4 inline-flex w-full justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
