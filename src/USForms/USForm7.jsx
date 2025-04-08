import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo2.png";

const USForm7 = () => {
  const [formData, setFormData] = useState({
    garageName: "",
    tmName: "",
    notes: "",
    picture1: false,
    picture2: false,
    picture3: false,
  });

  // Service checkboxes
  const [services, setServices] = useState({
    oilChanges: false,
    diagnostic: false,
    airConditioning: false,
    transmission: false,
    brakes: false,
    glassReplacement: false,
    suspension: false,
    engine: false,
    pipesExhaust: false,
    electricals: false,
    tuneUps: false,
    wheelAlignment: false,
    tireChanges: false,
    steering: false,
    tankReplacement: false,
    batteryChanges: false,
    hosesBelts: false,
    radiator: false,
    wipers: false,
    towing: false,
    doorLocks: false,
    gasoline: false,
    boost: false,
    trailerHitches: false,
  });

  // Facilities checkboxes
  const [facilities, setFacilities] = useState({
    publicWashrooms: false,
    shuttle: false,
    autoLoaner: false,
    childrenArea: false,
    publicTransit: false,
    drinks: false,
    nearRestaurant: false,
    openWeekends: false,
    multipleBays: false,
    waitingArea: false,
    openEvenings: false,
    safeArea: false,
    franchise: false,
  });

  // Specialty Services checkboxes
  const [specialtyServices, setSpecialtyServices] = useState({
    windowTinting: false,
    magWheels: false,
    painting: false,
    handicapServices: false,
    customWork: false,
    automaticStarters: false,
    carAlarms: false,
    recycling: false,
    rustProofing: false,
    carWash: false,
    detailing: false,
  });

  // Expertise checkboxes
  const [expertise, setExpertise] = useState({
    northAmericanCars: false,
    europeanCars: false,
    japaneseKoreanCars: false,
    other: false,
    bodyShop: false,
    trucksVans: false,
    diesel: false,
    electric: false,
    hybrid: false,
    manualTrans: false,
    autoTrans: false,
  });

  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category, name) => {
    switch (category) {
      case 'services':
        setServices(prev => ({ ...prev, [name]: !prev[name] }));
        break;
      case 'facilities':
        setFacilities(prev => ({ ...prev, [name]: !prev[name] }));
        break;
      case 'specialtyServices':
        setSpecialtyServices(prev => ({ ...prev, [name]: !prev[name] }));
        break;
      case 'expertise':
        setExpertise(prev => ({ ...prev, [name]: !prev[name] }));
        break;
      case 'pictures':
        setFormData(prev => ({ ...prev, [name]: !prev[name] }));
        break;
      default:
        break;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to your backend here
    console.log("Checklist submitted:", {
      formData,
      services,
      facilities,
      specialtyServices,
      expertise
    });
    
    // Show success notification
    setShowNotification(true);
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Garage checklist submitted successfully!
        </div>
      )}

      {/* Header with Logo */}
      <div className="flex justify-between items-start mb-8">
        <img src={Logo} alt="AutoWiz Logo" className="h-16" />
        <div className="text-right">
          <h1 className="text-2xl font-bold">GARAGE CHECKLIST</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Garage and TM Information */}
        <div className="flex justify-between mb-8">
          <div className="w-1/2 pr-4">
            <div className="flex items-center">
              <label className="mr-2 font-semibold">Garage Name:</label>
              <input
                type="text"
                name="garageName"
                value={formData.garageName}
                onChange={handleChange}
                className="flex-1 border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="flex items-center">
              <label className="mr-2 font-semibold">T.M. Name:</label>
              <input
                type="text"
                name="tmName"
                value={formData.tmName}
                onChange={handleChange}
                className="flex-1 border-b-2 border-gray-300 focus:border-green-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">SERVICES</h2>
          <div className="grid grid-cols-4 gap-3">
            {Object.entries({
              oilChanges: "Oil Changes",
              diagnostic: "Diagnostic",
              airConditioning: "Air Conditioning",
              transmission: "Transmission",
              brakes: "Brakes",
              glassReplacement: "Glass replacement",
              suspension: "Suspension",
              engine: "Engine",
              pipesExhaust: "Pipes and Exhaust",
              electricals: "Electricals",
              tuneUps: "Tune Ups",
              wheelAlignment: "Wheel Alignment",
              tireChanges: "Tire Changes",
              steering: "Steering",
              tankReplacement: "Tank Replacement",
              batteryChanges: "Battery Changes",
              hosesBelts: "Hoses and Belts",
              radiator: "Radiator",
              wipers: "Wipers",
              towing: "Towing",
              doorLocks: "Door Locks",
              gasoline: "Gasoline",
              boost: "Boost",
              trailerHitches: "Trailer Hitches"
            }).map(([key, label]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  id={key}
                  checked={services[key]}
                  onChange={() => handleCheckboxChange('services', key)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={key}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">FACILITIES</h2>
          <div className="grid grid-cols-4 gap-3">
            {Object.entries({
              publicWashrooms: "Public Washrooms",
              shuttle: "Shuttle",
              autoLoaner: "Auto Loaner",
              childrenArea: "Children Area",
              publicTransit: "Public Transit",
              drinks: "Drinks",
              nearRestaurant: "Near Restaurant",
              openWeekends: "Open Weekends",
              multipleBays: "Multiple Bays 3+",
              waitingArea: "Waiting Area",
              openEvenings: "Open Evenings",
              safeArea: "Safe Area",
              franchise: "Franchise"
            }).map(([key, label]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  id={key}
                  checked={facilities[key]}
                  onChange={() => handleCheckboxChange('facilities', key)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={key}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Specialty Services Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">SPECIALTY SERVICES</h2>
          <div className="grid grid-cols-4 gap-3">
            {Object.entries({
              windowTinting: "Window Tinting",
              magWheels: "Mag Wheels",
              painting: "Painting",
              handicapServices: "Handicap Services",
              customWork: "Custom Work",
              automaticStarters: "Automatic Starters",
              carAlarms: "Car Alarms",
              recycling: "Recycling",
              rustProofing: "Rust Proofing",
              carWash: "Car Wash",
              detailing: "Detailing"
            }).map(([key, label]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  id={key}
                  checked={specialtyServices[key]}
                  onChange={() => handleCheckboxChange('specialtyServices', key)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={key}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">EXPERTISE</h2>
          <div className="grid grid-cols-4 gap-3">
            {Object.entries({
              northAmericanCars: "North American Cars",
              europeanCars: "European Cars",
              japaneseKoreanCars: "Japanese/Korean Cars",
              other: "Other",
              bodyShop: "Body Shop",
              trucksVans: "Trucks/Vans",
              diesel: "Diesel",
              electric: "Electric",
              hybrid: "Hybrid",
              manualTrans: "Manual Trans",
              autoTrans: "Auto Trans"
            }).map(([key, label]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  id={key}
                  checked={expertise[key]}
                  onChange={() => handleCheckboxChange('expertise', key)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={key}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Pictures Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">PICTURES</h2>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="picture1"
                checked={formData.picture1}
                onChange={() => handleCheckboxChange('pictures', 'picture1')}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="picture1">#1</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="picture2"
                checked={formData.picture2}
                onChange={() => handleCheckboxChange('pictures', 'picture2')}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="picture2">#2</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="picture3"
                checked={formData.picture3}
                onChange={() => handleCheckboxChange('pictures', 'picture3')}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="picture3">#3</label>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Notes:</h2>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full h-24 border-2 border-gray-300 focus:border-green-500 outline-none p-2"
          />
        </div>

        {/* Footer */}
        <div className="text-center text-sm mt-12 mb-4">
          <p>UNITED STATES - CANADA Tel: 754-205-9581, www.autowizapp.com</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded"
          >
            Print Checklist
          </button>
          <button
            type="submit"
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-6 rounded"
          >
            Submit Checklist
          </button>
        </div>
      </form>

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

export default USForm7;