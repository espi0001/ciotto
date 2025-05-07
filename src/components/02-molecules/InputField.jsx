export default function InputField({ label, id, name, type = "text", textarea = false, rows = 4 }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="uppercase mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id} //
          name={name}
          rows={rows}
          className="bg-transparent border border-beige-100/50 rounded-xl py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          id={id} //
          name={name}
          className="bg-transparent border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors"
        />
      )}
    </div>
  );
}
