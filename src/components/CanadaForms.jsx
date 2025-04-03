import React from "react";
import { Link } from "react-router-dom";

const Canada = () => {
  const forms = [
    {
      id: 1,
      title: "Auto Parts Checklist",
      buttons: [
        { text: "English", link: "/CaForm1" },
        { text: "French", link: "/CaForm1Fr" }
      ]
    },
    {
      id: 2,
      title: "Auto Parts Introduction Contract",
      buttons: [
        { text: "English", link: "/CaForm2" },
        { text: "French", link: "/CaForm2Fr" }
      ]
    },
    {
      id: 3,
      title: "Auto Parts Service Contract",
      buttons: [
        { text: "English", link: "/CaForm3" },
        { text: "French", link: "/CaForm3Fr" }
      ]
    },
    {
      id: 4,
      title: "Client Contact Sheet",
      buttons: [
        { text: "English", link: "/CaForm4" },
        { text: "French", link: "/CaForm4Fr" }
      ]
    },
    {
      id: 5,
      title: "Dealer Introduction Contract",
      buttons: [
        { text: "English", link: "/CaForm5" },
        { text: "French", link: "/CaForm5Fr" }
      ]
    },
    {
      id: 6,
      title: "Dealer Service Contract",
      buttons: [
        { text: "English", link: "/CaForm6" },
        { text: "French", link: "/CaForm6Fr" }
      ]
    },
    {
      id: 7,
      title: "Garage Checklist",
      buttons: [
        { text: "English", link: "/CaForm7" },
        { text: "French", link: "/CaForm7Fr" }
      ]
    },
    {
      id: 8,
      title: "Garage Introduction Contract",
      buttons: [
        { text: "English", link: "/CaForm8" },
        { text: "French", link: "/CaForm8Fr" }
      ]
    },
    {
      id: 9,
      title: "Garage Service Contract",
      buttons: [
        { text: "English", link: "/CaForm9" },
        { text: "French", link: "/CaForm9Fr" }
      ]
    },
    {
      id: 10,
      title: "Interview Questions for Garages",
      buttons: [
        { text: "English", link: "/CaForm10" },
        { text: "French", link: "/CaForm10Fr" }
      ]
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {forms.map((form) => (
        <div key={form.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
            {form.id}. {form.title}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {form.buttons.map((button, index) => (
              <Link
                key={index}
                to={button.link}
                className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis text-center"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Canada;