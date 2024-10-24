import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

// Simple custom alert component
const Alert = ({ type, message }) => {
  const bgColor = type === 'error' ? 'bg-red-50' : 'bg-green-50';
  const textColor = type === 'error' ? 'text-red-800' : 'text-green-800';
  
  return message ? (
    <div className={`p-4 rounded-lg mb-4 ${bgColor}`}>
      <p className={textColor}>{message}</p>
    </div>
  ) : null;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setLoading(false);
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For demonstration, we'll simulate an API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <h1 className="text-4xl md:text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600">
                For inquiries or support, feel free to contact us using the details below or fill out the contact form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="material-icons text-red-600"><PlaceIcon /></span>
                  <p className="ml-2 text-gray-800">88-T Phase 2 DHA Lahore Pakistan</p>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-red-600"><LocalPhoneIcon /></span>
                  <p className="ml-2 text-gray-800">0301-042926201</p>
                </div>
                <div className="flex items-center">
                  <span className="material-icons text-red-600"><EmailIcon /></span>
                  <p className="ml-2 text-gray-800">sales@grpengineers.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
              
              {/* Custom Alert Component */}
              <Alert type={status.type} message={status.message} />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-2 rounded-lg text-white transition-colors ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.795887024137!2d74.40051547397937!3d31.47480054939497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919060233ef5503%3A0xed5a2b0b049aff7d!2sGRP%20Engineers%20%26%20Consultants!5e0!3m2!1sen!2s!4v1728989636497!5m2!1sen!2s"
              width="100%" 
              height="450" 
              allowFullScreen="" 
              loading="lazy" 
              className="rounded-lg shadow-lg border-2 border-gray-300"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;