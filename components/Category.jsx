import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Categorylinks } from './Index'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

const Category = () => {
    return (
        <section className='w-full h-full flex flex-col items-center justify-center'>

            <div className='flex flex-wrap items-center justify-center gap-2'>

                {Categorylinks.map((category, index) => (

                    <Link key={index} href={category.path}  >
                        <div className='flex items-center justify-center relative'>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[149px] w-[140px] bg-white rounded-tl-[56%_58%] rounded-tr-[44%_53%] rounded-bl-[55%_42%] rounded-br-[45%_47%]' />
                            <div className='h-[150px] w-[145px] bg-blue-950 rounded-tl-[56%_58%] rounded-tr-[44%_53%] rounded-bl-[55%_42%] rounded-br-[45%_47%] ' />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Image src={category.image} alt='Bike picture' width={70} height={75} />
                                <span className='text-[20px] font-bold'>{category.name}</span>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>

            <div className='relative mt-20 mb-20 '>
                <Search className='absolute top-1/2 left-3 -translate-y-1/2'  />
                <Input
                    type='search' 
                    placeholder='What can we deliver to you ? '
                    className='pr-4 pl-10 rounded-full '/>
            </div>

        </section>
    )
}

export default Category