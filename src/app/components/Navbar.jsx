import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div class="logo">fatma</div>
        <nav class="navbar">
            <div>
                
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact us</Link>
            </div>
            <div class="light">
               {/*  <img id="icon" onclick="dark()" src="light_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg">
           */}  </div>
         
        </nav>
    </header>
  )
}

export default Navbar