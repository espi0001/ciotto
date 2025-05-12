import ProductGrid from "../../components/04-templates/ProductGrid";
import { getAllProducts } from "../../utils/supabase/api";

export default async function Products() {
  const productsRaw = await getAllProducts();
  // Map to the format expected by ProductGrid
  const products = (productsRaw || []).map((item) => ({
    id: item.id,
    image: Array.isArray(item.image) ? item.image[0] : typeof item.image === "string" && item.image.startsWith("[") ? JSON.parse(item.image)[0] : item.image,
    title: item.name || item.title,
    link: `/products/${item.id}`,
  }));
  return (
    <section className="px-section-mobile md:px-section">
      <article className="spacing-section-small md:spacing-section">
        <h1>Products</h1>
        <p>Handcrafted with precision and care, each product is a unique expression of craftsmanship and designed to bring beauty and function into everyday life. Explore the collection and find the perfect piece that speaks to you.</p>
      </article>
      <article className="spacing-section-small md:spacing-section">
        <ProductGrid products={products} />
      </article>
    </section>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// // import Image from "next/image";

// import ProductCard from "../../components/02-molecules/ProductCard";

// export default function CiottoList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://tgjjsvjkhezqddxxcfsb.supabase.co/rest/v1/ciotto?", {
//         headers: {
//           apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnampzdmpraGV6cWRkeHhjZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzI0ODcsImV4cCI6MjA2MTQwODQ4N30.WzP6rDDmHrGefYnSnyAuDqwbf1mmxEv6akc0abEZARE",
//           Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnampzdmpraGV6cWRkeHhjZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzI0ODcsImV4cCI6MjA2MTQwODQ4N30.WzP6rDDmHrGefYnSnyAuDqwbf1mmxEv6akc0abEZARE",
//         },
//       });
//       const fetchedData = await response.json();
//       const arrayData = Array.isArray(fetchedData) ? fetchedData : []; // safe fallback

//       const mappedData = arrayData.map((item) => ({
//         id: item.id,
//         name: item.name,
//         description: item.description,
//         dimension: item.dimension,
//         material: item.material,
//         color: item.color,
//         price: item.price,
//         size: item.size,
//         image: item.image,
//       }));
//       setData(mappedData);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Ciotto produkter</h1>
//       {/* <div className="grid grid-cols-3 gap-[8px]">
//         {data.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} alt={item.name} />
//             <h2 className="">{item.name}</h2>
//           </div>
//         ))}
//       </div> */}
//       <section className="grid grid-cols-3 gap-y-[60px] gap-x-[20px]">
//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>

//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>

//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>
//         <ProductCard></ProductCard>
//       </section>
//     </div>
//   );
// }
