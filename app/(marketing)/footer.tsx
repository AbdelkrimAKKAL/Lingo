import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="flex items-center">
                    <Image src="/fr.svg" alt="French" width={40} height={32} className="mr-4 rounded-md" />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="flex items-center">
                    <Image src="/es.svg" alt="Spanish" width={40} height={32} className="mr-4 rounded-md" />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="flex items-center">
                    <Image src="/it.svg" alt="Italian" width={40} height={32} className="mr-4 rounded-md" />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="flex items-center">
                    <Image src="/jp.svg" alt="Japenese" width={40} height={32} className="mr-4 rounded-md" />
                    Japenese
                </Button>
            </div>
        </footer>
        
    )
}