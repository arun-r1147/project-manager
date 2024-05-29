import { FC } from "react";

interface InputProps {
  isTextArea: boolean;
  label: string;
  id: string;
  placeholder: string;
  type?: string;
}
export const Input: FC<InputProps> = ({
  isTextArea,
  label,
  type,
  ...props
}) => {
  const inputStyles =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-300 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="text-sm font-bold uppercase text-stone-500"
        htmlFor={props.id}
      >
        {label}
      </label>
      {!isTextArea && <input className={inputStyles} type={type} {...props} />}
      {isTextArea && <textarea className={inputStyles} {...props} />}
    </p>
  );
};
