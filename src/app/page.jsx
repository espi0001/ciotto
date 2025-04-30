import React from "react";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <video autoPlay muted loop className="object-cover">
        <source src="/video/testvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
