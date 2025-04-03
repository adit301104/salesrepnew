import React, { useState } from "react";
import { FaSignature } from "react-icons/fa";

const Data = () => {
  const [country, setCountry] = useState('CANADA');
  const [formType, setFormType] = useState('Autowiz garage service agreement(EN)');
  const [selectedSignature, setSelectedSignature] = useState(null);

  // Table column configuration
  const columns = [
    { key: 'accountNumber', header: 'A/c No.' },
    { key: 'clientLegalName', header: 'Client Legal Name' },
    { key: 'doingBusinessAs', header: 'Doing Business As' },
    { key: 'address', header: 'Address' },
    { key: 'postalCode', header: 'Postal Code' },
    { key: 'ownerName', header: 'Owner Name' },
    { key: 'email', header: 'Email' },
    { key: 'businessContact', header: 'Business Contact' },
    { key: 'cellNumber', header: 'Cell Number' },
    { key: 'businessTel', header: 'Business Tel.' },
    { key: 'inBusinessSince', header: 'In Business Since' },
    { key: 'serviceDetails', header: 'Service Details' },
    { key: 'monthlyInvoice', header: 'Monthly Invoice' },
    { key: 'monthlyWithdrawalDate', header: 'Withdrawal Date' },
    { key: 'term', header: 'Term' },
    { key: 'discount', header: 'Discount' },
    { key: 'progress', header: 'Progress' },
    { 
      key: 'clientSignature', 
      header: 'Client Signature',
      render: (value) => value ? (
        <button 
          onClick={() => setSelectedSignature({type: 'Client', img: value})}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaSignature className="mr-1" /> View
        </button>
      ) : <span className="text-gray-400">Not signed</span>
    },
    { 
      key: 'salesRepSignature', 
      header: 'Your Signature',
      render: (value) => value ? (
        <button 
          onClick={() => setSelectedSignature({type: 'Sales Rep', img: value})}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaSignature className="mr-1" /> View
        </button>
      ) : <span className="text-gray-400">Not signed</span>
    }
  ];

  // Sample data with all fields
  const tableData = [
    {
      accountNumber: '1001',
      clientLegalName: 'John Auto Services',
      doingBusinessAs: 'John\'s Garage',
      address: '123 Main St, Toronto',
      postalCode: 'M5V 2H1',
      ownerName: 'John Smith',
      email: 'john@garage.com',
      businessContact: 'Manager: Sarah Wilson',
      cellNumber: '(416) 555-1234',
      businessTel: '(416) 555-5678',
      inBusinessSince: '2015',
      serviceDetails: 'Oil Change, Brake Service',
      monthlyInvoice: '$1,200.00',
      monthlyWithdrawalDate: '15th',
      term: '12 months',
      discount: '5%',
      progress: 'Active',
      clientSignature: '/signatures/client1.png',
      salesRepSignature: '/signatures/rep1.png'
    },
    {
      accountNumber: '1002',
      clientLegalName: 'Toronto Auto Care Inc.',
      doingBusinessAs: 'Toronto Auto',
      address: '456 Queen St W, Toronto',
      postalCode: 'M5V 1T1',
      ownerName: 'Sarah Johnson',
      email: 'sarah@torontoauto.ca',
      businessContact: 'Owner',
      cellNumber: '(647) 555-7890',
      businessTel: '(416) 555-3456',
      inBusinessSince: '2018',
      serviceDetails: 'Full Service',
      monthlyInvoice: '$2,500.00',
      monthlyWithdrawalDate: '1st',
      term: '24 months',
      discount: '10%',
      progress: 'Pending',
      clientSignature: null,
      salesRepSignature: '/signatures/rep2.png'
    },
    {
      accountNumber: '1003',
      clientLegalName: 'Canadian Tire Auto Service',
      doingBusinessAs: 'Canadian Tire',
      address: '789 Yonge St, Toronto',
      postalCode: 'M4W 2G8',
      ownerName: 'Michael Brown',
      email: 'michael@cantire.com',
      businessContact: 'Service Manager',
      cellNumber: '(416) 555-9012',
      businessTel: '(416) 555-6789',
      inBusinessSince: '2010',
      serviceDetails: 'Tire Services',
      monthlyInvoice: '$3,000.00',
      monthlyWithdrawalDate: '5th',
      term: '36 months',
      discount: '15%',
      progress: 'Completed',
      clientSignature: '/signatures/client3.png',
      salesRepSignature: null
    }
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto">
      {/* Signature Modal */}
      {selectedSignature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-bold">{selectedSignature.type} Signature</h3>
              <button 
                onClick={() => setSelectedSignature(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex justify-center">
                <img 
                  src={selectedSignature.img} 
                  alt={`${selectedSignature.type} signature`} 
                  className="max-h-64 max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-center text-sm text-gray-500 rounded-b-lg">
              {selectedSignature.type} signed document
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Select Country</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>CANADA</option>
              <option>USA</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700">Select Form</label>
            <div className="flex gap-2">
              <select 
                className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
              >
                <option>Autowiz garage service agreement(EN)</option>
                <option>Autowiz garage service agreement(FR)</option>
                <option>Other Form</option>
              </select>
              <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium px-4 py-2 rounded transition-colors">
                Show
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6 pb-0">
          <h2 className="text-xl font-semibold text-gray-800">Client Information</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th 
                    key={column.key} 
                    className="border-b border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {columns.map((column) => (
                    <td 
                      key={`${rowIndex}-${column.key}`} 
                      className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-b border-gray-200"
                    >
                      {column.render ? column.render(row[column.key]) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded transition-colors">
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Showing 1 to {tableData.length} of {tableData.length} entries
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default Data;