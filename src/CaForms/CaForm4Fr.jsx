import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../images/Logo2.png";

const CaForm4Fr = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    territoire: '',
    nomAffaire: '',
    contact: '',
    addresse: '',
    telephoneAffaire: '',
    cellulaire: '',
    addresseCourriel: '',
    resultats: {
      rendezVous: false,
      rendezVousDate: '',
      rendezVousHeure: '',
      dateRappel: '',
      demandeVideo: '',
      demandePlusInfo: ''
    },
    resultatsNotes: '',
    visiteEntreprise: {
      vente: false,
      contratAttache: '',
      rappelRequis: false,
      rappelDate: '',
      plusInfoRequis: '',
      pasInteresse: false,
      pasInteresseRaison: ''
    },
    visiteEntrepriseNotes: '',
    representantSignature: null,
    directeurSignature: null
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
    alert("Formulaire soumis avec succès!");
    navigate('/'); // Redirect to home page
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CLIENT AUTOWIZ PAGE INFO</h1>
        <img src={Logo2} alt="Logo Autowiz" className="h-16" />
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
            <label className="font-medium w-24">TERRITOIRE:</label>
            <input
              type="text"
              name="territoire"
              value={formData.territoire}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
        </div>
        
        {/* Business Information */}
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="font-medium w-40">NOM D'AFFAIRE:</label>
            <input
              type="text"
              name="nomAffaire"
              value={formData.nomAffaire}
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
            <label className="font-medium w-40">ADDRESSE:</label>
            <input
              type="text"
              name="addresse"
              value={formData.addresse}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <label className="font-medium w-40">TÉLÉPHONE AFFAIRE:</label>
              <input
                type="tel"
                name="telephoneAffaire"
                value={formData.telephoneAffaire}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">CELLULAIRE:</label>
              <input
                type="tel"
                name="cellulaire"
                value={formData.cellulaire}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <label className="font-medium w-40">ADDRESSE COURRIEL:</label>
            <input
              type="email"
              name="addresseCourriel"
              value={formData.addresseCourriel}
              onChange={handleInputChange}
              className="border p-2 flex-grow"
            />
          </div>
        </div>
        
        {/* Résultats Section */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-bold mb-4">RÉSULTATS:</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="font-medium mr-4">1) RENDEZ-VOUS:</label>
              <input
                type="checkbox"
                name="resultats.rendezVous"
                checked={formData.resultats.rendezVous}
                onChange={handleInputChange}
                className="mr-2"
              />
              
              <label className="font-medium ml-4 mr-2">DATE:</label>
              <input
                type="date"
                name="resultats.rendezVousDate"
                value={formData.resultats.rendezVousDate}
                onChange={handleInputChange}
                className="border p-2 mr-4"
              />
              
              <label className="font-medium mr-2">HEURE:</label>
              <input
                type="time"
                name="resultats.rendezVousHeure"
                value={formData.resultats.rendezVousHeure}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">2) DATE DE RAPPEL:</label>
              <input
                type="date"
                name="resultats.dateRappel"
                value={formData.resultats.dateRappel}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">3) DEMANDE VIDÉO:</label>
              <div className="flex items-center">
                <label className="mr-2">OUI</label>
                <input
                  type="radio"
                  name="resultats.demandeVideo"
                  value="oui"
                  checked={formData.resultats.demandeVideo === 'oui'}
                  onChange={handleInputChange}
                  className="mr-4"
                />
                
                <label className="mr-2">NON</label>
                <input
                  type="radio"
                  name="resultats.demandeVideo"
                  value="non"
                  checked={formData.resultats.demandeVideo === 'non'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-40">4) DEMANDE PLUS D'INFORMATION:</label>
              <div className="flex items-center">
                <label className="mr-2">OUI</label>
                <input
                  type="radio"
                  name="resultats.demandePlusInfo"
                  value="oui"
                  checked={formData.resultats.demandePlusInfo === 'oui'}
                  onChange={handleInputChange}
                  className="mr-4"
                />
                
                <label className="mr-2">NON</label>
                <input
                  type="radio"
                  name="resultats.demandePlusInfo"
                  value="non"
                  checked={formData.resultats.demandePlusInfo === 'non'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div>
              <label className="font-medium block mb-2">NOTES:</label>
              <textarea
                name="resultatsNotes"
                value={formData.resultatsNotes}
                onChange={handleInputChange}
                className="border p-2 w-full h-24"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Visite Entreprise Section */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-bold mb-4">VISITE CHEZ L'ENTREPRISE:</h2>
          
          <div className="space-y-4">
            <div className="flex items-center flex-wrap">
              <label className="font-medium mr-4">1) VENTE:</label>
              <input
                type="checkbox"
                name="visiteEntreprise.vente"
                checked={formData.visiteEntreprise.vente}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">CONTRAT & INFO ATTACHÉ</label>
              <div className="flex items-center">
                <label className="mr-1">OUI</label>
                <input
                  type="radio"
                  name="visiteEntreprise.contratAttache"
                  value="oui"
                  checked={formData.visiteEntreprise.contratAttache === 'oui'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                
                <label className="mr-1">NON</label>
                <input
                  type="radio"
                  name="visiteEntreprise.contratAttache"
                  value="non"
                  checked={formData.visiteEntreprise.contratAttache === 'non'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="font-medium mr-4">2) RAPPEL REQUIS:</label>
              <input
                type="checkbox"
                name="visiteEntreprise.rappelRequis"
                checked={formData.visiteEntreprise.rappelRequis}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">DATE:</label>
              <input
                type="date"
                name="visiteEntreprise.rappelDate"
                value={formData.visiteEntreprise.rappelDate}
                onChange={handleInputChange}
                className="border p-2"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium w-64">3) PLUS INFORMATION REQUIS:</label>
              <input
                type="text"
                name="visiteEntreprise.plusInfoRequis"
                value={formData.visiteEntreprise.plusInfoRequis}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div className="flex items-center">
              <label className="font-medium mr-4">4) PAS INTERESSÉ:</label>
              <input
                type="checkbox"
                name="visiteEntreprise.pasInteresse"
                checked={formData.visiteEntreprise.pasInteresse}
                onChange={handleInputChange}
                className="mr-4"
              />
              
              <label className="font-medium mr-2">RAISON:</label>
              <input
                type="text"
                name="visiteEntreprise.pasInteresseRaison"
                value={formData.visiteEntreprise.pasInteresseRaison}
                onChange={handleInputChange}
                className="border p-2 flex-grow"
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">NOTES:</label>
              <textarea
                name="visiteEntrepriseNotes"
                value={formData.visiteEntrepriseNotes}
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
              <label className="font-medium block mb-2">REPRÉSENTANT DU TERRITOIRE:</label>
              {formData.representantSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.representantSignature} 
                    alt="Signature du Représentant" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, representantSignature: null})}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"
                  >
                    Supprimer
                  </button>
                </div>
              ) : (
                <div className="border p-4 text-center mb-2">
                  <p className="text-gray-500">Pas de signature téléchargée</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSignatureUpload(e, 'representantSignature')}
                className="block w-full text-sm"
              />
            </div>
            
            <div>
              <label className="font-medium block mb-2">DIRECTEUR:</label>
              {formData.directeurSignature ? (
                <div className="relative mb-2">
                  <img 
                    src={formData.directeurSignature} 
                    alt="Signature du Directeur" 
                    className="border h-24 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, directeurSignature: null})}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"
                  >
                    Supprimer
                  </button>
                </div>
              ) : (
                <div className="border p-4 text-center mb-2">
                  <p className="text-gray-500">Pas de signature téléchargée</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSignatureUpload(e, 'directeurSignature')}
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
            Imprimer
          </button>
          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaForm4Fr;