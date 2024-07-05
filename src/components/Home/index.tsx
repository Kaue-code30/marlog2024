"use client"

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Link from "next/link"
import backgroundHome from "@/assets/home/image-home.png"


export default function HomeSection() {
    return (
        <section style={{ backgroundImage: `url(${backgroundHome.src})` }} className="flex h-screen bg-cover bg-no-repeat bg-center items-center justify-center px-8 lg:px-24 w-full h-full bg-white">
            <motion.div initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }} className="w-full flex flex-col items-center gap-5 justify-center">
                <h1 className="font-extrabold text-2xl lg:text-5xl lg:w-1/2 text-white text-center leading-snug">
                    MARLOG TRANSPORTES: CONECTANDO DESTINOS COM <span className="text-[#2462DB]">EFICIÊNCIA</span>  E SEGURANÇA.
                </h1>
                <button style={{ background: "linear-gradient(160deg, #2462DB 0%, #133475 100%)" }} className="w-56 hover:scale-95 transition-all text-white rounded-lg h-10 ">
                    <Link className="w-full text-sm flex items-center justify-center gap-3" href={""}>saiba mais
                        <FontAwesomeIcon style={{fontSize:"14px"}} icon={faArrowCircleRight} /></Link>
                </button>
            </motion.div>
        </section>
    )
}