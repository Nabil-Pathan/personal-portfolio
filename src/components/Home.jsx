import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import TypeWriter from "typewriter-effect"
import { BsArrowUpRight , BsChevronDown} from "react-icons/bs"
import me from "../assets/logo1.png"
const Home = () => {

  const clientCount = useRef(null)

  const projectCount = useRef(null)

  const animationClientsCount = () =>{
    animate(0,100, {
      duration: 1,
      onUpdate: (v)=>( clientCount.current.textContent = v.toFixed())
    })
  }

  const animationProjectsCount = () =>{
    animate(0,500, {
      duration: 1,
      onUpdate: (v)=>( projectCount.current.textContent = v.toFixed())
    })
  }

  

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0, opacity: 1
      }

    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: 0, opacity: 1
      }

    }
  }
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi , I am <br /> Nabil Khan
          </motion.h1>

          <TypeWriter options={{
            strings: ["A Developer", "A Devops Engineer", "An Educator"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterpara",
            cursor: ""
          }} />

          <div>
            <a href="mailto:nabilkhan9624@gmail.com">
              Hire Me
            </a>
            <a href="#work">
              Projects <BsArrowUpRight/>
            </a>
          </div>


         

          <article>
            <p> +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span></p>
            <span>Clients World wide</span>
          </article>

          <aside>
            <article>
            <p> +<motion.span whileInView={animationProjectsCount} ref={projectCount}>500</motion.span></p>
            <span>Projects</span>
            </article>

          <article data-special>
            <p> Contact</p>
            <span>nabilkhan9624@gmail.com</span>
          </article>
          </aside>

        </div>

      </section>

      <section>
        <img src={me} alt="nabil" />
      </section>
        <BsChevronDown/>

    </div>
  )
}

export default Home
