import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CaForm10 = () => {
  const [formData, setFormData] = useState({
    businessTime: '',
    locationInfo: '',
    services: '',
    hours: '',
    doorsAndLifts: '',
    mechanics: '',
    lookingForStaff: '',
    ownerWorks: '',
    specialties: '',
    busiestTime: '',
    handleExtraVolume: '',
    scheduling: '',
    payment: {
      cash: false,
      mastercard: false,
      visa: false,
      amex: false
    },
    towTruck: '',
    partsSupplier: '',
    sellParts: '',
    buySellCars: '',
    notes: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        payment: {
          ...formData.payment,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    // Redirect to home page
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">INTERVIEW QUESTIONS - GARAGE</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">1) How long have you been in business?</label>
            <input
              type="text"
              name="businessTime"
              value={formData.businessTime}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">2) Have you always been at this location? If yes, do an observation about the amount of traffic or the excellent visibility etc… If no, discuss the previous location and what made them move to the current location?</label>
            <textarea
              name="locationInfo"
              value={formData.locationInfo}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">3) What are the services you offer?</label>
            <textarea
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">4) What are your hours of operation?</label>
            <input
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">5) How many doors and lifts do you have?</label>
            <input
              type="text"
              name="doorsAndLifts"
              value={formData.doorsAndLifts}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">6) How many mechanics are working for you and how long have they been here?</label>
            <textarea
              name="mechanics"
              value={formData.mechanics}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">7) Is the business looking for additional staff?</label>
            <input
              type="text"
              name="lookingForStaff"
              value={formData.lookingForStaff}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">8) Does the owner also work in the shop fixing cars?</label>
            <input
              type="text"
              name="ownerWorks"
              value={formData.ownerWorks}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">9) Does the business have specialties such as foreign cars, custom vehicles etc…</label>
            <textarea
              name="specialties"
              value={formData.specialties}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">10) What time of the month or week are you busiest?</label>
            <textarea
              name="busiestTime"
              value={formData.busiestTime}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">11) If our article brings you more business can you handle the extra volume?</label>
            <input
              type="text"
              name="handleExtraVolume"
              value={formData.handleExtraVolume}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">12) Do you use a scheduling platform if someone wants an appointment? Could somebody book an appointment with you if they want a service?</label>
            <textarea
              name="scheduling"
              value={formData.scheduling}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">13) What types of payment do you accept?</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="cash"
                  checked={formData.payment.cash}
                  onChange={handleChange}
                  className="mr-2"
                />
                Cash
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="mastercard"
                  checked={formData.payment.mastercard}
                  onChange={handleChange}
                  className="mr-2"
                />
                Mastercard
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="visa"
                  checked={formData.payment.visa}
                  onChange={handleChange}
                  className="mr-2"
                />
                Visa
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="amex"
                  checked={formData.payment.amex}
                  onChange={handleChange}
                  className="mr-2"
                />
                Amex
              </label>
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">14) Do you have a tow truck or a contract with a tow truck company?</label>
            <input
              type="text"
              name="towTruck"
              value={formData.towTruck}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">15) What parts supplier do you use the most? (do they support local suppliers?)</label>
            <textarea
              name="partsSupplier"
              value={formData.partsSupplier}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">16) Do you sell parts such as tires, wipers, rims?</label>
            <input
              type="text"
              name="sellParts"
              value={formData.sellParts}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">17) Do you buy and sell cars?</label>
            <input
              type="text"
              name="buySellCars"
              value={formData.buySellCars}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="border p-2 mt-1 h-24"
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Print Form
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaForm10;