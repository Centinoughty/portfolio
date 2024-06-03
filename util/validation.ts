export const isEmpty = (input: string): boolean => {
  return input.trim() === "";
};

export const isValidEmail = (input: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(input);
};
