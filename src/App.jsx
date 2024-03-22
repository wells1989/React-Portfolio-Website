import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, PopUp } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-gold-pattern bg-cover bg-no-repeat bg-center overflow-y-auto max-h-[400px] sm:max-h-[600px] md:max-h-[650px] lg:max-h-[900px]'>
          <Navbar />
          <Hero />
        </div>
        <PopUp />

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
