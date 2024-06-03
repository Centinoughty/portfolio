import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ placeholder, type }, ref) {
  return (
    <input
      placeholder={placeholder}
      required
      ref={ref}
      className="w-full pl-2 pb-1 bg-transparent border-b border-b-black focus:outline-none"
      type={type}
    />
  );
})

export default Input;