import React from "react";
import { Link } from "react-router-dom";

const Canada = () => {
  const forms = [
    {
      id: 1,
      title: "Auto Parts Checklist",
      link: "/CaForm1"
    },
    {
      id: 2,
      title: "Auto Parts Introduction Contract",
      link: "/CaForm2"
    },
    {
      id: 3,
      title: "Auto Parts Service Contract",
      link: "/CaForm3"
    },
    {
      id: 4,
      title: "Client Contact Sheet",
      link: "/CaForm4"
    },
    {
      id: 5,
      title: "Dealer Introduction Contract",
      link: "/CaForm5"
    },
    {
      id: 6,
      title: "Dealer Service Contract",
      link: "/CaForm6"
    },
    {
      id: 7,
      title: "Garage Checklist",
      link: "/CaForm7"
    },
    {
      id: 8,
      title: "Garage Introduction Contract",
      link: "/CaForm8"
    },
    {
      id: 9,
      title: "Garage Service Contract",
      link: "/CaForm9"
    },
    {
      id: 10,
      title: "Interview Questions for Garages",
      link: "/CaForm10"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {forms.map((form) => (
        <div key={form.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <Link
            to={form.link}
            className="block w-full"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 hover:text-[#4CAF50] transition-colors">
              {form.id}. {form.title}
            </h3>
            <div className="mt-2">
              <button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors text-center">
                Open Form
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Canada;