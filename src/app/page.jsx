import React from "react";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <h2 className="text-3xl font-semibold mb-4">Velkommen til forsiden</h2>
      <p>Her kan du læse mere om vores projekt og hvad vi laver.</p>
    </div>
  );
}
