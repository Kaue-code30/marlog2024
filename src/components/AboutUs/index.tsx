"use client"

import aboutUsImageBackground from "@/assets/home/aboutUs.svg"
import aboutUsBanner from "@/assets/home/aboutUsBanner.png"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
    return (
        <section id="quem-somos" style={{ background: "linear-gradient(10deg, #2462DB 0%, #133475 100%)" }} className="flex lg:flex-row flex-col-reverse bg-contain gap-10 lg:gap-20 bg-no-repeat  bg-right items-center justify-center lg:py-0 py-20 px-8 lg:px-24 w-full h-full">
            <motion.div  className="flex flex-col items-start gap-3 justify-center w-full lg:w-1/2">
                <h1 className="text-2xl text-white pb-2 lg:text-5xl font-bold">
                    Quem somos?
                </h1>
                <p className="w-full text-white  lg:w-[90%]">
                    Na <span className="font-semibold">Marlog Transportes</span>, nossa missão é simplificar o transporte de mercadorias por meio de soluções inovadoras e confiáveis que impulsionam o sucesso de nossos clientes. Guiados pelos valores de <span className="font-semibold">integridade, comprometimento e excelência</span>, não apenas entregamos produtos, mas também estabelecemos relacionamentos duradouros fundamentados na confiança mútua. Com uma abordagem centrada no cliente e um compromisso com a <span className="font-semibold">sustentabilidade</span>, almejamos ser o seu parceiro de eleição em logística.
                </p>
                <button>
                    <Link className="flex hover:scale-95 text-sm mt-2 transition-all bg-transparent border items-center justify-center w-72 lg:w-56 h-10 hover:bg-white hover:text-black hover:font-medium rounded-lg text-white"  href={"#formulario"}>falar com um especialista</Link>
                </button>
            </motion.div>
            <motion.div  className="flex items-center justify-center w-full lg:w-1/2">
                <Image quality={100} className="flex w-full rounded-2xl shadow-md" src={aboutUsBanner.src} width={1000} alt="Caminhoneiro dentro do caminhão sorrindo" height={1000} />
            </motion.div>
        </section>
    )
}