// import WorkCard from "../02-molecules/WorkCard";
// import PropTypes from "prop-types";

// const WorksGrid = ({ works = [] }) => {
//   if (!works || works.length === 0) {
//     return null;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 px-8 py-16">
//       {works.map((work, index) => (
//         <WorkCard key={work.id} image={work.image} title={work.title} link={work.link} number={index + 1} />
//       ))}
//     </div>
//   );
// };

// WorksGrid.propTypes = {
//   works: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     })
//   ),
// };

// WorksGrid.defaultProps = {
//   works: [],
// };

// export default WorksGrid;
