import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo2.png";

const USForm2 = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    clientLegalName: "",
    doingBusinessAs: "",
    address: "",
    zipCode: "",
    owner: "",
    celNumber: "",
    businessTel: "",
    email: "",
    inBusinessSince: "",
    service: "",
    term: "",
    discount: "",
    dateSigned: "",
    location: "",
    day: "",
    month: "",
    year: ""
  });

  const [showNotification, setShowNotification] = useState(false);
  const [representativeSignature, setRepresentativeSignature] = useState(null);
  const [vendorSignature, setVendorSignature] = useState(null);
  const repSignatureInputRef = useRef(null);
  const vendorSignatureInputRef = useRef(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignatureUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === 'representative') {
          setRepresentativeSignature(event.target.result);
        } else {
          setVendorSignature(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearSignature = (type) => {
    if (type === 'representative') {
      setRepresentativeSignature(null);
      if (repSignatureInputRef.current) {
        repSignatureInputRef.current.value = "";
      }
    } else {
      setVendorSignature(null);
      if (vendorSignatureInputRef.current) {
        vendorSignatureInputRef.current.value = "";
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to your backend here
    console.log("Contract submitted:", formData);
    console.log("Representative Signature:", representativeSignature);
    console.log("Vendor Signature:", vendorSignature);
    
    // Show success notification
    setShowNotification(true);
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  // Get current date for default values
  const today = new Date();
  const defaultDay = today.getDate();
  const defaultMonth = today.toLocaleString('default', { month: 'long' });
  const defaultYear = today.getFullYear();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Contract submitted successfully!
        </div>
      )}

      {/* Header with Logo */}
      <div className="flex justify-between items-start mb-8">
        <img src={Logo} alt="Company Logo" className="h-16" />
        <div className="text-right">
          <div className="mb-4">
            <label className="block mb-1">Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
          <h1 className="text-2xl font-bold">AUTO PARTS VENDOR CONTRACT</h1>
        </div>
      </div>

      {/* Client Information */}
      <div className="space-y-4 mb-8">
        <div className="flex">
          <label className="w-8">1)</label>
          <div className="flex-1">
            <label className="mr-2">Client Legal Name:</label>
            <input
              type="text"
              name="clientLegalName"
              value={formData.clientLegalName}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>

        <div className="flex">
          <label className="w-8">2)</label>
          <div className="flex-1">
            <label className="mr-2">Doing Business As:</label>
            <input
              type="text"
              name="doingBusinessAs"
              value={formData.doingBusinessAs}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>

        <div className="flex">
          <label className="w-8">3)</label>
          <div className="flex-1 flex">
            <div className="flex-grow">
              <label className="mr-2">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
            <div className="ml-4 w-40">
              <label className="mr-2">ZIP Code:</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <label className="w-8">4)</label>
          <div className="flex-1 flex">
            <div className="flex-grow">
              <label className="mr-2">Owner:</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
            <div className="ml-4 w-60">
              <label className="mr-2">Cel Number:</label>
              <input
                type="text"
                name="celNumber"
                value={formData.celNumber}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <label className="w-8">5)</label>
          <div className="flex-1 flex">
            <div className="w-60">
              <label className="mr-2">Business Tel #:</label>
              <input
                type="text"
                name="businessTel"
                value={formData.businessTel}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
            <div className="ml-4 flex-grow">
              <label className="mr-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <label className="w-8">6)</label>
          <div className="flex-1">
            <label className="mr-2">In business since:</label>
            <input
              type="text"
              name="inBusinessSince"
              value={formData.inBusinessSince}
              onChange={handleChange}
              className="w-40 border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Service Information */}
      <div className="mb-8">
        <div className="flex">
          <label className="w-8 font-semibold">1)</label>
          <div className="flex-1">
            <label className="mr-2 font-semibold">SERVICE</label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
            <input
              type="text"
              name="serviceDetails"
              value={formData.serviceDetails}
              onChange={handleChange}
              className="w-full mt-4 border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>

        <div className="flex mt-6">
          <div className="w-1/3 flex">
            <label className="w-8 font-semibold">2)</label>
            <div className="flex-1">
              <label className="mr-2 font-semibold">Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
          <div className="w-2/3 flex ml-6">
            <label className="w-8 font-semibold">3)</label>
            <div className="flex-1">
              <label className="mr-2 font-semibold">Discount</label>
              <input
                type="text"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* General Provisions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">General Provisions:</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Autowiz Corporation agrees to provide the vendor named above the access code to be able to access from www.autowizapp.com the automotive platform software.</li>
          <li>The vendor agrees to provide the discount stated above to all the members of Autowiz during the term of this contract.</li>
          <li>The Auto Parts Vendor shall provide refunds to all Autowiz members as per the standard policies of the Vendor.</li>
          <li>Auto Parts Vendor and Autowiz agree that all client lists, garages, members, individuals, businesses or entities introduced by one to the other shall remain the property of the introducing party.</li>
          <li>All transactions between the parties may be done via the platform except for payments which shall be according to Vendor procedures.</li>
        </ol>
      </div>

      {/* Signatures */}
      <div className="mb-8">
        <div className="mb-4 flex">
          <span className="mr-2">Dated in</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-40 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
          <span className="mx-2">this</span>
          <input
            type="text"
            name="day"
            value={formData.day || defaultDay}
            onChange={handleChange}
            className="w-12 border-b-2 border-gray-300 focus:border-green-500 outline-none text-center"
          />
          <span className="mx-2">day of</span>
          <input
            type="text"
            name="month"
            value={formData.month || defaultMonth}
            onChange={handleChange}
            className="w-32 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
          <span className="mx-2">,</span>
          <input
            type="text"
            name="year"
            value={formData.year || defaultYear}
            onChange={handleChange}
            className="w-20 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>

        <div className="flex justify-between mt-8">
          <div className="w-1/2 pr-8">
            {/* Representative Signature */}
            <div className="mb-2">
              {representativeSignature ? (
                <div className="mb-2">
                  <img 
                    src={representativeSignature} 
                    alt="Representative Signature" 
                    className="max-h-24 max-w-full"
                  />
                  <button 
                    onClick={() => handleClearSignature('representative')}
                    className="text-red-500 text-sm mt-1 print:hidden"
                  >
                    Clear Signature
                  </button>
                </div>
              ) : (
                <div className="flex flex-col print:hidden">
                  <label className="text-sm text-gray-600 mb-1">Upload Representative Signature:</label>
                  <input 
                    type="file" 
                    ref={repSignatureInputRef}
                    accept="image/*"
                    onChange={(e) => handleSignatureUpload(e, 'representative')}
                    className="border border-gray-300 p-1 text-sm"
                  />
                </div>
              )}
            </div>
            <div className="border-t-2 border-black pt-2">
              <p>Signature of Representative</p>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            {/* Vendor Signature */}
            <div className="mb-2">
              {vendorSignature ? (
                <div className="mb-2">
                  <img 
                    src={vendorSignature} 
                    alt="Vendor Signature" 
                    className="max-h-24 max-w-full"
                  />
                  <button 
                    onClick={() => handleClearSignature('vendor')}
                    className="text-red-500 text-sm mt-1 print:hidden"
                  >
                    Clear Signature
                  </button>
                </div>
              ) : (
                <div className="flex flex-col print:hidden">
                  <label className="text-sm text-gray-600 mb-1">Upload Vendor Signature:</label>
                  <input 
                    type="file" 
                    ref={vendorSignatureInputRef}
                    accept="image/*"
                    onChange={(e) => handleSignatureUpload(e, 'vendor')}
                    className="border border-gray-300 p-1 text-sm"
                  />
                </div>
              )}
            </div>
            <div className="border-t-2 border-black pt-2">
              <p>Signature of vendor</p>
              <p>I am authorized to sign for the Corporation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-12 mb-4">
        <p>UNITED STATES - CANADA Tel: 754-205-9581, Email: sales@autowizapp.com</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded"
        >
          Print Contract
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-6 rounded"
        >
          Submit Contract
        </button>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          .print-hidden {
            display: none;
          }
          body {
            padding: 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default USForm2;