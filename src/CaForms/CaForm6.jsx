import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../images/Logo2.png";

const CaForm6 = () => {
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
    representativeName: '',
    territoryNumber: '',
    representativeAddress: '',
    representativeTel: '',
    service: '',
    term: '',
    monthlyCost: '',
    dateOfWithdrawals: '',
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
            <label className="font-medium mx-2">POS Code</label>
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
        
        {/* Representative Information */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">1) Representative Name:</label>
            <input
              type="text"
              name="representativeName"
              value={formData.representativeName}
              onChange={handleInputChange}
              className="border p-2 flex-grow mr-2"
            />
            <label className="font-medium mx-2">Terr. #</label>
            <input
              type="text"
              name="territoryNumber"
              value={formData.territoryNumber}
              onChange={handleInputChange}
              className="border p-2 w-28"
            />
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">2) Address:</label>
            <input
              type="text"
              name="representativeAddress"
              value={formData.representativeAddress}
              onChange={handleInputChange}
              className="border p-2 flex-grow mr-2"
            />
            <label className="font-medium mx-2">Tel #:</label>
            <input
              type="tel"
              name="representativeTel"
              value={formData.representativeTel}
              onChange={handleInputChange}
              className="border p-2 w-40"
            />
          </div>
        </div>
        
        {/* Service Section */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center">
            <label className="font-medium w-40">SERVICE:</label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center flex-wrap">
            <label className="font-medium w-40">Term:</label>
            <input
              type="text"
              name="term"
              value={formData.term}
              onChange={handleInputChange}
              className="border p-2 w-40 mr-4"
            />
            
            <label className="font-medium mx-2">Monthly Cost + Taxes:</label>
            <input
              type="text"
              name="monthlyCost"
              value={formData.monthlyCost}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">Date of monthly withdrawals:</label>
            <input
              type="text"
              name="dateOfWithdrawals"
              value={formData.dateOfWithdrawals}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <hr className="border-t border-gray-300" />
        </div>
        
        {/* General Provisions */}
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-4">General Provisions:</h2>
          
          <div className="space-y-4 text-sm">
            <p>1) Autowiz Assistance Corporation agrees to provide the client named above the access code to be able to download from www.autowizapp.com the automotive platform software.</p>
            
            <p>2) The client agrees to pay the sum above on a monthly basis via direct credit card debit for the term described above.</p>
            
            <p>3) There are no refunds on this service Contract.</p>
            
            <p>4) Client agrees to pay a service charge of twice the bank fee should the monthly debit be declined.</p>
            
            <p>5) Should the client wish to cancel this contract, a fee equivalent to two month's debits will be charged to the client's agreed form of payment, which the client agrees to pay.</p>
            
            <p>6) This contract renews automatically for an equivalent term unless notice is received from the client 60 days prior to the expiry of their intention not to proceed with a renewal.</p>
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
          <p>CANADA – UNITED STATES Tel: 613-282-5558, www.autowizapp.com</p>
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

export default CaForm6;