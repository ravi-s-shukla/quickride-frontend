/** Reusable Input Component **/
export default function InputField({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder={placeholder}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
  