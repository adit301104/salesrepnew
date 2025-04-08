import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo2.png";

const USForm1 = () => {
  const [formData, setFormData] = useState({
    bizName: "",
    tmName: "",
    partsType: "",
    northAmericanCars: [],
    europeanCars: [],
    asianCars: [],
    northAmericanParts: [],
    europeanParts: [],
    asianParts: [],
    northAmericanOther: "",
    europeanOther: "",
    asianOther: "",
    pictures: [],
    notes: ""
  });

  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      const field = name.split('-')[0];
      const option = name.split('-')[1];
      
      setFormData(prev => {
        const currentOptions = [...prev[field]];
        if (checked) {
          return { ...prev, [field]: [...currentOptions, option] };
        } else {
          return { ...prev, [field]: currentOptions.filter(item => item !== option) };
        }
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to your backend here
    console.log("Form submitted:", formData);
    
    // Show success notification
    setShowNotification(true);
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const partsList = [
    'Oil', 'Filters', 'Belts', 'Hoses', 'Batteries', 'Tires', 'Shocks', 'Struts',
    'Lubricants', 'Wipers', 'Antifreeze', 'Heating', 'Air Conditioning', 'Electricals',
    'Spark Plugs', 'Gaskets', 'Brake Pads', 'Rotors', 'Calipers', 'Paints'
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Form submitted successfully!
        </div>
      )}

      {/* Header with Logo */}
      <div className="flex justify-between items-start mb-8">
        <img src={Logo} alt="Company Logo" className="h-16" />
        <div className="text-right">
          <h1 className="text-2xl font-bold">AUTO PARTS CHECKLIST</h1>
        </div>
      </div>

      {/* Business Info */}
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <label className="block mb-1">A.P. Biz Name:</label>
          <input
            type="text"
            name="bizName"
            value={formData.bizName}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
        <div className="w-1/2 pl-4">
          <label className="block mb-1">T.M. Name:</label>
          <input
            type="text"
            name="tmName"
            value={formData.tmName}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Parts Type */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">PARTS</h2>
        <div className="flex space-x-8">
          {['New', 'Used', 'Rebuilt/Reconditioned'].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                name="partsType"
                value={type}
                checked={formData.partsType === type}
                onChange={handleChange}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* North American Cars */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">North American cars:</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {['Chrysler', 'Ford', 'GM', 'Tesla'].map((car) => (
            <label key={car} className="flex items-center">
              <input
                type="checkbox"
                name={`northAmericanCars-${car}`}
                checked={formData.northAmericanCars.includes(car)}
                onChange={handleChange}
                className="mr-2"
              />
              {car}
            </label>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {partsList.map((part) => (
            <label key={part} className="flex items-center">
              <input
                type="checkbox"
                name={`northAmericanParts-${part}`}
                checked={formData.northAmericanParts.includes(part)}
                onChange={handleChange}
                className="mr-2"
              />
              {part}
            </label>
          ))}
        </div>
        
        <div className="mt-4">
          <label className="block">Other:</label>
          <input
            type="text"
            name="northAmericanOther"
            value={formData.northAmericanOther}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* European Cars */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">European Cars:</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {['Alfa Romeo', 'Audi', 'BMW', 'Ferrari', 'Fiat', 'Jaguar', 'Mercedes', 'Peugeot',
             'Range Rover', 'Renault', 'Volvo', 'Volkswagen'].map((car) => (
            <label key={car} className="flex items-center">
              <input
                type="checkbox"
                name={`europeanCars-${car}`}
                checked={formData.europeanCars.includes(car)}
                onChange={handleChange}
                className="mr-2"
              />
              {car}
            </label>
          ))}
          <div className="flex items-center">
            <span className="mr-2">Other:</span>
            <input
              type="text"
              name="europeanOther"
              value={formData.europeanOther}
              onChange={handleChange}
              className="border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {partsList.map((part) => (
            <label key={`european-${part}`} className="flex items-center">
              <input
                type="checkbox"
                name={`europeanParts-${part}`}
                checked={formData.europeanParts.includes(part)}
                onChange={handleChange}
                className="mr-2"
              />
              {part}
            </label>
          ))}
        </div>
        
        <div className="mt-4">
          <label className="block">Other:</label>
          <input
            type="text"
            name="europeanOtherParts"
            value={formData.europeanOtherParts}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Asian Cars */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Asian Cars:</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {['Honda', 'Hyundai', 'Isuzu', 'Kia', 'Mazda', 'Mitsubishi', 'Nissan', 'Subaru', 'Toyota'].map((car) => (
            <label key={car} className="flex items-center">
              <input
                type="checkbox"
                name={`asianCars-${car}`}
                checked={formData.asianCars.includes(car)}
                onChange={handleChange}
                className="mr-2"
              />
              {car}
            </label>
          ))}
          <div className="flex items-center">
            <span className="mr-2">Other:</span>
            <input
              type="text"
              name="asianOther"
              value={formData.asianOther}
              onChange={handleChange}
              className="border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {partsList.map((part) => (
            <label key={`asian-${part}`} className="flex items-center">
              <input
                type="checkbox"
                name={`asianParts-${part}`}
                checked={formData.asianParts.includes(part)}
                onChange={handleChange}
                className="mr-2"
              />
              {part}
            </label>
          ))}
        </div>
        
        <div className="mt-4">
          <label className="block">Other:</label>
          <input
            type="text"
            name="asianOtherParts"
            value={formData.asianOtherParts}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Pictures */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">PICTURES</h3>
        <div className="flex space-x-8">
          {[1, 2, 3].map((num) => (
            <label key={num} className="flex items-center">
              <input
                type="checkbox"
                name={`pictures-${num}`}
                checked={formData.pictures.includes(num.toString())}
                onChange={handleChange}
                className="mr-2"
              />
              #{num}
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">Notes:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full h-32 border-2 border-gray-300 rounded p-2 focus:border-green-500 outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded"
        >
          Print Form
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-6 rounded"
        >
          Submit Form
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

export default USForm1;