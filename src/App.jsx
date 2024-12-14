import LatestWorks from "./components/LatestWorks"
import Home from "./components/Home"
import Contact from "./components/Contact"
import { socialMediaIcons } from "./api"
import Footer from "./components/Footer"
import Experience from "./components/Experience"

function App() {

  return (
    <main id="top" className="bg-background text-text font-cursive">
      <ul className='flex items-center justify-center gap-7 flex-col fixed top-0 right-0 h-full p-3 z-30'>
        {socialMediaIcons.map(ele => (<li key={ele.name} className='hover:bg-secondary rounded-full cursor-pointer p-0 hover:p-3 ease-in-out duration-300' title={ele.name}>
          <a href={ele.url} target="_blank">
            <img src={`./public/icons/${ele.name}.svg`} alt={ele.name} className='w-[25px]' />
          </a>
        </li>))}
      </ul>
      <Home />
      <LatestWorks />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      {/* <button type="button" className="w-8 h-8 bg-secondary text-text rounded fixed bottom-3 right-3 p-2 cursor-pointer z-50">
        <img src="./public/icons/up-arrow.svg" alt="up-arrow" className="w-full" />
      </button> */}
    </main>
  )
}

export default App
