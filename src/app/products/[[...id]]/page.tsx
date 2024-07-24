import { EditProduct } from "@/components/UI/EditProduct";
import { getProduct, Shoe } from "@/service/getProducts";
import Image from "next/image";


export const revalidate = 60
export const generateMetadata = async ({ params }: { params: { id: string } }) => {

    const [data] =  (await getProduct(parseInt(params.id)));
    const shoe: any = data
    if(!shoe.length) {
        return {
            title: 'Product not found',
            description: 'Product not found',
        }
    }
    return {
        title: shoe[0]?.name,
        description: shoe[0]?.description,
    }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const [data] =  (await getProduct(parseInt(params.id)));
  const shoe: any = data


  if (!shoe?.length) {
    return <div className="text-center">Product not found</div>
  }

  return (
   
    <>
        
        <div className="flex">
            <div className="w-1/2 pr-4">
            <Image
                priority
                width={400}
                src={shoe[0].image_url}
                alt={shoe[0].name}
                height={400}
            />
            </div>


            <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-3">{shoe[0].brand_name}</h1>
            <p>{shoe[0].name}</p>
            <p className="mb-3">{shoe[0].description}</p>
            <p className="text-2xl">{shoe[0].price}$</p>
            </div>
        </div>


        <EditProduct product={shoe[0]} />
        
    
    </>
  );
}
