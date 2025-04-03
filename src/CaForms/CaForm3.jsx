import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../images/Logo2.png";

const CaForm3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: '',
    clientLegalName: '',
    doingBusinessAs: '',
    address: '',
    posCode: '',
    owner: '',
    celNumber: '',
    businessTel: '',
    email: '',
    inBusinessSince: '',
    representativeName: '',
    territoryNumber: '',
    repAddress: '',
    repTel: '',
    service: '',
    term: '',
    monthlyCost: '',
    withdrawalDate: '',
    contractCity: '',
    contractDay: '',
    contractMonth: '',
    contractYear: '',
  });
  const [repSignature, setRepSignature] = useState(null);
  const [clientSignature, setClientSignature] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRepSignature = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRepSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClientSignature = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClientSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold">AUTO PARTS SERVICE CONTRACT</h1>
        <img src={Logo2} alt="Autowiz Logo" className="h-16" />
      </div>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Form submitted successfully! Redirecting to home page...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block font-medium">Account Number:</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">1) Client Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium">Client Legal Name:</label>
                  <input
                    type="text"
                    name="clientLegalName"
                    value={formData.clientLegalName}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium">Doing Business As:</label>
                  <input
                    type="text"
                    name="doingBusinessAs"
                    value={formData.doingBusinessAs}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Address:</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">POS Code:</label>
                    <input
                      type="text"
                      name="posCode"
                      value={formData.posCode}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Owner:</label>
                    <input
                      type="text"
                      name="owner"
                      value={formData.owner}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Cel Number:</label>
                    <input
                      type="text"
                      name="celNumber"
                      value={formData.celNumber}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Business Tel #:</label>
                    <input
                      type="text"
                      name="businessTel"
                      value={formData.businessTel}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium">In business since:</label>
                  <input
                    type="text"
                    name="inBusinessSince"
                    value={formData.inBusinessSince}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">2) Representative Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Representative Name:</label>
                    <input
                      type="text"
                      name="representativeName"
                      value={formData.representativeName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Terr. #:</label>
                    <input
                      type="text"
                      name="territoryNumber"
                      value={formData.territoryNumber}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Address:</label>
                    <input
                      type="text"
                      name="repAddress"
                      value={formData.repAddress}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Tel #:</label>
                    <input
                      type="text"
                      name="repTel"
                      value={formData.repTel}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium">SERVICE:</label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Term:</label>
                    <input
                      type="text"
                      name="term"
                      value={formData.term}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Monthly Cost + Taxes:</label>
                    <input
                      type="text"
                      name="monthlyCost"
                      value={formData.monthlyCost}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium">Date of monthly withdrawals:</label>
                  <input
                    type="text"
                    name="withdrawalDate"
                    value={formData.withdrawalDate}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">General Provisions</h2>
              <div className="space-y-2 text-sm">
                <p>1) Autowiz Assistance Corporation agrees to provide the client named above the access code to be able to download from www.autowizapp.com the automotive platform software.</p>
                <p>2) The client agrees to pay the sum above on a monthly basis via direct credit card debit for the term described above.</p>
                <p>3) There are no refunds on this service Contract.</p>
                <p>4) Client agrees to pay a service charge of twice the bank fee should the monthly debit be declined.</p>
                <p>5) Should the client wish to cancel this contract, a fee equivalent to two month's debits will be charged to the client's agreed form of payment, which the client agrees to pay.</p>
                <p>6) This contract renews automatically for an equivalent term unless notice is received from the client 60 days prior to the expiry of their intention not to proceed with a renewal.</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">Contract Date</h2>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block font-medium">City:</label>
                  <input
                    type="text"
                    name="contractCity"
                    value={formData.contractCity}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium">Day:</label>
                  <input
                    type="text"
                    name="contractDay"
                    value={formData.contractDay}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium">Month:</label>
                  <input
                    type="text"
                    name="contractMonth"
                    value={formData.contractMonth}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium">Year:</label>
                  <input
                    type="text"
                    name="contractYear"
                    value={formData.contractYear}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold mb-4">Signatures</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block font-medium">Representative Signature:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleRepSignature}
                    className="mt-2"
                  />
                  {repSignature && (
                    <img src={repSignature} alt="Representative Signature" className="h-20 mt-2 border border-gray-300" />
                  )}
                  <p className="text-xs mt-2">Signature of Representative</p>
                </div>
                <div>
                  <label className="block font-medium">Client Signature:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleClientSignature}
                    className="mt-2"
                  />
                  {clientSignature && (
                    <img src={clientSignature} alt="Client Signature" className="h-20 mt-2 border border-gray-300" />
                  )}
                  <p className="text-xs mt-2">I am authorized to sign for the Corporation</p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-12 border-t border-gray-300 pt-4">
              <div className="text-center text-sm">
                <p>CANADA – UNITED STATES Tel: 613-282-5558, www.autowizapp.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Print Form
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Submit Form
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CaForm3;