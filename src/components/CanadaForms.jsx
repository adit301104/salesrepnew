import React from "react";
import { Link } from "react-router-dom";

const Canada = () => {
  const forms = [
    {
      id: 1,
      title: "Auto Parts Checklist",
      linkEn: "/CaForm1",
      linkFr: "/CaForm1Fr"
    },
    {
      id: 2,
      title: "Auto Parts Introduction Contract",
      linkEn: "/CaForm2",
      linkFr: "/CaForm2Fr"
    },
    {
      id: 3,
      title: "Auto Parts Service Contract",
      linkEn: "/CaForm3",
      linkFr: "/CaForm3Fr"
    },
    {
      id: 4,
      title: "Client Contact Sheet",
      linkEn: "/CaForm4",
      linkFr: "/CaForm4Fr"
    },
    {
      id: 5,
      title: "Dealer Introduction Contract",
      linkEn: "/CaForm5",
      linkFr: "/CaForm5Fr"
    },
    {
      id: 6,
      title: "Dealer Service Contract",
      linkEn: "/CaForm6",
      linkFr: "/CaForm6Fr"
    },
    {
      id: 7,
      title: "Garage Checklist",
      linkEn: "/CaForm7",
      linkFr: "/CaForm7Fr"
    },
    {
      id: 8,
      title: "Garage Introduction Contract",
      linkEn: "/CaForm8",
      linkFr: "/CaForm8Fr"
    },
    {
      id: 9,
      title: "Garage Service Contract",
      linkEn: "/CaForm9",
      linkFr: "/CaForm9Fr"
    },
    {
      id: 10,
      title: "Interview Questions for Garages",
      linkEn: "/CaForm10",
      linkFr: "/CaForm10Fr"
    }
  ];

  const buttonStyle = {
    padding: "8px 18px",
    backgroundColor: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div>
      {forms.map((form) => (
        <div key={form.id} style={{ margin: "15px 0", padding: "15px", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}>
          <div style={{ marginBottom: "12px", textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>{form.id}. {form.title}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Link to={form.linkEn} style={{ textDecoration: "none" }}>
              <button style={buttonStyle}>
                English
              </button>
            </Link>
            <Link to={form.linkFr} style={{ textDecoration: "none" }}>
              <button style={buttonStyle}>
                French
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Canada;