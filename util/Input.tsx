import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  className: string;
  type: string;
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, type, className, name },
  ref
) {
  return (
    <input
      placeholder={placeholder}
      required
      ref={ref}
      className={className}
      name={name}
      type={type}
    />
  );
});

export default Input;
