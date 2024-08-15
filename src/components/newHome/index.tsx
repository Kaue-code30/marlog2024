import Image from "next/image";
import bannerHome from "@/assets/home.png"
import icon from "@/assets/box.svg"

const data = [
    {
        icon: icon,
        title: "Lorem ipsum dolor sit amet, consect",
        lorem: "lorem Ips buter sus et sapien sed diam nonum et justo ut et dolor et just"
    },
    {
        icon: icon,
        title: "Lorem ipsum dolor sit amet, consect",
        lorem: "lorem Ips buter sus et sapien sed diam nonum et justo ut et dolor et just"
    },
    {
        icon: icon,
        title: "Lorem ipsum dolor sit amet, consect",
        lorem: "lorem Ips buter sus et sapien sed diam nonum et justo ut et dolor et just"
    },
]

export default function NewHome() {
    return (
        <section className="flex flex-col lg:h-fit h-auto bg-cover bg-no-repeat bg-center items-center  justify-start  w-full bg-white">
            <div style={{ background: "linear-gradient(180deg, #2462DB 0%, #133475 100%)" }} className="h-auto lg:flex-row flex-col lg:h-2/3  lg:mt-[100px] px-8  lg:px-24 w-full  flex">
                <article className="lg:h-auto flex items-center justify-center h-auto w-full lg:w-1/2">
                    <div className="flex flex-col h-full lg:pt-0 pt-32 items-start gap-5 justify-center">
                        <h1 className="text-2xl lg:text-5xl text-white font-bold">
                            Conectando destinos com eficiência e segurança.
                        </h1>
                        <p className="text-base lg:text-base text-white w-full lg:w-4/5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w
                        </p>
                        <button className="w-[200px] hover:scale-95 transition h-10 bg-transparent rounded-lg border text-white text-sm border-white">
                            saiba mais
                        </button>
                    </div>
                </article>
                <aside className="h-full flex items-end justify-center w-full lg:w-1/2"><Image className="w-full" alt="" src={bannerHome.src} width={100} height={100} /></aside>
            </div>
        </section>
    )
}