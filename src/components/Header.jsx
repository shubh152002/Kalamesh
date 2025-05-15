
const Header = () => {
  return (
    <>
     <header className="flex  flex-col md:flex-row justify-between items-center  ">
      <div className="text-[#F01E28] uppercase text-2xl drop-shadow-[0_0_10px_#FF0000] ">Kalamesh</div>
      <nav>
        <ul className='flex justify-center items-center gap-5 font-semibold  text-white-10 capitalize text-xl '>
          <li className="hover:text-red-40 transition duration-300 ease-in-out "><a href="home">home</a></li>
          <li className="hover:text-red-40 transition duration-300 ease-in-out "><a href="about">Features</a></li>
          <li className="hover:text-red-40 transition duration-300 ease-in-out "><a href="explore">Portfolio</a></li>
          <li className="hover:text-red-40 transition duration-300 ease-in-out "><a href="contact">Community</a></li>
          <li className="hover:text-red-40 transition duration-300 ease-in-out "><a href="contact">Contact</a></li>
        </ul>

      </nav>
    </header>
    </>
  )
}

export default Header
