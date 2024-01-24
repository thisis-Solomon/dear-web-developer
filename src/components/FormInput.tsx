export default function FormInput({
  label,
  inputValue,
  ...props
}): JSX.Element {
  const inputStyles =
    "border border-stone-300 w-full text-lg py-2 px-1 rounded-md placeholder:text-sm";

  return (
    <div>
      <label className="block text-stone-400 p-0.5 mt-3" htmlFor="title">
        {label}
      </label>
      {label === "Title" ? (
        <input
          className={inputStyles}
          type="text"
          placeholder="Title"
          required
          ref={inputValue}
          {...props}
        />
      ) : (
        <textarea
          className={`${inputStyles}  h-[60vh]`}
          rows={5}
          placeholder="Content"
          required
          ref={inputValue}
          {...props}
        ></textarea>
      )}
    </div>
  );
}
