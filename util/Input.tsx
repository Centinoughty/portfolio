import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  className: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, type, className },
  ref
) {
  return (
    <input
      placeholder={placeholder}
      required
      ref={ref}
      className={className}
      type={type}
    />
  );
});

export default Input;
