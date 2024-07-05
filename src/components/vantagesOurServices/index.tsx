"use client"
import icon1 from "@/assets/icons/box.svg"
import icon2 from "@/assets/icons/clock.svg"
import icon3 from "@/assets/icons/lock.svg"
import icon4 from "@/assets/icons/money.svg"
import { motion } from "framer-motion"
import Image from "next/image"


export default function VantagesOurServices() {

    const contentData = [
        {
            icon: icon1,
            title: "Qualidade",
            text: "Tecnologias de monitoramento e rastreamento, garantem a integridade das mercadorias.",
        },
        {
            icon: icon2,
            title: "Eficiência",
            text: "Melhore a sua eficiência operacional, garantindo entregas rápidas e confiáveis. ",
        },
        {
            icon: icon3,
            title: "Segurança",
            text: "Colaboradores bem treinados e veículos bem mantidos são essenciais para assegurar operações confiáveis.",
        },
        {
            icon: icon4,
            title: "Preço justo",
            text: "Transparência nos custos e serviços competitivos.",
        },

    ]

    return (
        <section className="flex flex-col bg-cover lg:gap-20 bg-no-repeat bg-center items-center justify-center lg:py-0 py-20 px-8 lg:px-24 w-full h-full bg-white">
            <div className="flex justify-center lg:pb-10 items-center flex-col gap-4 w-full h-1/4">
                <h1 className="text-2xl font-bold text-center lg:text-5xl">VANTAGENS DE ULTILIZAR NOSSOS SERVIÇOS</h1>
                <p className="text-sm w-full lg:w-[73%] text-center">Os clientes depositam sua confiança em nossa empresa não apenas pela eficiência, mas também pelo cuidado com que cada envio é tratado, como se fosse de nossa própria responsabilidade. Seja para atender a uma entrega urgente ou gerenciar um projeto logístico complexo, estamos comprometidos em superar as expectativas e simplificar os desafios logísticos enfrentados por eles.</p>
            </div>
            <motion.div initial={{ opacity: 0, }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }} className="flex lg:flex-row flex-col gap-0 lg:gap-0 w-full lg:mr-20 justify-center items-center">
                {
                    contentData.map((data, index) => {
                        return (
                            <>
                                <div className="w-24  flex items-center justify-center lg:hover:scale-110 transition-all relative top-[40px] lg:relative lg:-top-28 lg:left-[180px] h-24 border shadow-md rounded-full bg-[#2462DB]">
                                    <Image className="w-12 text-white" src={data.icon.src} alt="" width={100} height={100} />
                                </div>
                                <div className="flex p-4   flex-col items-center gap-2 justify-center w-64 h-56 border-[0.5px] shadow-md rounded-2xl">
                                    <h2 className="font-semibold text-base">
                                        {data.title}
                                    </h2>
                                    <p className="text-sm text-center ">
                                        {data.text}
                                    </p>
                                </div>
                            </>
                        )
                    })
                }
            </motion.div>
        </section >
    )
}