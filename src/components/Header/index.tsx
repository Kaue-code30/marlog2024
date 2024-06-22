import logoAzul from "@/assets/logo/logo-azul.svg"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex items-center justify-between shadow-md fixed px-24 py-7 h-28 w-full bg-white">
            <div className="flex justify-center items-center w-44">
                <Link href={"#"}>
                    <Image className="w-44" src={logoAzul} alt="Logo azul da Marlog Transportes" width={100} height={100} />
                </Link>
            </div>
            <ul className="flex items-center font-medium justify-end gap-4">
                <li className="flex items-center justify-center h-full"><Link className="hover:scale-90 transition-all" href={""}>Home</Link></li>
                <li className="flex items-center justify-center h-full"><Link className="hover:scale-90 transition-all" href={""}>Serviços</Link></li>
                <li className="flex items-center justify-center h-full"><Link className="hover:scale-90 transition-all" href={""}>Quem somos</Link></li>
                <li className="flex items-center justify-center h-full"><Link className="hover:scale-90 transition-all" href={""}>Vantagens</Link></li>
                <li className="flex items-center justify-center h-full"><Link className="flex hover:scale-95 transition-all items-center justify-center w-56 h-10 rounded-lg text-white" style={{ background: "linear-gradient(160deg, #2462DB 0%, #133475 100%)" }} href={""}>entrar em contato</Link></li>
            </ul>
        </header>
    )
}