import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo2.png";

const CaForm1Fr = () => {
  const [formData, setFormData] = useState({
    garageNom: "",
    licencieNom: "",
    services: [],
    description: [],
    servicesSpecialises: [],
    expertiseVehicules: [],
    transmissionType: [],
    vehiculeType: [],
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
    console.log("Formulaire soumis:", formData);
    
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
          Formulaire soumis avec succès!
        </div>
      )}

      {/* Header with Logo */}
      <div className="flex justify-between items-start mb-8">
        <img src={Logo} alt="Logo de l'entreprise" className="h-16" />
        <div className="text-right">
          <h1 className="text-2xl font-bold">SERVICES DU GARAGE</h1>
        </div>
      </div>

      {/* Garage Info */}
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <label className="block mb-1">Nom du Garage:</label>
          <input
            type="text"
            name="garageNom"
            value={formData.garageNom}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
        <div className="w-1/2 pl-4">
          <label className="block mb-1">Nom du Licencié:</label>
          <input
            type="text"
            name="licencieNom"
            value={formData.licencieNom}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">SERVICES</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            'Changement d\'huile', 'Diagnostique', 'Air Conditionnée', 'Transmission',
            'Freins', 'Réparation vitrine', 'Amortisseurs', 'Moteur',
            'Tuyaux échappements', 'Electriques', 'Mise au point', 'Alignement roues',
            'Changement de pneus', 'Volant', 'Réparation réservoir', 'Batteries',
            'Tuyaux et courroies', 'Radiateur', 'Essuies glace', 'Remorquage',
            'Serrures', 'Gasoline', 'Charger la batterie', 'Attelage de remorque'
          ].map((service) => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                name={`services-${service}`}
                checked={formData.services.includes(service)}
                onChange={handleChange}
                className="mr-2"
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Description:</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            'Toilettes publique', 'Service de transport', 'Véhicule disponible', 'Section des jeunes',
            'Autobus', 'Breuvages', 'Restaurants à proximité', 'Ouvert fin de semaine',
            'Plusieurs portes 3+', 'Centre d\'attente', 'Ouvert en soirée', 'Endroit paisible',
            'Franchise'
          ].map((desc) => (
            <label key={desc} className="flex items-center">
              <input
                type="checkbox"
                name={`description-${desc}`}
                checked={formData.description.includes(desc)}
                onChange={handleChange}
                className="mr-2"
              />
              {desc}
            </label>
          ))}
        </div>
      </div>

      {/* Services Spécialisés */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">SERVICES SPÉCIALISÉS:</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            'Teinture de fenêtre', 'Roues Mag', 'Peinture', 'Services pour handicapés',
            'Travail sur mesure', 'Démarreurs Automatique', 'Alarmes', 'Recyclage'
          ].map((specialService) => (
            <label key={specialService} className="flex items-center">
              <input
                type="checkbox"
                name={`servicesSpecialises-${specialService}`}
                checked={formData.servicesSpecialises.includes(specialService)}
                onChange={handleChange}
                className="mr-2"
              />
              {specialService}
            </label>
          ))}
        </div>
      </div>

      {/* Expertise de Véhicules */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">EXPERTISE DE VÉHICULES:</h3>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {['Nord Américain', 'Europeen', 'Asiatique', 'Autre'].map((expertise) => (
            <label key={expertise} className="flex items-center">
              <input
                type="checkbox"
                name={`expertiseVehicules-${expertise}`}
                checked={formData.expertiseVehicules.includes(expertise)}
                onChange={handleChange}
                className="mr-2"
              />
              {expertise}
            </label>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-4">
          {['Centre de débossage', 'Camions/Fourgonnettes', 'Diesel', 'Electrique', 'Hybride'].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                name={`vehiculeType-${type}`}
                checked={formData.vehiculeType.includes(type)}
                onChange={handleChange}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {['Transmission Manuelle', 'Transmission Automatique'].map((trans) => (
            <label key={trans} className="flex items-center">
              <input
                type="checkbox"
                name={`transmissionType-${trans}`}
                checked={formData.transmissionType.includes(trans)}
                onChange={handleChange}
                className="mr-2"
              />
              {trans}
            </label>
          ))}
        </div>
      </div>

      {/* Pictures */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Photos</h3>
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
          Imprimer le formulaire
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-6 rounded"
        >
          Soumettre le formulaire
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

export default CaForm1Fr;