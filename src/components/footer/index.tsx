import Image from "next/image";
import logoBranco from "@/assets/logo/logo-azul.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-10 lg:px-24 bg-white px-8 h-[300px] lg:h-[150px]">
            <div className="w-full h-full flex lg:flex-row flex-col text-center lg:py-0 py-10 lg:gap-0 gap-5 items-start lg:items-center justify-between">
                <Image className="w-64 lg:-ml-0 -ml-10" src={logoBranco} alt="" width={100} height={100} />
                <h2 className="text-left lg:text-center">
                    Marlog Transportes © 2024 – Todos os direitos reservados.
                </h2>
                <Link className="text-black" href={"/politica-privacidade"}>Política de Privacidade</Link>
            </div>
        </footer>
    )
}