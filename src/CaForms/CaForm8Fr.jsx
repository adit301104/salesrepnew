import React, { useState } from 'react';
import Logo2 from "../images/Logo2.png";

const CaForm8Fr = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    clientLegalName: '',
    doingBusinessAs: '',
    address: '',
    postalCode: '',
    owner: '',
    celNumber: '',
    businessTel: '',
    email: '',
    inBusinessSince: '',
    service: '',
    term: '',
    discount: '',
    datingSigned: '',
    dateDaySigned: '',
    dateMonthSigned: '',
    dateYearSigned: '',
    representativeSignature: null,
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
            <h1 className="text-2xl font-bold">GARAGE - CONTRAT DE SERVICE</h1>
            <img src={Logo2} alt="Logo de l'entreprise" className="h-16" />
          </div>

          <div className="mb-6">
            <div className="flex justify-end mb-2">
              <div className="w-1/2">
                <label htmlFor="accountNumber" className="block mb-1">Numéro de compte:</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="clientLegalName" className="block mb-1">1) Client Nom Légal:</label>
                <input
                  type="text"
                  id="clientLegalName"
                  name="clientLegalName"
                  value={formData.clientLegalName}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="doingBusinessAs" className="block mb-1">2) Opérant sous le nom:</label>
                <input
                  type="text"
                  id="doingBusinessAs"
                  name="doingBusinessAs"
                  value={formData.doingBusinessAs}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="address" className="block mb-1">3) Adresse:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
              <div className="md:w-1/3">
                <label htmlFor="postalCode" className="block mb-1">Code Post:</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="owner" className="block mb-1">4) Propriétaire:</label>
                <input
                  type="text"
                  id="owner"
                  name="owner"
                  value={formData.owner}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
              <div className="md:w-1/3">
                <label htmlFor="celNumber" className="block mb-1">Cellulaire:</label>
                <input
                  type="text"
                  id="celNumber"
                  name="celNumber"
                  value={formData.celNumber}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="businessTel" className="block mb-1">5) Entreprise Tel #:</label>
                <input
                  type="text"
                  id="businessTel"
                  name="businessTel"
                  value={formData.businessTel}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block mb-1">Courriel:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="inBusinessSince" className="block mb-1">6) En affaire depuis:</label>
                <input
                  type="text"
                  id="inBusinessSince"
                  name="inBusinessSince"
                  value={formData.inBusinessSince}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>
          </div>

          {/* Service, Term, Discount */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col">
              <label htmlFor="service" className="block mb-1">SERVICE:</label>
              <textarea
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                rows="2"
                className="w-full border p-2"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1">
                <label htmlFor="term" className="block mb-1">Terme:</label>
                <input
                  type="text"
                  id="term"
                  name="term"
                  value={formData.term}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="discount" className="block mb-1">Rabais:</label>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
            </div>
          </div>

          {/* General Provisions */}
          <div className="mb-8">
            <h3 className="font-bold mb-3">Clauses Contractuelles:</h3>
            <div className="space-y-3 text-sm">
              <p>1) La Corporation Autowiz est d'accord d'octroyer au client ci-haut nommé le code d'accès afin télécharger depuis www.autowizapp.com le logiciel de la plateforme automobile.</p>
              <p>2) Le client accepte de donner le rabais ci-haut mentionné à tous les clients d'Autowiz durant le terme de ce contrat.</p>
              <p>3) Le garage est d'accord de donner au client(s) d'Autowiz un service professionnel et courtois.</p>
              <p>4) Le garage et Autowiz sont d'accord et acceptent que tout client, vendeurs de pièces et/ou entreprise(s) ou autres introduit par un parti à l'autre demeure la propriété du parti faisant l'introduction.</p>
              <p>5) Toute transaction entre les parties doivent être complétés en utilisant la plateforme d'Autowiz sauf pour les paiements entre parties.</p>
              <p>6) Ce contrat se renouvelle automatiquement pour une durée équivalente sauf si le client ou Autowiz décide de ne pas renouveler ce contrat dans les 30 jours avant la fin de cette entente.</p>
            </div>
          </div>

          {/* Signature Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="datingSigned" className="block mb-1">Daté à:</label>
                <input
                  type="text"
                  id="datingSigned"
                  name="datingSigned"
                  value={formData.datingSigned}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                />
              </div>
              <div className="md:w-1/6">
                <label htmlFor="dateDaySigned" className="block mb-1">ce</label>
                <input
                  type="text"
                  id="dateDaySigned"
                  name="dateDaySigned"
                  value={formData.dateDaySigned}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                  placeholder="jour"
                />
              </div>
              <div className="md:w-1/4">
                <label htmlFor="dateMonthSigned" className="block mb-1">jour de</label>
                <input
                  type="text"
                  id="dateMonthSigned"
                  name="dateMonthSigned"
                  value={formData.dateMonthSigned}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                  placeholder="mois"
                />
              </div>
              <div className="md:w-1/6">
                <label htmlFor="dateYearSigned" className="block mb-1">, 20</label>
                <input
                  type="text"
                  id="dateYearSigned"
                  name="dateYearSigned"
                  value={formData.dateYearSigned}
                  onChange={handleInputChange}
                  className="w-full border p-2"
                  placeholder="AA"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                <label className="block font-bold mb-1">Signature du Licensier:</label>
                <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                  {formData.representativeSignature ? (
                    <img 
                      src={formData.representativeSignature} 
                      alt="Signature du Représentant" 
                      className="max-h-28" 
                    />
                  ) : (
                    <div className="text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleSignatureUpload(e, 'representativeSignature')}
                        className="mb-2"
                      />
                      <p className="text-sm text-gray-500">Télécharger signature</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="block font-bold mb-1">Signature du Client:</label>
                <div className="border p-2 h-32 flex items-center justify-center bg-gray-50">
                  {formData.vendorSignature ? (
                    <img 
                      src={formData.vendorSignature} 
                      alt="Signature du Client" 
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
                <p className="text-center text-sm mt-1">Je suis autorisé à signer pour l'entreprise</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm mb-6">
            <p>Canada, États-Unis, Tél: 613-282-5558, Web: www.autowizapp.com</p>
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
          <h1 className="text-2xl font-bold">GARAGE - CONTRAT DE SERVICE</h1>
          <img src={Logo2} alt="Logo de l'entreprise" className="h-16" />
        </div>

        <div className="mb-6 text-right">
          <p className="font-bold">Numéro de compte: <span className="font-normal">{formData.accountNumber}</span></p>
        </div>

        {/* Print version of client information */}
        <div className="space-y-4 mb-8">
          <p className="font-bold">1) Client Nom Légal: <span className="font-normal">{formData.clientLegalName}</span></p>
          <p className="font-bold">2) Opérant sous le nom: <span className="font-normal">{formData.doingBusinessAs}</span></p>
          <p className="font-bold">3) Adresse: <span className="font-normal">{formData.address}</span> Code Post: <span className="font-normal">{formData.postalCode}</span></p>
          <p className="font-bold">4) Propriétaire: <span className="font-normal">{formData.owner}</span> Cellulaire: <span className="font-normal">{formData.celNumber}</span></p>
          <p className="font-bold">5) Entreprise Tel #: <span className="font-normal">{formData.businessTel}</span> Courriel: <span className="font-normal">{formData.email}</span></p>
          <p className="font-bold">6) En affaire depuis: <span className="font-normal">{formData.inBusinessSince}</span></p>
        </div>

        {/* Print version of service, term, discount */}
        <div className="space-y-4 mb-8">
          <p className="font-bold">SERVICE: <span className="font-normal">{formData.service}</span></p>
          <p className="font-bold">Terme: <span className="font-normal">{formData.term}</span> Rabais: <span className="font-normal">{formData.discount}</span></p>
        </div>

        {/* Print version of General Provisions */}
        <div className="mb-8">
          <h3 className="font-bold mb-3">Clauses Contractuelles:</h3>
          <div className="space-y-3 text-sm">
            <p>1) La Corporation Autowiz est d'accord d'octroyer au client ci-haut nommé le code d'accès afin télécharger depuis www.autowizapp.com le logiciel de la plateforme automobile.</p>
            <p>2) Le client accepte de donner le rabais ci-haut mentionné à tous les clients d'Autowiz durant le terme de ce contrat.</p>
            <p>3) Le garage est d'accord de donner au client(s) d'Autowiz un service professionnel et courtois.</p>
            <p>4) Le garage et Autowiz sont d'accord et acceptent que tout client, vendeurs de pièces et/ou entreprise(s) ou autres introduit par un parti à l'autre demeure la propriété du parti faisant l'introduction.</p>
            <p>5) Toute transaction entre les parties doivent être complétés en utilisant la plateforme d'Autowiz sauf pour les paiements entre parties.</p>
            <p>6) Ce contrat se renouvelle automatiquement pour une durée équivalente sauf si le client ou Autowiz décide de ne pas renouveler ce contrat dans les 30 jours avant la fin de cette entente.</p>
          </div>
        </div>

        {/* Print version of signature section */}
        <div className="mb-8">
          <p>Daté à {formData.datingSigned} ce {formData.dateDaySigned} jour de {formData.dateMonthSigned}, 20{formData.dateYearSigned}</p>
          
          <div className="flex justify-between mt-4">
            <div>
              {formData.representativeSignature && (
                <img src={formData.representativeSignature} alt="Signature du Représentant" className="h-16" />
              )}
              <p className="mt-1 border-t border-black pt-1">Signature du Licensier</p>
            </div>
            <div>
              {formData.vendorSignature && (
                <img src={formData.vendorSignature} alt="Signature du Client" className="h-16" />
              )}
              <p className="mt-1 border-t border-black pt-1">Signature du Client</p>
              <p className="text-sm">Je suis autorisé à signer pour l'entreprise</p>
            </div>
          </div>
        </div>

        {/* Print version of footer */}
        <div className="text-center text-sm mb-6">
          <p>Canada, États-Unis, Tél: 613-282-5558, Web: www.autowizapp.com</p>
        </div>
      </div>
    </div>
  );
};

export default CaForm8Fr;