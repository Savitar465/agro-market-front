'use client'

import {FormEvent, useState} from 'react'
import {useStore} from '@/lib/store'
import {categories, type Product} from '@/data/products'

export default function SellPage(){
  const {addProduct} = useStore()
  const [preview, setPreview] = useState<Product | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const newProduct: Product = {
      id: '',
      name: String(data.get('name')),
      price: Number(data.get('price')),
      unit: String(data.get('unit') || ''),
      image: String(data.get('image')),
      description: String(data.get('description')),
      category: String(data.get('category')),
      stock: Number(data.get('stock') || 0),
      seller: { id: 'you', name: 'You' },
    }
    addProduct(newProduct)
    setPreview(newProduct)
    form.reset()
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">List a new product</h1>
        <p className="mt-1 text-gray-600">Prototype form — this does not upload anywhere. It just adds to the local list.</p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Product name" className="rounded border-gray-300 px-3 py-2 sm:col-span-2" />
          <select name="category" className="rounded border-gray-300 px-3 py-2" defaultValue={categories[0]}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input required name="price" type="number" step="0.01" placeholder="Price" className="rounded border-gray-300 px-3 py-2" />
          <input name="unit" placeholder="Unit (e.g. per lb, each)" className="rounded border-gray-300 px-3 py-2 sm:col-span-2" />
          <input required name="image" placeholder="Image URL" className="rounded border-gray-300 px-3 py-2 sm:col-span-2" />
          <input name="stock" type="number" placeholder="Stock" className="rounded border-gray-300 px-3 py-2" />
          <textarea required name="description" placeholder="Description" className="rounded border-gray-300 px-3 py-2 sm:col-span-2" rows={4} />
          <div className="sm:col-span-2 flex gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700">Add product</button>
            {preview && <a href={`/products/${preview.id}`} className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50">View last added</a>}
          </div>
        </form>

        {preview && (
          <div className="mt-8 border rounded-lg p-4">
            <h2 className="font-semibold text-gray-900">Preview</h2>
            <div className="mt-3 flex gap-4">
              <img src={preview.image} alt={preview.name} className="w-32 h-32 rounded object-cover" />
              <div>
                <div className="font-medium">{preview.name}</div>
                <div className="text-sm text-gray-600">{preview.category}</div>
                <div className="mt-1 font-semibold">${preview.price.toFixed(2)} {preview.unit}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
