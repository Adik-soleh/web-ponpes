import { AuthInput } from "./input";

interface InputFormProps {
  label: string;
  type: string;
}
export function InputForm({ label, type }: InputFormProps) {
  return <AuthInput label={label} type={type} />;
}
