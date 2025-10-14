'use client'

import {useParams, useRouter} from 'next/navigation'
import Link from 'next/link'
import {useStore} from '@/lib/store'

export default function ProductDetail() {
  const params = useParams<{id: string}>()
  const router = useRouter()
  const {products, addToCart} = useStore()
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-gray-700">Product not found.</p>
        <button onClick={()=>router.back()} className="mt-4 text-emerald-700 hover:underline">Go back</button>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover aspect-square" />
            {product.images && product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${product.name} ${idx+1}`} className="w-full rounded object-cover aspect-square" />
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
            <p className="mt-1 text-sm text-gray-500">{product.category}{product.seller ? ` • by ${product.seller.name}`: ''}</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">${product.price.toFixed(2)} {product.unit && <span className="text-base font-normal text-gray-500">{product.unit}</span>}</p>
            <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex gap-3">
              <button onClick={() => addToCart(product.id, 1)} className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700">Add to cart</button>
              <Link href="/cart" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50">Go to cart</Link>
            </div>
            <div className="mt-6 text-sm text-gray-500">Stock: {product.stock ?? '—'}</div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900">About the seller</h2>
          <p className="mt-2 text-gray-700">{product.seller?.name} • {product.seller?.location}</p>
        </div>

        <div className="mt-12">
          <Link href="/store" className="text-emerald-700 hover:underline">Back to store</Link>
        </div>
      </div>
    </div>
  )
}
