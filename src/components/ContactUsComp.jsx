import axios from 'axios';
import { Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Modal } from './Modal';

export const ContactUsComp = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  useEffect(() => {
    if (showModal && modalSuccess) {
      // Reset form fields when success modal is shown
      setName('');
      setPhone('');
      setMessage('');
    }
  }, [showModal, modalSuccess]);

  const sendEmail = async () => {
    const apiUrl = 'https://send-email-smtp.vercel.app/sendmail'; 
  
    const emailData = {
      email: phone, 
      name: name,
      subject: 'New Contact Message from Tabaarah',
      message: message,
    };
  
    try {
      const response = await axios.post(apiUrl, emailData);
      console.log('Email sent successfully:', response.data.message);
      setModalTitle("Message Sent Successfully");
      setModalMessage("Thank you for contacting us. We'll get back to you shortly!");
      setModalSuccess(true);
      setShowModal(true);
      
      // Clear form
      setName('');
      setPhone('');
      setMessage('');
      setStatusMessage('');
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again later.');
      setStatusType('error');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !phone || !message){
      setStatusMessage('Please fill in all fields');
      setStatusType('error');
      return;
    }

    if(!phone.match(/^\d{10}$/)){
      setStatusMessage('Please enter a valid Phone Number');
      setStatusType('error');
      return;
    }

    sendEmail();
  }
  

  return (
    <div className="bg-cream py-5 px-6 md:px-16 lg:px-32 font-serif min-h-[100vh]">
      <h2 className="text-center text-4xl md:text-5xl font-medium mb-12 text-green">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>

            <div>
              <label className="block mb-1">Your Phone Number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>

            <div>
              <label className="block mb-1">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-36 max-h-96 border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-900"
              ></textarea>
            </div>

            {statusMessage.length > 0 ? (
              <div className={`p-3 rounded-md ${statusType === 'error' ? 'bg-red-100 text-red-900' : 'bg-green-100 text-green-900'}`}>
                {statusMessage}
              </div>
            ) : (<></>)}

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-green-900 text-white py-3 px-6 font-medium hover:bg-green-800 transition-all rounded-md"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-green-900 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>hello@tabaarah.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-900 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 1234567889</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        modalTitle={modalTitle} 
        modalMessage={modalMessage} 
        modalSuccess={modalSuccess}
        clearCart={null}
      />
    </div>
  );
};

