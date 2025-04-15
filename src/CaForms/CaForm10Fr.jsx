import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CaForm10Fr = () => {
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
    console.log('Formulaire soumis:', formData);
    // Redirect to home page
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">QUESTIONS - GARAGE</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">1) Combien d'années êtes-vous en affaire?</label>
            <input
              type="text"
              name="businessTime"
              value={formData.businessTime}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">2) Avez-vous opéré de votre endroit depuis l'ouverture? Si non, quelle est l'ancienne addresse?</label>
            <textarea
              name="locationInfo"
              value={formData.locationInfo}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">3) Quels services offrez-vous?</label>
            <textarea
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">4) Quels sont vos heures d'opération?</label>
            <input
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">5) Combien de portes et ascenseurs?</label>
            <input
              type="text"
              name="doorsAndLifts"
              value={formData.doorsAndLifts}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">6) Combien de mécaniciens avez-vous et quels est leurs expérience?</label>
            <textarea
              name="mechanics"
              value={formData.mechanics}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">7) Cherchez-vous d'autres employés?</label>
            <input
              type="text"
              name="lookingForStaff"
              value={formData.lookingForStaff}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">8) Est ce que le propriétaire est aussi mécanicien?</label>
            <input
              type="text"
              name="ownerWorks"
              value={formData.ownerWorks}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">9) Est ce que l'entreprise a des spécialités tel autos Europeens ou services uniques?</label>
            <textarea
              name="specialties"
              value={formData.specialties}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">10) Quand durant le mois ou la semaine êtes-vous le plus occupé?</label>
            <textarea
              name="busiestTime"
              value={formData.busiestTime}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">11) Pouvez-vous accepter plus de clientèle?</label>
            <input
              type="text"
              name="handleExtraVolume"
              value={formData.handleExtraVolume}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">12) Pouvez-vous céduler des rendez-vous? Utilisez-vous un logiciel?</label>
            <textarea
              name="scheduling"
              value={formData.scheduling}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">13) Quels forme de paiement acceptez-vous?</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="cash"
                  checked={formData.payment.cash}
                  onChange={handleChange}
                  className="mr-2"
                />
                Comptant
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
            <label className="font-medium">14) Avez-vous une remorque ou un contrat avec une compagnie de remorques?</label>
            <input
              type="text"
              name="towTruck"
              value={formData.towTruck}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">15) De qui achetez-vous vos pièces?</label>
            <textarea
              name="partsSupplier"
              value={formData.partsSupplier}
              onChange={handleChange}
              className="border p-2 mt-1 h-20"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">16) Vendez-vous des pièces tel pneus, batteries?</label>
            <input
              type="text"
              name="sellParts"
              value={formData.sellParts}
              onChange={handleChange}
              className="border p-2 mt-1"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="font-medium">17) Est ce que vous achetez et vendez des automobiles?</label>
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
            Imprimer
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaForm10Fr;