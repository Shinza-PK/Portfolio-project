import React from 'react';
import'./App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import CardForm from './components/CardForm/CardForm';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
  <>
      <Navbar />
      <div className='container'>
        <Hero/>
        <Skills/>
        <WorkExperience />
        <ContactMe />
        <CardForm />
      </div>
        <Footer/>
   </>
  );
};

 
export default App;
