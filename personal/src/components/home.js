import { motion } from 'framer-motion'

const Home = () => {

  return (
    <div className="flex flex-col items-center pt-40 md:md:pt-64 lg:pt-52">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{duration: 0.5}}  
      >
        <p><br></br></p>
        <h1 className='justify-center items-center flex' id="intro">Hi, I am</h1>
        <h1 id="intro" className="md:md:justify-center flex">Zhiyao Yu</h1>
        <p className="text-[#ced4d8] flex justify-center md:md:text-2xl lg:text-xl">
          Welcome to my website!
        </p>
      </motion.div>
    </div>
  )
}

export default Home