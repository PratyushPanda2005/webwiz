import { motion } from "motion/react"
export default function Navbar() {
  return (
    <div className='flex justify-center '>
      <motion.nav whileHover={{scale:1.1}} className='flex z-10 fixed justify-center text-white bg-black  border-2 p-8 rounded-full border-neutral-500  mt-4 gap-8 md:gap-0'>
        <div >
          <h1 className='font-poppins font-bold  md:text-2xl'>Movie Mania</h1>
        </div>
        <div className='flex lg:ml-28 gap-4 items-center'>
          <ul className='md:flex gap-4 hidden'>
            <li className='text-neutral-400'><a href="">Free Movies & TV</a></li>
            <li className='text-neutral-400'><a href="">Live TV</a></li>
            <li className='text-neutral-400'><a href="">Serials</a></li>
            <li className='text-neutral-400'><a href="">Download</a></li>
          </ul>
          <div>
          <button className='bg-green-500 text-black w-20 font-semibold rounded-full'>Login</button>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
