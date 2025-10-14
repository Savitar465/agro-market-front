'use client'

import {FormEvent, useMemo, useState} from 'react'
import {useStore} from '@/lib/store'

export default function CheckoutPage(){
  const {cart, products, clearCart} = useStore()
  const items = useMemo(() => cart.map(ci => ({...products.find(p => p.id === ci.id)!, qty: ci.qty})).filter(Boolean), [cart, products])
  const subtotal = items.reduce((sum: number, it: any) => sum + it.price * it.qty, 0)
  const shipping = subtotal > 0 ? 5 : 0
  const total = subtotal + shipping
  const [placed, setPlaced] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-900">Order placed!</h1>
        <p className="mt-2 text-gray-700">Thank you for supporting sustainable producers. This is a prototype; no payment was processed.</p>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-2 space-y-6">
            <section className="border rounded-lg p-4">
              <h2 className="font-semibold text-gray-900">Shipping information</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="First name" className="rounded border-gray-300 px-3 py-2" />
                <input required placeholder="Last name" className="rounded border-gray-300 px-3 py-2" />
                <input required placeholder="Email" type="email" className="sm:col-span-2 rounded border-gray-300 px-3 py-2" />
                <input required placeholder="Address" className="sm:col-span-2 rounded border-gray-300 px-3 py-2" />
                <input required placeholder="City" className="rounded border-gray-300 px-3 py-2" />
                <input required placeholder="Postal code" className="rounded border-gray-300 px-3 py-2" />
              </div>
            </section>

            <section className="border rounded-lg p-4">
              <h2 className="font-semibold text-gray-900">Payment</h2>
              <p className="text-sm text-gray-600">Prototype only — no real payment. Enter any values.</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="Cardholder name" className="sm:col-span-2 rounded border-gray-300 px-3 py-2" />
                <input required placeholder="Card number" className="sm:col-span-2 rounded border-gray-300 px-3 py-2" />
                <input required placeholder="MM/YY" className="rounded border-gray-300 px-3 py-2" />
                <input required placeholder="CVC" className="rounded border-gray-300 px-3 py-2" />
              </div>
            </section>

            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700">Place order</button>
          </form>

          <aside className="border rounded-lg p-4 h-fit">
            <h2 className="font-semibold text-gray-900">Order summary</h2>
            <div className="mt-2 space-y-2 text-sm">
              {items.map((it: any) => (
                <div key={it.id} className="flex justify-between">
                  <span>{it.name} × {it.qty}</span>
                  <span>${(it.price * it.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
