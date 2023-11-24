import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-gold-pattern bg-cover bg-no-repeat bg-center h-auto max-h-[500px] md:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px] overflow-hidden'>
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Tech />


        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Experience />
        </div>
        
        <Works />
        
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
