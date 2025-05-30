import React from 'react';
import "../style.css"
import Navbar from './Navbar';
import Footer from './Footer';
import "../index.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar/>
      <div className="main-content">
        <section className="hero-section no-top-padding">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to the Internet's Funniest Corner!</h1>
            <p className="hero-subtitle">Where memes are born, chaos is celebrated, and laughter is mandatory.</p>
          </div>
        </section>
        
        <section className="features-section">
          {/* ... existing features content ... */}
        </section>

        <section className="how-it-works-section">
          {/* ... existing how it works content ... */}
        </section>

        <section className="mission-section">
          {/* ... existing mission content ... */}
        </section>

        <div className="about-us w-full my-16 flex justify-center items-center p-6 h-screen bg-black text-white gap-10">
          <div className='right w-1/2'>
            <p className='text-xl leading-1.5 mb-8'>
              We're not just a website — we're a meme-making machine, powered by caffeine, bad puns, and the occasional existential crisis. Whether you're a seasoned meme lord or just here to laugh at pictures with captions, you've entered a sacred land of dankness.
            </p>
            
            <div className='mission-block mb-8'>
              <h3 className='text-2xl font-bold mb-4'>Our mission? Simple:</h3>
              <p className='text-xl font-semibold text-blue-400'>Create. Share. LOL. Repeat.</p>
              <p className='text-xl mt-2'>We believe in the ancient power of memes to unite humanity through pure, unfiltered humor.</p>
            </div>

            <p className='text-xl leading-1.5 mb-8'>
              We're always leveling up our meme game, so if you've got ideas, feedback, or just want to send us a cursed image — slide into our DMs. We're here for it.
            </p>

            <div className='closing-note text-xl font-semibold'>
              <p>So go ahead. Make memes. Break the internet.</p>
              <p className='text-blue-400 mt-2'>And remember: with great memes comes great responsibility.</p>
            </div>
          </div>
          <div className='left w-1/2'>
            <img className="w-80" src='https://imgs.search.brave.com/nPN8L2uSoOYMROzi5KKfKHm-r3b64jY5QBGPGXqFXDE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZW1l/LWdlbmVyYXRvci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDkvVHJpZ2dl/cmVkLVJlZC1FeWVz/LU1lbWUtR2VuZXJh/dG9yLTE1MHgxNTAu/anBn'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
