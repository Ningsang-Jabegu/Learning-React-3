import React from "react";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./Components/data"

export default function App() {  
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
  });    
  return (
    <>
    <p className="react-badge">Learning-React-3 </p>
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
      </div>
    </>
  )
}