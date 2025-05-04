export const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-cream sm:flex sm:justify-between px-2 sm:px-24 pt-16 sm:h-72 pb-4"
    >
      <div className="flex flex-col h-full sm:pb-0 pb-8 sm:pl-0 pl-2">
        <div className="text-green text-xl sm:text-2xl font-bold mb-2">
          Tabaarah.com
        </div>
        <div className="text-gray-700 sm:text-lg font-light italic mb-3 pl-2">
          Where Gifting is a Bliss
        </div>
        <div className="text-gray-700 sm:text-lg mb-3 pl-2">
          Discover our curated collection of Islamic gifts, perfect for any
          occasion.
        </div>
      </div>
      <div className="sm:pr-14 sm:pl-0 pl-2">
        <div className="text-green text-lg sm:text-xl font-bold mb-2">
          Contact Us
        </div>
        <div className="text-gray-600 sm:text-lg mb-3 pl-2">
          Email: abc@gmail.com
        </div>
        <div className="text-gray-600 sm:text-lg mb-3 pl-2">
          Phone: 1234567890
        </div>
      </div>
    </div>
  );
};
