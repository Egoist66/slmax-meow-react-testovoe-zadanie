import { Shoe } from "@/service/getProducts";
import { updateProduct } from "@/service/updateProduct";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(req: Request, {params}: {params: {id: string}}) {

    const data: Shoe = await req.json()
    const id = +params.id;

    if(data){
        const [res] = await updateProduct({
            id,
            brand_name: data.brand_name,
            name: data.name,
            price: data.price,
            description: data.description,
            image_url: data.image_url
        })

        revalidatePath(`/`)
        return NextResponse.json({data})

    }

    return NextResponse.json({status:'No data'})


}