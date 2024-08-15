"use client"

import { faFlag, faTruckRampBox, faWarehouse, faTruck, faBoxOpen, faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


export default function OurServices() {

const dataServices = [
        {
            icon: faFlag,
            title: "transporte nacional",
            text: "Atuamos no transporte de cargas em geral, cargas normais, excedentes e porta containers em todo território Brasileiro e países do Mercosul."
        },
        {
            icon: faTruckRampBox,
            title: "coleta",
            text: "Nosso serviço de coleta é projetado para oferecer praticidade e eficiência no transporte de mercadorias. Entendemos a importância de cada entrega, por isso nos dedicamos a fornecer um atendimento personalizado."
        },
        {
            icon: faWarehouse,
            title: "sellers",
            text: "Fazemos coletas em pequenos, médios e grandes Sellers, utilizando tecnologia avançada para fazer a conferência no ato da coleta e garantindo a qualidade e agilidade de todas as informações para os Sellers e aos clientes."
        },
        {
            icon: faTruck,
            title: "entregas dedicadas",
            text: "Esse modelo de transporte é quando um veículo é disponibilizado para cargas de apenas um fornecedor, com entrega para um ou diversos destinatários"
        },
        {
            icon: faBoxOpen,
            title: "last mile",
            text: "Last-Mile refere-se ao transporte em que a mercadoria sai do centro de distribuição para o destino final, ou seja, para o cliente tanto B2B como B2C que adquiriu determinado produto."
        },
        {
            icon: faBoxesStacked,
            title: "first mile",
            text: "O first mile é a fase inicial da cadeia de abastecimento logística, que compreende a coleta, transporte inicial e consolidação de produtos a partir do ponto de origem até o primeiro ponto de distribuição."
        },
]


    return (
        <section id="nossos-servicos" className="flex flex-col bg-cover gap-10 lg:gap-20 bg-no-repeat  lg:pt-3  pt-20 lg:pb-16 pb-20 bg-center items-center justify-center px-8 lg:px-24 w-full h-full bg-white">
            <motion.div initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }} className="w-full h-1/4 gap-3 pb-5 lg:pb-0 flex flex-col items-center justify-center">
                <h1 className="text-2xl text-center  lg:text-5xl  font-bold">
                    Conheça nossos serviços.
                </h1>
                <p className="text-center">
                    Descubra como podemos facilitar seu transporte com nossos serviços.
                </p>

            </motion.div>
            <div className="w-full flex items-center justify-center gap-14 flex-wrap h-3/4">
                {
                    dataServices.map((data, index) => {
                        return (
                            <motion.div initial={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{ y: 0, opacity: 1 }} className="flex items-start justify-center gap-3 w-[455px]" key={index}>
                                <div style={{ border: "solid 1px #2461db46" }} className=" hover:bg-[#2462DB] hover:text-white transition text-[#2462DB] shadow-md flex items-center justify-center    p-7 w-10 h-10 rounded-full">
                                    <FontAwesomeIcon className="text-xl " icon={data.icon} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h2 className="uppercase font-semibold">
                                        {data.title}
                                    </h2>
                                    <div style={{ background: "linear-gradient(10deg, #2462DB 0%, #133475 100%)" }} className="rounded w-20 h-1"></div>
                                    <p>
                                        {data.text}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}