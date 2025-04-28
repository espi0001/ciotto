"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";

export default function CiottoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://tgjjsvjkhezqddxxcfsb.supabase.co/rest/v1/ciotto?", {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnampzdmpraGV6cWRkeHhjZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzI0ODcsImV4cCI6MjA2MTQwODQ4N30.WzP6rDDmHrGefYnSnyAuDqwbf1mmxEv6akc0abEZARE",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnampzdmpraGV6cWRkeHhjZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzI0ODcsImV4cCI6MjA2MTQwODQ4N30.WzP6rDDmHrGefYnSnyAuDqwbf1mmxEv6akc0abEZARE",
        },
      });
      const fetchedData = await response.json();
      const arrayData = Array.isArray(fetchedData) ? fetchedData : []; // safe fallback

      const mappedData = arrayData.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        dimension: item.dimension,
        material: item.material,
        color: item.color,
        price: item.price,
        size: item.size,
        image: item.image,
      }));
      setData(mappedData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ciotto produkter</h1>
      <div className="grid grid-cols-3 gap-[8px]">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2 className="">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
