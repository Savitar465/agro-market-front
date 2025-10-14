'use client'

import {useStore} from '@/lib/store'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {categories} from '@/data/products'

export default function Page() {
    const {products} = useStore()
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    const category = searchParams.get('category')

    const filteredProducts = products.filter(p => {
        if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false
        return !(category && p.category !== category);

    })

    return (
        <div>
            <div className="flex justify-between mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Products</h1>
                <div className="flex gap-4">
                    <Link href="/store" className={`text-sm font-medium ${!category ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>All</Link>
                    {categories.map(c => (
                        <Link key={c} href={`/store?category=${c}`} className={`text-sm font-medium ${category === c ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>{c}</Link>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                                src={product.image}
                                alt={product.description}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
