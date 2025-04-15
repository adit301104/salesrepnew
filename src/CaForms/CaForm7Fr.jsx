import React, { useState } from 'react';
import Logo2 from "../images/Logo2.png";

const CaForm7Fr = () => {
  const [formData, setFormData] = useState({
    garageName: '',
    licenseeName: '',
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
      batteryCharging: false,
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
      recycling: false
    },
    expertise: {
      northAmericanCars: false,
      europeanCars: false,
      asianCars: false,
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

  // French labels for checkboxes
  const servicesLabels = {
    oilChanges: "Changement d'huile",
    diagnostic: "Diagnostique",
    airConditioning: "Air Conditionnée",
    transmission: "Transmission",
    brakes: "Freins",
    glassReplacement: "Réparation vitrine",
    suspension: "Amortisseurs",
    engine: "Moteur",
    pipesAndExhaust: "Tuyaux échappements",
    electricals: "Electriques",
    tuneUps: "Mise au point",
    wheelAlignment: "Alignement roues",
    tireChanges: "Changement de pneus",
    steering: "Volant",
    tankReplacement: "Réparation réservoir",
    batteryChanges: "Batteries",
    hosesAndBelts: "Tuyaux et courroies",
    radiator: "Radiateur",
    wipers: "Essuies glace",
    towing: "Remorquage",
    doorLocks: "Serrures",
    gasoline: "Gasoline",
    batteryCharging: "Charger la batterie",
    trailerHitches: "Attelage de remorque"
  };

  const facilitiesLabels = {
    publicWashrooms: "Toilettes publique",
    shuttle: "Service de transport",
    autoLoaner: "Véhicule disponible",
    childrenArea: "Section des jeunes",
    publicTransit: "Autobus",
    drinks: "Breuvages",
    nearRestaurant: "Restaurants à proximité",
    openWeekends: "Ouvert fin de semaine",
    multipleBays: "Plusieurs portes 3+",
    waitingArea: "Centre d'attente",
    openEvenings: "Ouvert en soirée",
    safeArea: "Endroit paisible",
    franchise: "Franchise"
  };

  const specialtyServicesLabels = {
    windowTinting: "Teinture de fenêtre",
    magWheels: "Roues Mag",
    painting: "Peinture",
    handicapServices: "Services pour handicapés",
    customWork: "Travail sur mesure",
    automaticStarters: "Démarreurs Automatique",
    carAlarms: "Alarmes",
    recycling: "Recyclage"
  };

  const expertiseLabels = {
    northAmericanCars: "Nord Américain",
    europeanCars: "Europeen",
    asianCars: "Asiatique",
    other: "Autre",
    bodyShop: "Centre de débossage",
    trucksVans: "Camions/Fourgonnettes",
    diesel: "Diesel",
    electric: "Electrique",
    hybrid: "Hybride",
    manualTrans: "Transmission Manuelle",
    autoTrans: "Transmission Automatique"
  };

  const CheckboxGroup = ({ title, items, category, labels }) => (
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
              {labels[key]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Formulaire Soumis avec Succès!</h2>
        <p>Redirection vers la page d'accueil...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 print:p-0">
      <div className="print:hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">SERVICES DU GARAGE</h1>
            <img src={Logo2} alt="Logo de l'entreprise" className="h-16" />
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="flex-1 mb-2 md:mb-0 md:mr-4">
              <label htmlFor="garageName" className="block mb-1">Nom du Garage:</label>
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
              <label htmlFor="licenseeName" className="block mb-1">Nom du Licencié:</label>
              <input
                type="text"
                id="licenseeName"
                name="licenseeName"
                value={formData.licenseeName}
                onChange={handleInputChange}
                className="w-full border p-2"
              />
            </div>
          </div>

          <CheckboxGroup
            title="SERVICES"
            items={formData.services}
            category="services"
            labels={servicesLabels}
          />

          <CheckboxGroup
            title="DESCRIPTION"
            items={formData.facilities}
            category="facilities"
            labels={facilitiesLabels}
          />

          <CheckboxGroup
            title="SERVICES SPÉCIALISÉS"
            items={formData.specialtyServices}
            category="specialtyServices"
            labels={specialtyServicesLabels}
          />

          <CheckboxGroup
            title="EXPERTISE DE VÉHICULES"
            items={formData.expertise}
            category="expertise"
            labels={expertiseLabels}
          />

          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">PHOTOS</h3>
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
              <label className="block font-bold mb-1">Signature du Représentant:</label>
              <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                {formData.salesRepSignature ? (
                  <img 
                    src={formData.salesRepSignature} 
                    alt="Signature du Représentant" 
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
                    <p className="text-sm text-gray-500">Télécharger signature</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-1">Signature du Licencié:</label>
              <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                {formData.vendorSignature ? (
                  <img 
                    src={formData.vendorSignature} 
                    alt="Signature du Licencié" 
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
                    <p className="text-sm text-gray-500">Télécharger signature</p>
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
              Imprimer
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>

      {/* Print version */}
      <div className="hidden print:block">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">SERVICES DU GARAGE</h1>
          <img src={Logo2} alt="Logo de l'entreprise" className="h-16" />
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex-1 mr-4">
            <p className="font-bold">Nom du Garage: <span className="font-normal">{formData.garageName}</span></p>
          </div>
          <div className="flex-1">
            <p className="font-bold">Nom du Licencié: <span className="font-normal">{formData.licenseeName}</span></p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">SERVICES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(formData.services).map(([key, value]) => 
              value ? (
                <div key={key} className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>{servicesLabels[key]}</span>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">DESCRIPTION</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(formData.facilities).map(([key, value]) => 
              value ? (
                <div key={key} className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>{facilitiesLabels[key]}</span>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Specialty Services Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">SERVICES SPÉCIALISÉS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(formData.specialtyServices).map(([key, value]) => 
              value ? (
                <div key={key} className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>{specialtyServicesLabels[key]}</span>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">EXPERTISE DE VÉHICULES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(formData.expertise).map(([key, value]) => 
              value ? (
                <div key={key} className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>{expertiseLabels[key]}</span>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Pictures Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">PHOTOS</h3>
          <div className="flex space-x-4">
            {formData.pictures.pic1 && <span className="mr-4">✓ #1</span>}
            {formData.pictures.pic2 && <span className="mr-4">✓ #2</span>}
            {formData.pictures.pic3 && <span className="mr-4">✓ #3</span>}
          </div>
        </div>

        {/* Notes Section */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Notes:</h3>
          <p>{formData.notes}</p>
        </div>

        {/* Signatures */}
        <div className="flex justify-between mb-4">
          <div className="flex-1 mr-4">
            <p className="font-bold mb-2">Signature du Représentant:</p>
            {formData.salesRepSignature && (
              <img 
                src={formData.salesRepSignature} 
                alt="Signature du Représentant" 
                className="h-20" 
              />
            )}
          </div>
          <div className="flex-1">
            <p className="font-bold mb-2">Signature du Licencié:</p>
            {formData.vendorSignature && (
              <img 
                src={formData.vendorSignature} 
                alt="Signature du Licencié" 
                className="h-20" 
              />
            )}
            <p className="text-sm mt-1">Je suis autorisé à signer pour l'entreprise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaForm7Fr;