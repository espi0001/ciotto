export default function InputField({ label, id, name, type = "text", textarea = false, rows = 4, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="uppercase mb-1">
        {label}
      </label>
      {textarea ? <textarea id={id} name={name} rows={rows} className="border border-secondary-text/80 py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors resize-none" value={value} onChange={onChange} placeholder={placeholder} /> : <input type={type} id={id} name={name} className="border border-secondary-text/80 pt-1 pb-2 px-2 focus:outline-none focus:border-secondary-text transition-colors" value={value} onChange={onChange} placeholder={placeholder} />}
    </div>
  );
}
