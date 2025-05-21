export default function OpeningHours({ days, hours }) {
  return (
    <div className="flex justify-between gap-4 mb-2">
      <p className="">{days}</p>
      <p className="">{hours}</p>
    </div>
  );
}
