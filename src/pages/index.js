import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar/navbar"
import CalendarA from "../components/calendar/CalendarA"
import Header from "../components/header/header"
import Testimonios from "../components/testimonios/testimonios"
import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <h1> Academia Temple </h1> 
        <p> Mejorando la educación a nivel global </p> 
        <CalendarA></CalendarA>
        <Testimonios />
        <Link to = "/about" > Entérate más sobre nosotros </Link> 
        <Footer />
    </div>
  )
}
