"use client"
import React from 'react';
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';



const aboutPage = () => {
  return (
    
    <div className="" >

<div className="flex  mt-4 ">
  <div className="flex space-x-4 w-full">
    
    <a href="#" className="px-2 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Home</a>
    <span class="px-2 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ">&gt;</span>
    <p class="px-2 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 w-full" style={{color:"purple"}}>About Us</p>
  </div>
</div>

<div className="flex justify-center items-center mt-8" style={{marginBottom:'3rem'}} >
<div className="text-center ">
    <h2 class="text-3xl font-semibold inline-block relative text-gray-800">
      <span class="bg-yellow-300 px-2 py-1 rounded-lg text">About Us</span>
      <span class="highlight absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black transition-width duration-300"></span>
    </h2>
  </div> 
</div>

<div className='flex flex-row whitespace-wrap' style={{ marginTop: '2rem', marginBottom: '3rem' }}>

<div className="w-1/2 pr-2 " style={{width:'50%' , marginLeft:'5rem'}}>
  <h1 className="text-2xl font-bold mb-4" style={{ fontSize: '2.5rem', lineHeight: '3rem' }}>Who we are</h1>
  <p>We offer restaurant owners a comprehensive online ordering system from their own website under their own brand, complete with a set of tools to increase sales, customer loyalty, and build their online presence. We have been operating since 2012 and have clients in over 40 countries worldwide.</p>
</div>

<div className="w-1/2 pl-2" style={{width:'50%', marginRight:"5rem"}}>
  <h1 className="text-2xl font-bold mb-4" style={{ fontSize: '2.5rem', lineHeight: '3rem' }}>Who is DishDash for?</h1>
  <p>Our goal is for restaurants to grow their business online and become independent from food ordering platforms and their high commissions. Online orders under their own brand mean significantly lower costs, their own customer database, and complete control over the marketing and pricing policies of their restaurant.</p>
</div>
</div>

<div id="default-carousel" class="relative w-full flex justify-center content-center ml-12 mr-5" style={{marginLeft:'1rem', marginRight:"1rem", marginBottom: '1rem' }} data-carousel="slide">
<div className="" style={{ width:"40rem", height:"20rem", marginRight: '2rem', marginTop:"5rem"}}> <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1" /></div>
<div style={{width:"40rem", height:"20rem", marginRight: '2rem' , marginTop:"5rem"}}><img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2" /></div>
<div style={{width:"40rem", height:"20rem", marginRight: '2rem' , marginTop:"5rem"}}><img src="https://plus.unsplash.com/premium_photo-1664205766193-46193f865ae1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3" /></div>
<div style={{width:"40rem", height:"20rem", marginRight: '2rem' , marginTop:"5rem"}}><img src="https://plus.unsplash.com/premium_photo-1679434184867-a294eb85400c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="4" /></div>
</div>
      
      

      <div className="flex justify-center items-center mt-8" style={{marginBottom:'3rem'}} >
<div class="text-center ">
    <h1 class="text-3xl font-semibold inline-block relative text-gray-800">
      <span class="bg-yellow-300 px-2 py-1 rounded-lg text">Our Team</span>
      <span class="highlight absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black transition-width duration-300"></span>
    </h1>
  </div> 
</div>

<div className="flex flex-row justify-center items-center space-between space-x-[4rem] mt-[2rem]" >

<div className="flex flex-col " style={{ marginRight: '2rem', marginBottom:'2rem' }}>
          <img className="rounded-full mb-8  " style={{width:"14rem", height:"14rem" , }}
src="https://cdn-bnklg.nitrocdn.com/WQiharaAoSUWjdmYdQaoZKLXawgJIPOR/assets/images/source/rev-3e47137/www.upmenu.com/wp-content/uploads/2023/09/Marek-Truskolaski.png.webp" alt="person1"/>
          <h2 className="font-semibold text-center text-gray-700 text-lg">Marek Truskolaski</h2>
          <h2 className="font-bold text-center text-gray-700 text-lg">Co-founder</h2>
        </div>

        <div className="flex flex-col" style={{ marginRight: '2rem'  , marginBottom:'2rem'}}>
          <img className="rounded-full mb-8" style={{width:"14rem", height:"14rem"}}
src="https://cdn-bnklg.nitrocdn.com/WQiharaAoSUWjdmYdQaoZKLXawgJIPOR/assets/images/source/rev-3e47137/www.upmenu.com/wp-content/uploads/2023/09/Damian-Urbaniec.png.webp" alt="person2"/>
          <h2 className="font-semibold text-center text-gray-700 text-lg">Damian Urbaniec</h2>
          <h2 className="font-bold text-center text-gray-700 text-lg">UX Designer</h2>
        </div>

        <div className="flex flex-col" style={{ marginRight: '2rem' , marginBottom:'2rem' }}>
          <img className="rounded-full mb-8" style={{width:"14rem", height:"14rem"}}
src="https://cdn-bnklg.nitrocdn.com/WQiharaAoSUWjdmYdQaoZKLXawgJIPOR/assets/images/source/rev-3e47137/www.upmenu.com/wp-content/uploads/2023/09/Anna-Muras.png.webp" alt="person3"/>
          <h2 className="font-semibold text-center text-gray-700 text-lg">Anna Muras</h2>
          <h2 className="font-bold text-center text-gray-700 text-lg">Co-Founder</h2>
        </div>
        <div className="flex flex-col" style={{ marginRight: '2rem' , marginBottom:'2rem' }}>
          <img className="rounded-full mb-8" style={{width:"14rem", height:"14rem"}}
src="https://cdn-bnklg.nitrocdn.com/WQiharaAoSUWjdmYdQaoZKLXawgJIPOR/assets/images/source/rev-3e47137/www.upmenu.com/wp-content/uploads/2023/09/Wojtek-Kazmierczak.png.webp" alt="person4"/>
          <h2 className="font-semibold text-center text-gray-700 text-lg">Bartek Konopka</h2>
          <h2 className="font-bold text-center text-gray-700 text-lg">Web Developer</h2>
        </div>

      </div>


      
    <Footer/>
  </div>
  



)}

export default aboutPage;