import {StarIcon} from '@heroicons/react/20/solid'

const product = {
    name: 'Palta',
    price: 'Bs 60',
    href: '#',
    breadcrumbs: [
        {id: 1, name: 'Frutas', href: '#'},
        // { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://www.agroboca.com//uploads/producers/1294/p/4990-IMG_20231013_142334.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://www.infobae.com/new-resizer/3SxR_d1HkV31FylVmhDvJEAi1LY=/arc-anglerfish-arc2-prod-infobae/public/NSZS63J6OFH3FI7RHWGQFBN6II.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://www.vidaysalud.com.ar/wp-content/uploads/2024/07/closeup-fresh-avocados-filling-frame.webp',
            alt: 'Palta 2',
        },
        {
            src: 'https://www.clarin.com/img/2023/01/11/U2RMr9QR2_720x0__1.jpg',
            alt: 'Palta Basic.',
        },
    ],
    colors: [
        {id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400'},
        {id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400'},
        {id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900'},
    ],
    sizes: [
        {id: 1, name: 'XXS', inStock: false},
        {id: 2, name: 'XS', inStock: true},
        {id: 3, name: 'S', inStock: true},
        {id: 4, name: 'M', inStock: true},
        {id: 5, name: 'L', inStock: true},
        {id: 6, name: 'XL', inStock: true},
        {id: 7, name: '2XL', inStock: true},
        {id: 8, name: '3XL', inStock: true},
    ],
    description:
        'Excelente aguacate de piel lisa , recolectamos la fruta el mismo día que hacemos el pedido sin pasar días ni meses en cámaras frigoríficas conservando así todo su máximo sabor y sus cualidades organolèpticas.Del campo a la mesa .',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = {href: '#', average: 4, totalCount: 117}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function ProductDetail({params}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params

    return (
        <div className="bg-white">
            <nav aria-label="Breadcrumb">
                <ol role="list"
                    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    {product.breadcrumbs.map((breadcrumb) => (
                        <li key={breadcrumb.id}>
                            <div className="flex items-center">
                                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                    {breadcrumb.name}
                                </a>
                                <svg
                                    fill="currentColor"
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                </svg>
                            </div>
                        </li>
                    ))}
                    <li className="text-sm">
                        <a href={product.href} aria-current="page"
                           className="font-medium text-gray-500 hover:text-gray-600">
                            {product.name}
                        </a>
                    </li>
                </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <img
                    alt={product.images[0].alt}
                    src={product.images[0].src}
                    className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                />
                <img
                    alt={product.images[1].alt}
                    src={product.images[1].src}
                    className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                />
                <img
                    alt={product.images[2].alt}
                    src={product.images[2].src}
                    className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                />
                <img
                    alt={product.images[3].alt}
                    src={product.images[3].src}
                    className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
                />
            </div>

            {/* Product info */}
            <div
                className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        aria-hidden="true"
                                        className={classNames(
                                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                            'size-5 shrink-0',
                                        )}
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                            <a href={reviews.href}
                               className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {reviews.totalCount} reviews
                            </a>
                        </div>
                    </div>

                    <form className="mt-10">
                        {/* Colors */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Color</h3>

                            <fieldset aria-label="Choose a color" className="mt-4">
                                <div className="flex items-center gap-x-3">
                                    {product.colors.map((color) => (
                                        <div key={color.id}
                                             className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                            <input
                                                defaultValue={color.id}
                                                defaultChecked={color === product.colors[0]}
                                                name="color"
                                                type="radio"
                                                aria-label={color.name}
                                                className={classNames(
                                                    color.classes,
                                                    'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                                                )}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Size guide
                                </a>
                            </div>

                            <fieldset aria-label="Choose a size" className="mt-4">
                                <div className="grid grid-cols-4 gap-3">
                                    {product.sizes.map((size) => (
                                        <label
                                            key={size.id}
                                            aria-label={size.name}
                                            className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                        >
                                            <input
                                                defaultValue={size.id}
                                                defaultChecked={size === product.sizes[2]}
                                                name="size"
                                                type="radio"
                                                disabled={!size.inStock}
                                                className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                            />
                                            <span
                                                className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                          {size.name}
                        </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                        >
                            Add to bag
                        </button>
                    </form>
                </div>

                <div
                    className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                    {/* Description and details */}
                    <div>
                        <h3 className="sr-only">Description</h3>

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">{product.description}</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                        <div className="mt-4">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                {product.highlights.map((highlight) => (
                                    <li key={highlight} className="text-gray-400">
                                        <span className="text-gray-600">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}