import { useNavigate } from 'react-router-dom';

export const Modal = ({ 
  showModal, 
  setShowModal, 
  modalTitle, 
  modalMessage, 
  modalSuccess,
  clearCart
}) => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
    if (modalSuccess) {
      if(clearCart) clearCart();
      navigate('/');
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-cream rounded-lg shadow-xl p-6 w-full max-w-md">
          <div className="text-center">
            {modalSuccess ? (
              <svg 
                className="mx-auto h-16 w-16 text-green mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            ) : (
              <svg 
                className="mx-auto h-16 w-16 text-red-500 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            )}
            <h3 className="text-xl font-bold mb-2">{modalTitle}</h3>
            <p className="text-gray-600 mb-6">{modalMessage}</p>
            <button
              onClick={handleModalClose}
              className={`px-6 py-2 rounded-md text-white font-medium ${
                modalSuccess ? "bg-green hover:bg-green-700" : "bg-red-500 hover:bg-red-600"
              } transition`}
            >
              {modalSuccess ? "Okay, Thanks!" : "Close"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};