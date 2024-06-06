import { forwardRef } from "react";

interface InputProps {
  isTextArea: boolean;
  label: string;
  id: string;
  placeholder: string;
  type?: string;
}
const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement,InputProps>(function Input(
  { isTextArea, label, type, ...props },
  ref
) {
  const inputStyles =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={props.id}
      >
        {label}
      </label>
      {!isTextArea && (
        <input ref={ref as React.Ref<HTMLInputElement>} className={inputStyles} type={type} {...props} />
      )}
      {isTextArea && <textarea ref={ref as React.Ref<HTMLTextAreaElement>} className={inputStyles} {...props} />}
    </p>
  );
});

export default Input;
