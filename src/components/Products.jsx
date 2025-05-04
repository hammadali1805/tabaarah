import { PRODUCTS } from "../PRODUCTS"
import { ProductType } from "./ProductType"


export const Products = () => {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <div>
      <div id="products" className="bg-cream px-4 pb-14 pt-14">
        <div className="flex justify-center w-full text-3xl sm:text-4xl text-green font-bold mb-3">Our Products</div>
        <div className="flex justify-center items-center text-center w-full sm:text-xl text-gray-600 mb-4 font-medium sm:px-0 px-6">Crafted with care, chosen with love — gifts that speak from the heart</div>
        <ProductType type={"Dates"} category={PRODUCTS.Dates} /> 
        <ProductType type={"Tasbih"} category={PRODUCTS.Tasbih} /> 
        <ProductType type={"Zam Zam"} category={PRODUCTS.ZamZam} /> 
        <ProductType type={"Prayer Caps"} category={PRODUCTS.PrayerCaps} /> 
        <ProductType type={"Miswaq"} category={PRODUCTS.Miswaq} /> 
        <ProductType type={"Attar"} category={PRODUCTS.Attar} /> 
      </div>
      <div id="create-gift-box" className="bg-green-700 py-14 px-6 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Ready to Create Your Perfect Gift?
        </h2>
        <p className="text-md md:text-lg mb-6">
          Start building your custom Islamic gift box today and spread joy to your loved ones.
        </p>
        <button onClick={() => scrollToSection("products")} className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-cream transition ease-in-out duration-300 hover:cursor-pointer"> 
          Create Your Gift Box
        </button>
      </div>
    </div>
  )
}