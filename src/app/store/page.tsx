'use client'

import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useMemo, useState} from 'react'
import {useStore} from '@/lib/store'
import {categories} from '@/data/products'

export default function ProductsFeed(){
    const {products} = useStore()
    const searchParams = useSearchParams()
    const q = searchParams.get('q')?.toLowerCase() || ''
    const [activeCategory, setActiveCategory] = useState<string>('All')

    const filtered = useMemo(() => {
        return products.filter(p => {
            const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
            const matchCat = activeCategory === 'All' || p.category === activeCategory
            return matchQ && matchCat
        })
    }, [products, q, activeCategory])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Eco Marketplace</h1>
                    <div className="flex gap-2 overflow-x-auto">
                        <button onClick={()=>setActiveCategory('All')} className={`px-3 py-1 rounded-full border ${activeCategory==='All'? 'bg-emerald-600 text-white border-emerald-600':'border-gray-300 text-gray-700'}`}>All</button>
                        {categories.map(c => (
                            <button key={c} onClick={()=>setActiveCategory(c)} className={`px-3 py-1 rounded-full border ${activeCategory===c? 'bg-emerald-600 text-white border-emerald-600':'border-gray-300 text-gray-700'}`}>{c}</button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filtered.map(p => (
                        <Link key={p.id} href={`/products/${p.id}`} className="group rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition">
                            <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-sm font-medium text-gray-900 group-hover:text-emerald-700">{p.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{p.category}</p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">${p.price.toFixed(2)}{p.unit? <span className="text-sm font-normal text-gray-500"> {p.unit}</span>: null}</p>
                            </div>
                        </Link>
                    ))}
                    {filtered.length === 0 && (
                        <div className="col-span-full text-center py-16 text-gray-600">No products found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};