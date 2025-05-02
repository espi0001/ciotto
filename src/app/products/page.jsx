import ProductGrid from "../../components/04-templates/ProductGrid";

const mockData = [
  {
    id: "1",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/gatti-ask(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2dhdHRpLWFzaygxKS5hdmlmIiwiaWF0IjoxNzQ1OTMwMTUwLCJleHAiOjE3Nzc0NjYxNTB9.pWRQ3atuyMb9kd8Iybm1tvGNLLwu1WIT12fJpnizbGo",
    title: "GATTI",
    link: "/products/1",
  },
  {
    id: "2",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/genno-black(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2dlbm5vLWJsYWNrKDEpLmF2aWYiLCJpYXQiOjE3NDU5MzAzMzAsImV4cCI6MTc3NzQ2NjMzMH0.SWzPgfR13uITUMuTWtMdnt8Z8EP2fpiKOGQMzwPOii8",
    title: "GENNO",
    link: "/products/2",
  },
  {
    id: "3",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/armmi(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2FybW1pKDEpLmF2aWYiLCJpYXQiOjE3NDU5MjkyNTIsImV4cCI6MTc3NzQ2NTI1Mn0._FQwpjGgbskZntJq_qC5FOaSNxh-YdLfjXGAHQDuS0o",
    title: "ARMMI",
    link: "/products/3",
  },
  {
    id: "4",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/borche(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2JvcmNoZSgxKS5hdmlmIiwiaWF0IjoxNzQ1OTI5NjQyLCJleHAiOjE3Nzc0NjU2NDJ9.0MfN10A7vgAcR_X26XfXWBahvx17TpPZp1kPBNsjeh4",
    title: "BORCHE",
    link: "/products/4",
  },
  {
    id: "5",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/plica-natural(2).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL3BsaWNhLW5hdHVyYWwoMikuYXZpZiIsImlhdCI6MTc0NTkzMDU1OCwiZXhwIjoxNzc3NDY2NTU4fQ.iZPnFxLvUVGt9fnnX3pdUMFoESvVYp4RjkdTuJ3UZYs",
    title: "PLICA",
    link: "/products/5",
  },
  {
    id: "6",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/toshi-brown(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL3Rvc2hpLWJyb3duKDEpLmF2aWYiLCJpYXQiOjE3NDU5MzA2MzYsImV4cCI6MTc3NzQ2NjYzNn0.EI8U4a6wDOaOo_stTarVIUnap__mvM2wiuRbUvkQMqw",
    title: "TOSHI",
    link: "/products/6",
  },
  {
    id: "7",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/ciotto-black(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2Npb3R0by1ibGFjaygxKS5hdmlmIiwiaWF0IjoxNzQ1OTI5ODMxLCJleHAiOjE3Nzc0NjU4MzF9.I_eeK1wYWJqqpM2gjo9a5oKKZWUSkCUX4FLN3ralwyc",
    title: "CIOTTO STONEWARE",
    link: "/products/7",
  },
  {
    id: "8",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/ciotto-silver(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2Npb3R0by1zaWx2ZXIoMSkuYXZpZiIsImlhdCI6MTc0NTkzMDA1NCwiZXhwIjoxNzc3NDY2MDU0fQ.cfGWqwKjHBX3bnhw5NqOlJ4chCxMNMKjAxfHN9PwJNk",
    title: "CIOTTO ALUMINIUM",
    link: "/products/8",
  },
  {
    id: "9",
    image: "https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/ciotto-images/ciotto-wood(1).avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJjaW90dG8taW1hZ2VzL2Npb3R0by13b29kKDEpLmF2aWYiLCJpYXQiOjE3NDU5MzAxMTksImV4cCI6MTc3NzQ2NjExOX0.q_gDMtVVoSlSsoC-4JfCeg7XUsTpOohzVEdrgGASckc",
    title: "CIOTTO WOOD",
    link: "/products/9",
  },
];

export default function Home() {
  return (
    <section className="p-8">
      <article className="py-32">
        <h1>Products</h1>
        <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
      </article>
      <article>
        <ProductGrid products={mockData} />
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
