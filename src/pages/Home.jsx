import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Products } from "../components/Products"
import { TopBar } from "../components/TopBar"

export const Home = () => {

  return (
    <div id="home">
      <TopBar />
      <Header />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}