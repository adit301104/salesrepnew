import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../images/Logo2.png";

const CaForm4 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    territory: '',
    businessName: '',
    contact: '',
    address: '',
    businessPhone: '',
    cellPhone: '',
    emailAddress: '',
    callResults: {
      appointment: false,
      appointmentDate: '',
      appointmentTime: '',
      callBackDate: '',
      videoRequest: '',
      moreInfoRequest: ''
    },
    callResultsNotes: '',
    fieldVisit: {
      sale: false,
      contractAttached: '',
      callBackRequired: false,
      callBackDate: '',
      moreInfoRequired: '',
      notInterested: false,
      notInterestedReason: ''
    },
    fieldVisitNotes: '',
    salesAgentSignature: null,
    salesManagerSignature: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: type === 'checkbox' ? checked : value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
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
    alert("Form successfully submitted!");
    navigate('/'); // Redirect to home page
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AUTOWIZ CLIENT CONTACT SHEET</h1>
        <img src={Logo2} alt="Autowiz Logo" className="h-16" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <label className="font-medium w-24">DATE:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          <div className="flex items-center">
            <label className="font-medium w-24">TERRITORY:</label>
            <input
              type="text"
              name="territory"
              value={formData.territory}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
        </div>
        
        {/* Business Information */}
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="font-medium w-40">BUSINESS NAME:</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">CONTACT:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">ADDRESS:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <label className="font-medium w-40">BUSINESS PHONE:</label>
              <input
                type="tel"
                name="businessPhone"
                value={formData.businessPhone}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">CELL PHONE:</label>
              <input
                type="tel"
                name="cellPhone"
                value={formData.cellPhone}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">EMAIL ADDRESS:</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
        </div>
        
        {/* Call Results Section */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-bold mb-4">CALL RESULTS:</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="font-medium mr-4">1) APPOINTMENT:</label>
              <input
                type="checkbox"
                name="callResults.appointment"
                checked={formData.callResults.appointment}
                onChange={handleInputChange}
                className="mr-2"
              />
              
              <label className="font-medium ml-4 mr-2">DATE:</label>
              <input
                type="date"
                name="callResults.appointmentDate"
                value={formData.callResults.appointmentDate}
                onChange={handleInputChange}
                className="border p-2 mr-4"
              />
              
              <label className="font-medium mr-2">TIME:</label>
              <input
                type="time"
                name="callResults.appointmentTime"
                value={formData.callResults.appointmentTime}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">2) CALL BACK DATE:</label>
              <input
                type="date"
                name="callResults.callBackDate"
                value={formData.callResults.callBackDate}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">3) VIDEO REQUEST:</label>
              <div className="flex items-center">
                <label className="mr-2">YES</label>
                <input
                  type="radio"
                  name="callResults.videoRequest"
                  value="yes"
                  checked={formData.callResults.videoRequest === 'yes'}
                  onChange={handleInputChange}
                  className="mr-4"
                />
                
                <label className="mr-2">NO</label>
                <input
                  type="radio"
                  name="callResults.videoRequest"
                  value="no"
                  checked={formData.callResults.videoRequest === 'no'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">4) MORE INFORMATION REQUEST:</label>
              <div className="flex items-center">
                <label className="mr-2">YES</label>
                <input
                  type="radio"
                  name="callResults.moreInfoRequest"
                  value="yes"
                  checked={formData.callResults.moreInfoRequest === 'yes'}
                  onChange={handleInputChange}
                  className="mr-4"
                />
                
                <label className="mr-2">NO</label>
                <input
                  type="radio"
                  name="callResults.moreInfoRequest"
                  value="no"
                  checked={formData.callResults.moreInfoRequest === 'no'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div>
              <label className="font-medium block mb-2">NOTES:</label>
              <textarea
                name="callResultsNotes"
                value={formData.callResultsNotes}
                onChange={handleInputChange}
                className="border p-2 w-full h-24"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Field Visit Section */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-bold mb-4">FIELD VISIT:</h2>
          
          <div className="space-y-4">
            <div className="flex items-center flex-wrap">
              <label className="font-medium mr-4">1) SALE:</label>
              <input
                type="checkbox"
                name="fieldVisit.sale"
                checked={formData.fieldVisit.sale}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">CONTRACT & BANK INFO ATTACHED</label>
              <div className="flex items-center">
                <label className="mr-1">YES</label>
                <input
                  type="radio"
                  name="fieldVisit.contractAttached"
                  value="yes"
                  checked={formData.fieldVisit.contractAttached === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                
                <label className="mr-1">NO</label>
                <input
                  type="radio"
                  name="fieldVisit.contractAttached"
                  value="no"
                  checked={formData.fieldVisit.contractAttached === 'no'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="font-medium mr-4">2) CALL BACK REQUIRED:</label>
              <input
                type="checkbox"
                name="fieldVisit.callBackRequired"
                checked={formData.fieldVisit.callBackRequired}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">DATE:</label>
              <input
                type="date"
                name="fieldVisit.callBackDate"
                value={formData.fieldVisit.callBackDate}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-64">3) MORE INFORMATION REQUIRED:</label>
              <input
                type="text"
                name="fieldVisit.moreInfoRequired"
                value={formData.fieldVisit.moreInfoRequired}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium mr-4">4) NOT INTERESTED:</label>
              <input
                type="checkbox"
                name="fieldVisit.notInterested"
                checked={formData.fieldVisit.notInterested}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">REASON:</label>
              <input
                type="text"
                name="fieldVisit.notInterestedReason"
                value={formData.fieldVisit.notInterestedReason}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">NOTES:</label>
              <textarea
                name="fieldVisitNotes"
                value={formData.fieldVisitNotes}
                onChange={handleInputChange}
                className="border p-2 w-full h-24"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Signatures Section */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium block mb-2">SALES AGENT SIGNATURE:</label>
              {formData.salesAgentSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.salesAgentSignature} 
                    alt="Sales Agent Signature" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, salesAgentSignature: null})}
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
                onChange={(e) => handleSignatureUpload(e, 'salesAgentSignature')}
                className="block w-full text-sm"
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">SALES MANAGER SIGNATURE:</label>
              {formData.salesManagerSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.salesManagerSignature} 
                    alt="Sales Manager Signature" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, salesManagerSignature: null})}
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
                onChange={(e) => handleSignatureUpload(e, 'salesManagerSignature')}
                className="block w-full text-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600"
          >
            Print Form
          </button>
          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaForm4;