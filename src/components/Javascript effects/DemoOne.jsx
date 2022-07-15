import React from 'react'
import './Demo.css'
import {motion} from 'framer-motion'

const DemoOne = () => {
  return (
   <motion.div className="demoOne">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2,duration:2}} className="left">

      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3,duration:2 }}  className="center">
          </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4 ,duration:2 }}  className="right">
         
      </motion.div>
   </motion.div>
  )
}

export default DemoOne