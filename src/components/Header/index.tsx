"use client";

import { useState } from "react";
import logoUx from "@/assets/logo/logo-azul.svg";


import Link from "next/link";
import Image from "next/image";


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
    const [openModal, setOpenModal] = useState(false);


    const handleOpenClick = () => {
        setOpenMenu(!openMenu);
        setOpenMenuLog(false);
        setOpenMenuGestao(false);
    };


    return (
        <>
            <nav className="bg-white fixed flex items-center shadow-md justify-center z-50  top-0 w-full px-1 md:px-4 border-gray-200">
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
                                    className="lg:w-64 w-40 flex items-start justify-start"
                                    alt="UX Group"
                                />
                            </Link>
                            <button
                                onClick={handleOpenClick}
                                data-collapse-toggle="mega-menu-full-image"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-12 justify-center text-sm text-black rounded-lg md:hidden focus:font-bold  "
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
                                <ul className="flex md:items-center md:justify-center flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                                    <li>
                                        <Link
                                            href="/"
                                            className="flex md:hover:border-b md:border-b hover:transition-all  items-center cursor-pointer justify-between w-20 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-black  md:p-0 "
                                            aria-current="page"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                           
                                            id="mega-menu-full-cta-image-button"
                                            data-collapse-toggle="mega-menu-full-image-dropdown"
                                            className="flex hover:transition-all  items-center hover:font-normal cursor-pointer justify-between  bg-transparent font-normal py-2 w-20  md:w-auto md:hover:bg-transparent md:border-transparent  text-black  md:p-0 "
                                        >
                                            Serviços

                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={""}
                                           
                                            className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-32 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-black  md:p-0 "
                                            aria-current="page"
                                        >
                                            Quem somos

                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            target="_blank"
                                            href={""}
                                            className="flex lg:justify-center lg:items-center   hover:transition-all  items-center cursor-pointer justify-between w-24 bg-transparent font-normal py-2  md:w-auto md:hover:bg-transparent md:border-transparent  text-black  md:p-0 "
                                            aria-current="page"
                                        >
                                            Vantagens
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
            </nav>
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