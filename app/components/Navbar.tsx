import React from 'react'
import Menu from "/public/assets/Menu.svg"
import Logo from "/public/assets/Logo.svg"
import User from "/public/assets/User.svg"
import Image from 'next/image'
const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];
const Navbar = () => {
  return (
    <nav className='flex justify-between w-full items-center  px-[20px] py-[16px] lg:px-20 lg:container lg:mx-auto'>
      <div className='flex items-center'>
            <Image src={Logo} alt="logo"/>
            <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
                {navLinks.map((item,index)=>(
<p className='font-medium text-[#36485C]' key={index}> {item.name}</p>
                ))}
            </div>
      </div>

      <div className='flex gap-x-5'>
        <p className='font-medium text-[#36485C] hidden lg:block pr-[56px] '>
            Open an Account
        </p>
<div className='flex gap-x-2 items-center'>
        <Image src={User} alt="user profile"/>
        <span className='hidden  font-medium text-[#36485C] lg:block'>
            Sign in
        </span>

</div>
<div>
</div>
<Image src={Menu} alt="menu" className='lg:hidden'/>

      </div>
    </nav>
  )
}

export default Navbar
