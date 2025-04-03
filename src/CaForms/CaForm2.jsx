import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo2 from "../images/Logo2.png";

const CaForm2 = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    clientLegalName: "",
    doingBusinessAs: "",
    address: "",
    postalCode: "",
    owner: "",
    cellNumber: "",
    businessTel: "",
    email: "",
    inBusinessSince: "",
    service: "",
    term: "",
    discount: "",
    dateCity: "",
    contractDay: "",
    contractMonth: "",
    contractYear: "",
    representativeSignature: null,
    vendorSignature: null
  });

  const [showNotification, setShowNotification] = useState(false);
  const [previewRepSignature, setPreviewRepSignature] = useState(null);
  const [previewVendorSignature, setPreviewVendorSignature] = useState(null);
  const repSignatureRef = useRef(null);
  const vendorSignatureRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignatureUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'representative') {
          setFormData(prev => ({ ...prev, representativeSignature: file }));
          setPreviewRepSignature(reader.result);
        } else {
          setFormData(prev => ({ ...prev, vendorSignature: file }));
          setPreviewVendorSignature(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerSignatureUpload = (type) => {
    if (type === 'representative') {
      repSignatureRef.current.click();
    } else {
      vendorSignatureRef.current.click();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowNotification(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Contract submitted successfully!
        </div>
      )}

      {/* Hidden file inputs */}
      <input
        type="file"
        ref={repSignatureRef}
        onChange={(e) => handleSignatureUpload(e, 'representative')}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={vendorSignatureRef}
        onChange={(e) => handleSignatureUpload(e, 'vendor')}
        accept="image/*"
        className="hidden"
      />

      {/* Header with Logo */}
      <div className="flex justify-between items-start mb-8">
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <img src={Logo2} alt="Company Logo" className="h-16" />
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold">AUTO PARTS VENDOR CONTRACT</h1>
        </div>
      </div>

      {/* Account Number */}
      <div className="mb-6">
        <label className="block mb-1">Account Number:</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="w-40 border-b-2 border-gray-300 focus:border-green-500 outline-none"
        />
      </div>

      {/* Client Information */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block mb-1">1) Client Legal Name:</label>
          <input
            type="text"
            name="clientLegalName"
            value={formData.clientLegalName}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
        <div>
          <label className="block mb-1">2) Doing Business As:</label>
          <input
            type="text"
            name="doingBusinessAs"
            value={formData.doingBusinessAs}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1">3) Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
          <div className="w-24">
            <label className="block mb-1">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1">4) Owner:</label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Cell Number:</label>
            <input
              type="text"
              name="cellNumber"
              value={formData.cellNumber}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1">5) Business Tel #:</label>
            <input
              type="text"
              name="businessTel"
              value={formData.businessTel}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">6) In business since:</label>
          <input
            type="text"
            name="inBusinessSince"
            value={formData.inBusinessSince}
            onChange={handleChange}
            className="w-40 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">1) SERVICE</label>
        <textarea
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full h-20 border-2 border-gray-300 rounded p-2 focus:border-green-500 outline-none"
        />
      </div>

      {/* Term and Discount */}
      <div className="flex gap-8 mb-8">
        <div className="flex-1">
          <label className="block font-semibold mb-2">2) Term</label>
          <input
            type="text"
            name="term"
            value={formData.term}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-2">3) Discount</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* General Provisions (readonly) */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">General Provisions:</h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li>Autowiz Corporation agrees to provide the vendor named above the access code to be able to access from www.autowizapp.com the automotive platform software.</li>
          <li>The vendor agrees to provide the discount stated above to all the garages and clients of Autowiz during the term of this contract.</li>
          <li>The Auto Parts Vendor shall provide refunds to all Autowiz garages and clients as per the standard policies of the Vendor.</li>
          <li>Auto Parts Vendor and Autowiz agree that all client lists, garages, individuals, businesses or entities introduced by one to the other shall remain the property of the introducing party.</li>
          <li>All transactions between the parties must be done via the platform except for payments which shall be according to Vendor procedures.</li>
          <li>This contract renews automatically for an equivalent term unless notice is received from the client 60 days prior to the expiry of their intention not to proceed with a renewal.</li>
        </ol>
      </div>

      {/* Contract Date */}
      <div className="mb-8">
        <p className="mb-4">Dated in 
          <input
            type="text"
            name="dateCity"
            value={formData.dateCity}
            onChange={handleChange}
            className="w-40 mx-2 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
          this 
          <input
            type="text"
            name="contractDay"
            value={formData.contractDay}
            onChange={handleChange}
            className="w-10 mx-2 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
          day of 
          <input
            type="text"
            name="contractMonth"
            value={formData.contractMonth}
            onChange={handleChange}
            className="w-40 mx-2 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
          , 20
          <input
            type="text"
            name="contractYear"
            value={formData.contractYear}
            onChange={handleChange}
            className="w-10 ml-2 border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </p>
      </div>

      {/* Signatures */}
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <div className="border-t-2 border-gray-400 pt-2 mb-2 h-40">
            {previewRepSignature ? (
              <img 
                src={previewRepSignature} 
                alt="Representative Signature" 
                className="h-full max-w-full object-contain"
              />
            ) : (
              <p className="text-gray-500 italic">Representative signature will appear here</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => triggerSignatureUpload('representative')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded text-sm"
          >
            Upload Representative Signature
          </button>
          <p className="mt-2">Signature of Representative</p>
        </div>
        <div className="w-1/2 pl-4">
          <div className="border-t-2 border-gray-400 pt-2 mb-2 h-40">
            {previewVendorSignature ? (
              <img 
                src={previewVendorSignature} 
                alt="Vendor Signature" 
                className="h-full max-w-full object-contain"
              />
            ) : (
              <p className="text-gray-500 italic">Vendor signature will appear here</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => triggerSignatureUpload('vendor')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded text-sm"
          >
            Upload Vendor Signature
          </button>
          <p className="mt-2">Signature of vendor</p>
          <p className="text-sm mt-2">I am authorized to sign for the Corporation</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        <p>CANADA – United States Tel: 613-282-5558, Email: sales@autowizapp.com</p>
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
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CaForm2;