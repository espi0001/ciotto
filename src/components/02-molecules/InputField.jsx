export default function InputField({ label, id, name, type = "text", textarea = false, rows = 4, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="uppercase mb-1">
        {label}
      </label>
      {textarea ? <textarea id={id} name={name} rows={rows} className="bg-black/60 border border-beige-100/50  py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors resize-none" value={value} onChange={onChange} /> : <input type={type} id={id} name={name} className="bg-black/60 border border-beige-100/50 py-1 px-2 focus:outline-none focus:border-secondary-text transition-colors" value={value} onChange={onChange} />}
    </div>
  );
}
