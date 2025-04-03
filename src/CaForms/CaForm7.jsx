import React, { useState } from 'react';
import Logo2 from "../images/Logo2.png";

const CaForm7 = () => {
  const [formData, setFormData] = useState({
    garageName: '',
    tmName: '',
    services: {
      oilChanges: false,
      diagnostic: false,
      airConditioning: false,
      transmission: false,
      brakes: false,
      glassReplacement: false,
      suspension: false,
      engine: false,
      pipesAndExhaust: false,
      electricals: false,
      tuneUps: false,
      wheelAlignment: false,
      tireChanges: false,
      steering: false,
      tankReplacement: false,
      batteryChanges: false,
      hosesAndBelts: false,
      radiator: false,
      wipers: false,
      towing: false,
      doorLocks: false,
      gasoline: false,
      boost: false,
      trailerHitches: false
    },
    facilities: {
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
      franchise: false
    },
    specialtyServices: {
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
      detailing: false
    },
    expertise: {
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
      autoTrans: false
    },
    pictures: {
      pic1: false,
      pic2: false,
      pic3: false
    },
    notes: '',
    salesRepSignature: null,
    vendorSignature: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (category, item) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [item]: !formData[category][item]
      }
    });
  };

  const handleSignatureUpload = (e, signatureType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [signatureType]: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you would handle form submission to server here
    setTimeout(() => {
      // Redirect to home page after notification
      window.location.href = '/';
    }, 3000);
  };

  const CheckboxGroup = ({ title, items, category }) => (
    <div className="mb-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(items).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <input
              type="checkbox"
              id={key}
              checked={value}
              onChange={() => handleCheckboxChange(category, key)}
              className="mr-2"
            />
            <label htmlFor={key} className="text-sm">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
        <p>Redirecting to home page...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 print:p-0">
      <div className="print:hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">GARAGE CHECKLIST</h1>
            <img src={Logo2} alt="Company Logo" className="h-16" />
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="flex-1 mb-2 md:mb-0 md:mr-4">
              <label htmlFor="garageName" className="block mb-1">Garage Name:</label>
              <input
                type="text"
                id="garageName"
                name="garageName"
                value={formData.garageName}
                onChange={handleInputChange}
                className="w-full border p-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="tmName" className="block mb-1">T.M. Name:</label>
              <input
                type="text"
                id="tmName"
                name="tmName"
                value={formData.tmName}
                onChange={handleInputChange}
                className="w-full border p-2"
              />
            </div>
          </div>

          <CheckboxGroup
            title="SERVICES"
            items={formData.services}
            category="services"
          />

          <CheckboxGroup
            title="FACILITIES"
            items={formData.facilities}
            category="facilities"
          />

          <CheckboxGroup
            title="SPECIALTY SERVICES"
            items={formData.specialtyServices}
            category="specialtyServices"
          />

          <CheckboxGroup
            title="EXPERTISE"
            items={formData.expertise}
            category="expertise"
          />

          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">PICTURES</h3>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pic1"
                  checked={formData.pictures.pic1}
                  onChange={() => handleCheckboxChange("pictures", "pic1")}
                  className="mr-2"
                />
                <label htmlFor="pic1">#1</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pic2"
                  checked={formData.pictures.pic2}
                  onChange={() => handleCheckboxChange("pictures", "pic2")}
                  className="mr-2"
                />
                <label htmlFor="pic2">#2</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pic3"
                  checked={formData.pictures.pic3}
                  onChange={() => handleCheckboxChange("pictures", "pic3")}
                  className="mr-2"
                />
                <label htmlFor="pic3">#3</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="notes" className="block font-bold mb-1">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full border p-2 h-20"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <label className="block font-bold mb-1">Sales Rep Signature:</label>
              <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                {formData.salesRepSignature ? (
                  <img 
                    src={formData.salesRepSignature} 
                    alt="Sales Rep Signature" 
                    className="max-h-28" 
                  />
                ) : (
                  <div className="text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSignatureUpload(e, 'salesRepSignature')}
                      className="mb-2"
                    />
                    <p className="text-sm text-gray-500">Upload signature</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-1">Vendor Signature:</label>
              <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                {formData.vendorSignature ? (
                  <img 
                    src={formData.vendorSignature} 
                    alt="Vendor Signature" 
                    className="max-h-28" 
                  />
                ) : (
                  <div className="text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSignatureUpload(e, 'vendorSignature')}
                      className="mb-2"
                    />
                    <p className="text-sm text-gray-500">Upload signature</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Print
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Print version */}
      <div className="hidden print:block">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">GARAGE CHECKLIST</h1>
          <img src={Logo2} alt="Company Logo" className="h-16" />
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex-1 mr-4">
            <p className="font-bold">Garage Name: <span className="font-normal">{formData.garageName}</span></p>
          </div>
          <div className="flex-1">
            <p className="font-bold">T.M. Name: <span className="font-normal">{formData.tmName}</span></p>
          </div>
        </div>

        {/* Display all checked items in print version */}
        {/* And all the rest of the print layout... */}
      </div>
    </div>
  );
};

export default CaForm7;