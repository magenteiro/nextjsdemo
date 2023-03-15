import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const products = await fetch('https://fakestoreapi.com/products?limit=35')
      .then(res => res.json())
  return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map(product => (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" class="object-cover object-center w-full h-full block"
                     src={product.image} fill/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p class="mt-1">${product.price}</p>
              </div>
            </div>))}
          </div>
        </div>
      </section>
  )
}
