// src/pages/Cart.jsx
import { useState } from "react";
import { useCart } from "../components/CartContext";
import { TopBar } from "../components/TopBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "../components/Modal";

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [giftBoxCount, setGiftBoxCount] = useState(25);
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const price =
      typeof item.price === "object"
        ? item.price.filled // Default to filled price if it's an object
        : item.price;
    return total + price * item.quantity;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber || !name) {
      setModalTitle("Incomplete Information");
      setModalMessage(
        "Please fill in all required fields to place your order."
      );
      setModalSuccess(false);
      setShowModal(true);
      return;
    }
    if (!phoneNumber.match(/^\d{10}$/)) {
      setModalTitle("Invalid Phone Number");
      setModalMessage("Please enter a valid 10-digit phone number.");
      setModalSuccess(false);
      setShowModal(true);
      return;
    }
    setIsSubmitting(true);
    handleSendEmail();
  };

  // Increment gift box count
  const incrementGiftBoxes = () => {
    setGiftBoxCount((prev) => prev + 1);
  };

  // Decrement gift box count
  const decrementGiftBoxes = () => {
    setGiftBoxCount((prev) => Math.max(1, prev - 1));
  };

  const handleSendEmail = async () => {
    const apiUrl = "https://send-email-smtp.vercel.app/sendmail";

    // Pre-compute cart items string with better formatting for SMTP
    const cartItemsText = cart
      .map((item) => {
        const price =
          typeof item.price === "object" ? item.price.filled : item.price;
        return `  - ${item.name} (x${item.quantity}) - Rs.${(
          price * item.quantity
        ).toFixed(2)}`;
      })
      .join("\n");

    const messageText = `Order Details
        Name - ${name} 
        Phone - ${phoneNumber} 
        Gift Box Count - ${giftBoxCount} 
        Items - 
        ${cartItemsText} 
        Total Price - Rs.${(totalPrice * giftBoxCount).toFixed(2)}
        `;

    const emailData = {
      email: phoneNumber,
      name: name,
      subject: "New Order from Tabaarah",
      message: messageText,
    };

    try {
      console.log("Sending order request...", emailData);
      const response = await axios.post(apiUrl, emailData);
      console.log("Response received:", response);

      setStatusMessage("Order placed successfully!");
      setStatusType("success");
      setModalTitle("Thank You For Your Order!");
      setModalMessage(
        "Your order has been placed successfully. We'll contact you shortly."
      );
      setModalSuccess(true);
      setShowModal(true);
      // alert("Order placed successfully!");
      // clearCart(); // Clear the cart after successful order
      setIsSubmitting(false);
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      // alert("Failed to place order. Please try again later.");
      setStatusMessage("Failed to place order");
      setStatusType("error");
      setModalTitle("Order Failed");
      setModalMessage(
        "We couldn't process your order. Please try again later."
      );
      setModalSuccess(false);
      setShowModal(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <TopBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-8">
            <h2 className="text-xl mb-4">No Gift Box Created</h2>
            <p className="text-gray-600 mb-6">
              Add some items to your gift box to get started.
            </p>
            <Link
              to="/#products"
              className="bg-green text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Gift Box Items</h2>
                <div className="divide-y">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.type}</p>
                          <p className="text-green-700">
                            {typeof item.price === "object" ? (
                              <>₹{item.price.filled}</>
                            ) : (
                              <>₹{item.price}</>
                            )}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm mt-2 block ml-auto"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream rounded-lg shadow p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Gift Boxes
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button
                      onClick={decrementGiftBoxes}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center py-2">
                      {giftBoxCount}
                    </span>
                    <button
                      onClick={incrementGiftBoxes}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your Phone Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total ({giftBoxCount} boxes)</span>
                    <span>₹{(totalPrice * giftBoxCount).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!phoneNumber || isSubmitting}
                  className={`w-full mt-6 py-3 px-4 rounded-md text-white font-medium 
                    ${
                      !phoneNumber || isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green hover:bg-green-700"
                    } transition`}
                >
                  {isSubmitting ? "Processing..." : "Schedule a Call"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="mt-16">
        <Footer />
      </div> */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={modalTitle}
        modalMessage={modalMessage}
        modalSuccess={modalSuccess}
        clearCart={clearCart}
      />
    </div>
  );
};
