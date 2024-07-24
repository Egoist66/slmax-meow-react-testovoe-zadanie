'use client'

import { ChangeEvent, FC, useState } from "react";

type FormState = {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });
    
    const setInputValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if(response.ok){
                console.log(result)
                setFormState({
                    name: '',
                    email: '',
                    message: ''
                })
            }
        }
        catch(e){
            console.log(e)
        }
     
    }
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" name="name" id="name" value={formState.name} onChange={setInputValues} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input required type="email" id="email" name="email" value={formState.email} onChange={setInputValues} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" value={formState.message} onChange={setInputValues} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
        </form>
    )

}