"use client";

import { useEffect, useState } from "react";
import logoUx from "@/assets/logo/logo-branco.svg";


import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


interface contentCard {
    index: number;
    text: string;
    banner: string;
    link: string;
    logo: string;
}




export default function Header() {
    const [openMenuGestao, setOpenMenuGestao] = useState(false);
    const [openMenuLog, setOpenMenuLog] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [indexHover, setIndexHover] = useState(0);



    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenClick = () => {
        setOpenMenu(!openMenu);
        setOpenMenuLog(false);
        setOpenMenuGestao(false);
    };


    return (
        <>
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={isFixed ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: isFixed ? 100 : 50,
                    damping: 20,
                    duration: isFixed ? 2 : 1,
                }}
                className={`bg-[#2462DB] ${isFixed ? 'fixed top-0' : 'absolute'
                    } flex items-center justify-center z-50 w-full px-1 md:px-4 border-gray-200`}
            >
                <div className="flex items-center  justify-center w-full max-w-[1996px] h-full">
                    <div className="xl:w-[94%]  lg:w-[95%] w-[97%] flex items-center justify-center">
                        <div className="flex w-full flex-wrap  justify-between items-center mx-auto  py-5">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 rtl:space-x-reverse"
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={logoUx.src}
                                    className="lg:w-56 lg:pl-5 pl-4 w-36 flex items-start justify-start"
                                    alt="UX Group"
                                />
                            </Link>
                            <button
                                onClick={handleOpenClick}
                                data-collapse-toggle="mega-menu-full-image"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-12 justify-center text-sm text-white rounded-lg md:hidden focus:font-bold  "
                                aria-controls="mega-menu-full-image"
                                aria-expanded={openMenu ? "true" : "false"}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                            <div
                                id="mega-menu-full-image"
                                className={`items-center py-4 justify-around ${openMenu ? "block" : "hidden"
                                    } w-full pl-5 md:flex md:w-auto md:order-1`}
                            >
                                <ul className="flex md:items-center md:justify-center  flex-col  font-medium md:flex-row md:mt-0 md:space-x-5 rtl:space-x-reverse">
                                    <li>
                                        <Link
                                            href="/"
                                            className="flex md:hover:border-b hover:scale-95 md:border-b hover:transition-all  items-center cursor-pointer justify-between w-20 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                                            aria-current="page"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#nossos-servicos"}

                                            id="mega-menu-full-cta-image-button"
                                            data-collapse-toggle="mega-menu-full-image-dropdown"
                                            className="flex hover:transition-all  items-center hover:scale-95 hover:font-normal cursor-pointer justify-between  bg-transparent font-normal py-2 w-20  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                                        >
                                            Serviços

                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#quem-somos"}

                                            className="flex lg:justify-center lg:items-center hover:scale-95  hover:transition-all  items-center cursor-pointer justify-between w-32 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white  md:p-0 "
                                            aria-current="page"
                                        >
                                            Quem somos

                                        </Link>
                                    </li>
                                    <li>
                                        <Link

                                            href={"#vantagens"}
                                            className="flex lg:justify-center lg:items-center hover:scale-95 hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-white md:p-0 "
                                            aria-current="page"
                                        >
                                            Vantagens
                                        </Link>
                                    </li>
                                    <li>
                                        <Link

                                            href={"#formulario"}

                                            className="flex lg:justify-center px-3 bg-white text-black lg:items-center p-5  hover:transition-all   cursor-pointer hover:scale-95 lg:w-[200px] w-3/4 text-center items-center justify-center bg-transparent font-normal py-2  md:w-auto  md:border-transparent rounded-lg"
                                            aria-current="page"
                                        >
                                            entrar em contato
                                        </Link>
                                    </li>

                                    {/* <li className="w-full md:w-[200px]">
                    <PedidoOndetah />
                  </li> */}
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </motion.nav>
        </>
    );
}


{/* <Link
                  target="_blank"
                  className={style.category}
                  href={p._embedded["wp:term"][0][0].link}
                  style={{ zIndex: 1 }}
                >
                  {p._embedded["wp:term"][0][0].name}
                  {p._embedded["wp:term"][0][0].name}
                </Link>
                <Link
                  target="_blank"
                  href={p.link}
                  style={{
                    display: "block",
                    width: "234px",
                    height: "203px",
                    position: "relative",
                  }}
                ></Link> */}