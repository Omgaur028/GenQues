import Hero from "../components/Hero";


import Feature from "../components/Feature";


import TestimonialCarousel from "../components/TestimonialCarousel";
import { useEffect } from "react";


const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <main>
      <Hero />
     
      
      <Feature />
      
  
      <TestimonialCarousel />
    </main>
  );
};

export default Home;