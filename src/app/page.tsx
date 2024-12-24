

import Hero from "@/components/Hero";
import Fonts  from "@/components/fonts";
import Product from "./products/page";
import Top_sell from "./products/sell";
import Testimonials from "@/components/testimonals";


export default function Home() {
  return (
 <div>
  <Hero/>
  <Fonts/>
  <Product/>
  <Top_sell/>
 <Testimonials/>
  
 </div>

  );
}
