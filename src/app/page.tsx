import { getProducts, Shoes } from "@/service/getProducts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home",
}

export const revalidate = 60

export default async function Home() {
  const data =  await getProducts();
  const shoes: Shoes = data[0]
  return (
    <section>
      <h1 className="text-3xl font-bold mb-10 text-center">Choose your shoes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shoes.length ? shoes?.map((shoe) => (
          <Link className="card" key={shoe.product_id} href={`/products/${shoe.product_id}`}>
            <div className="overflow-hidden  h-96 rounded-lg shadow-lg">
              <Image width={400} height={400} className="w-full h-48 object-cover " src={shoe.image_url} alt={shoe.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-900">{shoe.brand_name}</div>
                <div className="font-bold text-xl mb-2">{shoe.name}</div>

              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${shoe.price}</span>
              </div>
            </div>
          </Link>
        )): <h2>No products</h2>}
      </div>
      
    </section>
  );
}
