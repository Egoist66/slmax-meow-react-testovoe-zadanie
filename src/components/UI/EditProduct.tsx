'use client';
import { Shoe } from "@/service/getProducts";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent, useEffect } from "react"

export const EditProduct = ({product}: {product: Shoe}) => {
    const router = useRouter()
    const [form, setForm] = useState({
        brand_name: '',
        name: '',
        price: '',
        description: '',
        image_url: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`/api/edit-product/${product.product_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                next: {
                    revalidate: 10
                },
                body: JSON.stringify(form)
            })

            if(response.ok){
               router.refresh()
            }
    
            

         


        }

        catch(e) {
            console.log(e)

        }


    }

    useEffect(() => {
        setForm({
            brand_name: product.brand_name,
            name: product.name,
            price: product.price.toString(),
            description: product.description,
            image_url: product.image_url
        })
    }, [product])

    return (
        <form onSubmit={handleSubmit} className="space-y-4 my-10">
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium" htmlFor="brand_name">Brand name:</label>
                <input type="text" name="brand_name" value={form.brand_name} onChange={handleChange} className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium" htmlFor="name">Name:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium" htmlFor="price">Price:</label>
                <input type="number" name="price" value={form.price} onChange={handleChange} className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium" htmlFor="description">Description:</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium" htmlFor="image_url">Image URL:</label>
                <input type="text" name="image_url" value={form.image_url} onChange={handleChange} className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Update product</button>
        </form>
    )
}


