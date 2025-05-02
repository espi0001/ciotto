import WorkCardSmall from "../../components/02-molecules/WorkCardSmall";
import WorkCardBig from "../../components/02-molecules/WorkCardBig";
import WorkCard from "../../components/02-molecules/WorkCard";

const works = [
  {
    id: "1",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/b7bfd55b-750d-400c-ade7-4ad928bd84a7/IMG_7701+2.jpg?format=2500w",
    title: "IO_JAPANESE_TEA",
    number: "001",
    link: "/products/1",
  },
  {
    id: "2",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/31827b8b-dbb4-4e3f-bf6a-573cf7fce901/87E4E34C-04F6-4C31-8BFF-32CA2A9856C1.jpg?format=2500w",
    title: "SHARP_GALLERY",
    number: "002",
    link: "/products/2",
  },
  {
    id: "3",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/2bb6df1a-0a1e-4460-a043-90754523f544/IMG_7700.jpg?format=2500w",
    title: "BEIT_SALMA",
    number: "003",
    link: "/products/3",
  },
  {
    id: "4",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/b020ba90-025d-4156-b148-f2835cd9d4ea/Andra+in.jpg?format=2500w",
    title: "ANDRA_EATERY",
    number: "004",
    link: "/products/4",
  },
  {
    id: "5",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/a5ca902e-89c7-427b-b8c0-36e724d1b04f/IMG_7629.jpg?format=2500w",
    title: "CC MUSEUM",
    number: "005",
    link: "/products/5",
  },
  {
    id: "6",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/f57a38ad-d73a-48db-b57e-4f2e655d0cdd/IMG_2344.jpeg?format=2500w",
    title: "OBERRA",
    number: "006",
    link: "/products/6",
  },
  {
    id: "7",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/02fc9133-f3ef-4fd5-9c8e-31f560781075/IMG_6277.JPG?format=2500w",
    title: "OFIA_SEGHAOU",
    number: "007",
    link: "/products/7",
  },
  {
    id: "8",
    image: "https://images.squarespace-cdn.com/content/v1/66747988c4481f654ec86537/c4486bc0-4f96-402c-92a7-31711cdeca14/LYFA_SS22_12.JPG?format=2500w",
    title: "OBJECTS",
    number: "008",
    link: "/products/8",
  },
];
const isLargeCard = (index) => [1, 2, 5, 6].includes(index);
// const works = [
//   {
//     id: "1",
//     image: "/works/001.jpg",
//     title: "Japanese Tea",
//     link: "/works/japanese-tea",
//   },
//   {
//     id: "2",
//     image: "/works/002.jpg",
//     title: "Sharp Gallery",
//     link: "/works/sharp-gallery",
//   },
//   {
//     id: "3",
//     image: "/works/003.jpg",
//     title: "Beit Salma",
//     link: "/works/beit-salma",
//   },
//   {
//     id: "4",
//     image: "/works/004.jpg",
//     title: "Angra Eatery",
//     link: "/works/angra-eatery",
//   },
//   {
//     id: "5",
//     image: "/works/005.jpg",
//     title: "Mengel",
//     link: "/works/mengel",
//   },
//   {
//     id: "6",
//     image: "/works/006.jpg",
//     title: "House of Nordic",
//     link: "/works/house-of-nordic",
//   },
//   {
//     id: "7",
//     image: "/works/007.jpg",
//     title: "Opa Seghkov",
//     link: "/works/opa-seghkov",
//   },
//   {
//     id: "8",
//     image: "/works/008.jpg",
//     title: "Dullens",
//     link: "/works/dullens",
//   },
// ];

export default function Home() {
  //   const isLargeCard = (index) => {
  //     // Pattern: small, big, big, small, small, big, big, small
  //     const largeCardIndexes = [1, 2, 5, 6];
  //     return largeCardIndexes.includes(index);
  //   };

  return (
    <section className="p-8">
      <article className="py-32">
        <h1>WORKS OF ARI PRASETYA</h1>
        <p>dignissim, cursus urna non, id Donec enim. Nam viverra sit dui. nibh eu enim. nec id dui vehicula, sed adipiscing tortor.</p>
      </article>

      <article className=" mx-auto px-4 flex flex-wrap justify-between gap-y-[2.5rem] md:gap-y-[11rem] gap-10 xl:grid xl:grid-cols-2">
        {works.map((work, index) => (
          <WorkCard
            key={work.id} //
            image={work.image}
            title={work.title}
            number={index + 1}
            link={work.link}
            size={isLargeCard(index) ? "big" : "small"}
          />
        ))}
        {/* {works.map((work, index) =>
        isLargeCard(index) ? (
          <WorkCardBig
            key={work.id}
            image={work.image} //
            title={work.title}
            number={index + 1}
            link={work.link}
          />
        ) : (
          <WorkCardSmall
            key={work.id} //
            image={work.image}
            title={work.title}
            number={index + 1}
            link={work.link}
          />
        )
      )} */}
      </article>
    </section>
  );
}
