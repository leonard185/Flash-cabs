"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Button from "@/components/button"




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeIcon = () => setIsOpen(!isOpen);
    return (
        
            <header className=" w-full flex justify-between items-center p-4 " >

              <div className="flex items-center w-full"> 
              <Link href={"/"} className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text uppercase">
                    FLASH-CABS
                </Link>
              </div>
                <div className='hidden w-full md:flex items-center justify-center gap-1'>
                    <p className="text-lg font-medium text-gray-700 flex items-center gap-1">
                        Delivering to <span onClick={changeIcon} className='font-bold size-20 cursor-pointer flex items-center '> 
                            Kerugoya
                        </span>
                        {isOpen ? (<ChevronUp/> ) : <ChevronDown />}
                        </p>
                       
                    
                    </div>
                <div className='w-full flex justify-end  gap-2' > 
                    <Button />
                </div>




                </header>

    )
}

export default Header