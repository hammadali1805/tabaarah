import { Package, ShoppingBag, Gift } from "lucide-react"
import { Button } from "./Button"


export const Header = () => {

  return (
    <div className="mb-16">
      <div className="bg-cream w-full sm:h-[85vh] sm:px-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-between items-center h-full sm:px-16">
          <div className="order-1 sm:order-2 flex justify-center sm:py-0 py-10 sm:px-0 px-16">
            <img src="/Main.png" alt="Logo" />
          </div>
          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left order-2 sm:order-1">
            <div>
              <div className="text-green text-4xl sm:text-5xl font-bold tracking-tighter mb-5 sm:px-0 px-8">Where Gifting is a Bliss</div>
              <div className="text-gray-600 sm:text-xl sm:px-0 px-8 ">Create personalized Islamic gift boxes filled with dates, prayer mats, caps, and more. Perfect for Eid, Ramadan, or any special occasion.</div>
              <div className="flex sm:justify-start justify-center mt-5 gap-5 sm:pb-0 pb-16 ">
                <Button content={"Create Your Gift Box"} background={"bg-green"} textColor={"text-white"} hoverColor={"hover:text-cream"}/>
                {/* <Button id={"products"} content={"Browse Products"} background={"bg-white"} textColor={"text-green"} hoverColor={"hover:text-black"}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10">
        <div className="flex justify-center w-full text-3xl sm:text-4xl text-green font-bold mb-3">How It Works</div>
        <div className="flex justify-center w-full sm:text-xl text-gray-600 mb-10 font-medium sm:px-0 px-6 text-center">Create your perfect Islamic gift box in three simple steps</div>
        <div className="flex justify-center w-full">
          <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-20 gap-16">
            {/*Card 1 */}
            <div className="flex justify-center">
              <div className="bg-[#FAF9F1] border border-green rounded-md w-9/12 sm:w-[400px] p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full mb-2">
                    <ShoppingBag className="text-green" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Choose Products</h3>
                <p className="text-gray-600 text-lg">Browse our selection of premium Islamic products and select your favorites.</p>
              </div>
            </div>
            {/*Card 2 */}
            <div className="flex justify-center">
              <div className="bg-[#FAF9F1] border border-green rounded-md w-9/12 sm:w-[400px] p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full mb-2">
                    <Gift className="text-green" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Customize Box</h3>
                <p className="text-gray-600 text-lg">Select your box style and arrange your items for the perfect presentation.</p>
              </div>
            </div>
            {/*Card 3 */}
            <div className="flex justify-center">
              <div className="bg-[#FAF9F1] border border-green rounded-md w-9/12 sm:w-[400px] p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full mb-2">
                    <Package className="text-green" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Place Order</h3>
                <p className="text-gray-600 text-lg">Submit your order and we'll contact you to finalize the details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}