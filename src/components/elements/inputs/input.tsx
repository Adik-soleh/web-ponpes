import { Field } from "@/components/ui/field";
import { Input } from "@chakra-ui/react";

interface AuthInputProps {
  label: string;
  type: string;
}
export function AuthInput({ label, type }: AuthInputProps) {
  return (
    <>
      <Field label={label}>
        <Input type={type} />
      </Field>
    </>
  );
}
