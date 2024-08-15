"use client"
import { useEffect, useState } from "react";
import { ClientData } from "@/interface/clientData";
import { useClientData } from "@/hook/userData";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("");
    const [messageError, setMessageError] = useState("");
    const { mutate, isPending, isSuccess, response } = useClientData();
    const [showSuccess, setShowSuccess] = useState(false);

    const client = { nome, email, telefone, assunto };

    const resetForms = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setAssunto("");
        setMessageError("");
    };

    useEffect(() => {
        if (isSuccess) {
            setShowSuccess(true);
            resetForms();
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }
    }, [isSuccess]);

    const handleSubmit = () => {
        if (!nome || !email || !telefone || !assunto) {
            setMessageError("Por favor preencha todos os campos.");
        } else {
            setMessageError(""); // Clear the error message if validation passes
            mutate(client);
        }
    };

    return (
        <section id="formulario" style={{ background: "linear-gradient(180deg, #2462DB 0%, #133475 100%)" }} className="flex text-white flex-col gap-10 lg:flex-row bg-cover lg:gap-20 bg-no-repeat bg-center items-center justify-center lg:py-20 py-20 px-8 lg:px-24 w-full h-full">
            <div className="flex-col items-start justify-start w-full lg:w-1/2 gap-5 h-full flex">
                <h1 className=" font-bold lg:-mt-56 text-2xl lg:text-5xl">
                    Fale diretamente com o nosso time.
                </h1>
                <p>
                Leve sua operação para o próximo nível com nossas soluções avançadas de transporte. Estamos comprometidos em oferecer serviços que aumentam a produtividade e reduzem os custos operacionais. Entre em contato com a nossa equipe especializada e veja como podemos fazer a diferença no seu negócio.
                </p>
            </div>
            <div className="lg:w-1/2 w-full items-center lg:p-5 justify-center h-full flex">
                <div className="flex justify-center bg-white flex-col gap-5 w-[600px] h-[550px] lg:h-[650px] border p-5 lg:p-10 shadow-md rounded-2xl">
                    <h2 className="text-2xl text-black font-medium">
                        Venha revolucionar seu transporte conosco:
                    </h2>
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        className="bg-transparent border text-black rounded-lg h-14 w-full pl-4"
                        placeholder="Nome*"
                        type="text"
                        value={nome}
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border text-black rounded-lg h-14 w-full pl-4"
                        placeholder="E-mail*"
                        type="text"
                        value={email}
                    />
                    <input
                        onChange={(e) => setTelefone(e.target.value)}
                        className="bg-transparent border text-black rounded-lg h-14 w-full pl-4"
                        placeholder="Telefone*"
                        type="text"
                        value={telefone}
                    />
                    <input
                        onChange={(e) => setAssunto(e.target.value)}
                        className="bg-transparent border text-black rounded-lg h-14 w-full pl-4"
                        placeholder="Assunto do contato*"
                        type="text"
                        value={assunto}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{ background: "linear-gradient(10deg, #2462DB 0%, #133475 100%)" }}
                        className="w-full h-10 border rounded-lg text-white hover:scale-95"
                    >
                        Enviar
                    </button>
                    {messageError && (
                        <p className="text-[#CB1919]">{messageError}</p>
                    )}
                </div>
            </div>
            {showSuccess && (
                <motion.div
                    initial={{ left: -400, opacity: 0 }}
                    animate={{
                        top: 30,
                        left: 100,
                        opacity: 100,
                        transition: { duration: 0.5 },
                    }}
                    id="toast-simple"
                    className="fixed bottom-[80%] mt-20 left-20 flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
                    role="alert"
                >
                    <FaRegCheckCircle className="w-9 text-4xl text-[#009580]" />
                    <div className="ps-4 text-xs text-black font-normal">
                        <h1 className="text-base">Obrigado pelo contato.</h1>
                        Em breve nosso time entrará em contato com você.
                    </div>
                </motion.div>
            )}
        </section>
    );
}
