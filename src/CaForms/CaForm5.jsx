import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../images/Logo2.png";

const CaForm5 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: '',
    clientLegalName: '',
    doingBusinessAs: '',
    address: '',
    postalCode: '',
    owner: '',
    celNumber: '',
    businessTel: '',
    email: '',
    inBusinessSince: '',
    service: '',
    term: '',
    discount: '',
    location: '',
    day: '',
    month: '',
    year: '',
    representativeSignature: null,
    dealershipSignature: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignatureUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          [field]: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert("Dealer Service Contract submitted successfully!");
    navigate('/'); // Redirect to home page
  };

  const handlePrint = () => {
    window.print();
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">DEALER SERVICE CONTRACT</h1>
        <img src={Logo2} alt="Autowiz Logo" className="h-16" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Account Number */}
        <div className="flex items-center justify-end mb-4">
          <label className="font-medium mr-2">Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="border p-2 w-40"
          />
        </div>
        
        {/* Client Information */}
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="font-medium w-40">1) Client Legal Name:</label>
            <input
              type="text"
              name="clientLegalName"
              value={formData.clientLegalName}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">2) Doing Business As:</label>
            <input
              type="text"
              name="doingBusinessAs"
              value={formData.doingBusinessAs}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">3) Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border p-2 flex-grow mr-2"
            />
            <label className="font-medium mx-2">Pos Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="border p-2 w-28"
            />
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">4) Owner:</label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleInputChange}
              className="border p-2 flex-grow mr-2"
            />
            <label className="font-medium mx-2">Cel Number:</label>
            <input
              type="tel"
              name="celNumber"
              value={formData.celNumber}
              onChange={handleInputChange}
              className="border p-2 w-40"
            />
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">5) Business Tel #:</label>
            <input
              type="tel"
              name="businessTel"
              value={formData.businessTel}
              onChange={handleInputChange}
              className="border p-2 w-40 mr-2"
            />
            <label className="font-medium mx-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">6) In business since:</label>
            <input
              type="text"
              name="inBusinessSince"
              value={formData.inBusinessSince}
              onChange={handleInputChange}
              className="border p-2 w-40"
            />
          </div>
        </div>
        
        {/* Service Section */}
        <div className="space-y-4 pt-4">
          <div className="flex items-start">
            <label className="font-medium w-40">1) SERVICE</label>
            <textarea
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="border p-2 flex-grow h-20"
            ></textarea>
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">2) Term</label>
            <input
              type="text"
              name="term"
              value={formData.term}
              onChange={handleInputChange}
              className="border p-2 w-40 mr-4"
            />
            
            <label className="font-medium w-40">3) Discount</label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
        </div>
        
        {/* General Provisions */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-4">General Provisions:</h2>
          
          <div className="space-y-4 text-sm">
            <p>1) Autowiz Corporation agrees to provide the vendor named above the access code to be able to access from www.autowizapp.com the automotive platform software.</p>
            
            <p>2) The dealer agrees to provide the discount stated above to all the members of Autowiz during the term of this contract.</p>
            
            <p>3) The dealer shall provide refunds and guarantees to all Autowiz members as per the standard policies of the dealership.</p>
            
            <p>4) The dealer and Autowiz agree that all client lists, garages, members, individuals, businesses or entities introduced by one to the other shall remain the property of the introducing party.</p>
            
            <p>5) All transactions between the parties may be done via the platform except for payments which shall be according to dealer procedures.</p>
          </div>
        </div>
        
        {/* Date and Signatures */}
        <div className="pt-4">
          <div className="flex items-center flex-wrap mb-6">
            <span className="mr-2">Dated in</span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="border-b border-black mx-2 w-40 text-center"
            />
            <span className="mx-2">this</span>
            <input
              type="text"
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              className="border-b border-black w-10 text-center mx-1"
            />
            <span className="mx-1">day of</span>
            <input
              type="text"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="border-b border-black w-32 text-center mx-1"
            />
            <span className="mx-1">, 20</span>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="border-b border-black w-10 text-center"
              placeholder={currentYear.toString().substr(-2)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium block mb-2">Signature of Representative:</label>
              {formData.representativeSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.representativeSignature} 
                    alt="Representative Signature" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, representativeSignature: null})}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="border p-4 text-center mb-2">
                  <p className="text-gray-500">No signature uploaded</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSignatureUpload(e, 'representativeSignature')}
                className="block w-full text-sm"
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">Signature for the dealership:</label>
              {formData.dealershipSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.dealershipSignature} 
                    alt="Dealership Signature" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, dealershipSignature: null})}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="border p-4 text-center mb-2">
                  <p className="text-gray-500">No signature uploaded</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSignatureUpload(e, 'dealershipSignature')}
                className="block w-full text-sm"
              />
              <p className="text-sm text-gray-600 mt-2">I am authorized to sign for the Corporation</p>
            </div>
          </div>
        </div>
        
        {/* Footer Information */}
        <div className="text-center text-sm text-gray-600 pt-4 border-t">
          <p>CANADA – United States Tel: 613-282-5558, Email: sales@autowizapp.com</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600"
          >
            Print Contract
          </button>
          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Submit Contract
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaForm5;