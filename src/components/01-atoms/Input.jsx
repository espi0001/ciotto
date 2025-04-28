type InputProps = {
    label: string;
    name: string;
    type?: string;
};

export default function Input({ label, name, type = 'text' }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-semibold uppercase">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                required
                className="border p-2 shadow-sm focus:outline-none"
            />
        </div>
    );
}