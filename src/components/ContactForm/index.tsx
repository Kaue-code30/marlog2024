import Image from "next/image";
import truck from "@/assets/home/truck.png"

export default function ContactForm() {
    return (
        <section style={{ background: "linear-gradient(160deg, #2462DB 0%, #133475 100%)" }} className="flex text-white flex-col  gap-10 lg:flex-row bg-cover lg:gap-20 bg-no-repeat bg-center items-center justify-center  lg:py-20  py-20 px-8 lg:px-24 w-full h-full">
            <div className=" flex-col items-start justify-start w-full lg:w-1/2 gap-5 h-full flex">
                <h1 className="uppercase font-bold lg:-mt-56 text-2xl lg:text-5xl">
                    Fale diretamente com o nosso time.
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quos laborum repudiandae officia doloremque optio repellat delectus, tenetur id eius, reprehenderit ea aperiam? Est quasi eveniet mollitia ducimus quas laborum!
                </p>
            </div>
            <div className="lg:w-1/2 w-full items-center  lg:p-5 justify-center h-full flex">
                <div className="flex justify-center bg-white flex-col gap-5 w-[600px] h-[550px] lg:h-[650px] border p-5 lg:p-10 shadow-md rounded-2xl" >
                    <h2 className="text-2xl text-black font-medium">
                        Venha revolucionar seu transporte conosco:
                    </h2>
                    <input className="bg-transparent border text-black rounded-lg h-14 w-full pl-4" placeholder="Nome:" type="text" name="" id="" />
                    <input className="bg-transparent border  text-black rounded-lg h-14 w-full pl-4" placeholder="E-mail:" type="text" name="" id="" />
                    <input className="bg-transparent border  text-black rounded-lg h-14 w-full pl-4" placeholder="Telefone:" type="text" name="" id="" />
                    <input className="bg-transparent border  text-black rounded-lg h-14 w-full pl-4" placeholder="Assunto do contato:" type="text" name="" id="" />
                    <button style={{ background: "linear-gradient(160deg, #2462DB 0%, #133475 100%)" }} className="w-full h-10 border rounded-lg text-white hover:scale-95">enviar</button>
                </div>
            </div>
        </section>
    )
}