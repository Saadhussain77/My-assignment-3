import React from 'react'
import Footer from '../Components/Footer/footer'
import Navber from '../Components/Navber/navber'
import Hero from '../Components/Hero/hero'

const page = () => {
  return (
    <div>
      <Navber/>
      <section className="">
        <div className="bg-black w-full h-6/12 text-blue-800 font-serif">
          <h1 className="text-center py-56 text-6xl font-bold">About Us</h1>
        </div>
      </section>

      <div className="flex font-serif">
        <div className="bg-blue-800 h-screen text-white w-6/12">
          <h1 className="ml-16 pt-12 text-3xl font-bold w-80 text-white">About Us</h1>

          <p className="ml-16 pt-9 w-9/12">
            An Anglish Paragraph for Reading: Reading is a fundamental skill that opens the door to knowledge, imagination, and 
            endless adventures through words. English paragraphs for reading are an essential part of this journey, helping you 
            enhance your reading skills, comprehension, and vocabulary. In this blog, we'll explore what an English paragraph 
            for reading is, provide tips on how to read and understand paragraphs effectively, and offer five sample paragraphs 
            for reading practice.
          </p>
          <p className="ml-16 w-9/12">An English paragraph for reading is a concise piece of text composed of one or more 
          sentences that convey a specific idea, information, or story. It serves as a fundamental unit of written 
          communication, allowing readers to engage with written content in manageable segments.</p>
        </div>
        <div className="relative w-6/12 bg-blue-800 h-screen text-white">
          <div className="absolute top-28 left-9 w-8/12 overflow-hidden">
            <img alt="" src="images/about.jpg" className='h-96 w-[500px]'></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
