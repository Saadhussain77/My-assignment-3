import React from 'react'
import Footer from '../Components/Footer/footer'
import Navber from '../Components/Navber/navber'

const contect = () => {
  return (
    <div>
      <Navber/>

      <section className="">
        <div className="bg-black w-full h-6/12 text-blue-800 font-serif">
          <h1 className="text-center py-56 text-6xl font-bold">Contect US</h1>
        </div>
      </section>

      <section className="font-serif">
        <div className="flex w-full bg-blue-800">
          <div className="ml-20 mt-40 mb-10 text-white text-4xl font-bold w-6/12 ">
            <h1>lets Talk</h1>
            <p className="text-lg w-2/3 pt-10 font-normal">
              Send us an email or start a conversation by filling the form
              below.
            </p>
            
            <h2 className="pt-6 text-2xl">Reach us directly!</h2>

            <div className="text-lg mt-8 px-4 py-3 border w-max rounded-full hover:bg-white hover:text-blue-900 transition-all">
              <h1>Email : <a href="mailto: info@gmail.com">info@gmail.com</a></h1>
              
            </div>
            <div className="text-lg mt-4 px-4 py-3 border w-max rounded-full  hover:bg-white hover:text-blue-900 transition-all">
              <h1>Phone :<a href="tel: +9232568970">+9232568970</a></h1>
              
            </div>
          </div>

          <div className="w-6/12 h-screen mt-40 -ml-40">
            <form className="flex justify-center">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="px-3 w-64 py-4 bg-transparent border mr-8 text-white"
                ></input>
                <br></br>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-64 px-3 py-4 bg-transparent border text-white"
                ></input>
                <br></br>
                <br></br>
                <input
                  type="number"
                  name="number"
                  placeholder="Phone"
                  className=" px-3 w-64 py-4 mr-8 bg-transparent border text-white mb-4"
                ></input>
                <br></br>
                <br></br>
                <div className="relative inline w-64 text-white">
                  <textarea
                    placeholder="Your Message"
                    className="absolute -top-8 px-3 py-4 w-80 h-20  bg-transparent border border-white my-4"
                  ></textarea>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <button
                  type="submit"
                  className="text-white border rounded-full px-6 py-3 mt-4 text-lg hover:bg-white hover:text-blue-800 transition-all"
                >
                  Send Message
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        {/* <div className='w-6/12'>
                <div className='w-full h-screen'>

                </div>
            </div> */}
      </section>

      <Footer />
    </div>
  )
}

export default contect
