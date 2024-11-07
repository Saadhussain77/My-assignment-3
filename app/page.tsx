import Image from "next/image";
import Navber from "./Components/Navber/navber";
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Hero/hero";

export default function Home() {
  return (
    <div>
      <Navber />
      <Hero />

      <section className="bg-blue-800">
        <div className="w-full border">
        <h1 className="pt-20 px-20 text-white font-serif text-4xl">
              1.
            </h1>  
          <div className="flex">
            
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
          </div><br></br>
        </div>
      </section>

      <section className="bg-blue-800 border">
        <div className="w-full">
        <h1 className="pt-20 px-20 text-white font-serif text-4xl">
              2.
            </h1>  
          <div className=" flex">
            
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
            <p className="text-white font-serif w-6/12 px-20 py-10">
              The Paragraphs module in Drupal offers editors a component-driven
              architecture for building pages with flexibility and ease. Since
              2015, Morpht has been at the forefront of developing innovative
              approaches to site building using Paragraphs. This case study
              highlights the key features of the Paragraphs module and showcases
              examples of paragraphs to demonstrate its potential.
            </p>
          </div><br></br>
        </div>
      </section>

      <Footer />
    </div>
  );
}
