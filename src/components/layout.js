import React from "react"
import Navyy from "./nav"
import Footer from "./footer"
import { motion } from "framer-motion"
import ScrollButton from "./ScrollButton"

  
export default function Layout({ children }) {
  return (
    <div>
        <ScrollButton />
        <Navyy/>
        <div >
            <motion.div 
                layoutScroll
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
            >
                <main className="main-container">
                    {children}
                </main>
            </motion.div>
        </div>
        <Footer/>
    </div>
  )
}