import { ContactForm } from "@/components/UI/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',

}
export default function ContactsPage() {
    

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-10">Feel free to contact us</h1>

            <ContactForm />
            
        </div>
    )
}
