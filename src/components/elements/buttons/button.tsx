import { Button } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  onClcik?: () => void;
}
export function ButtonSubmit({ label, onClcik }: ButtonProps) {
  return (
    <Button type="submit" backgroundColor={"#32642d"} onClick={onClcik}>
      {label}
    </Button>
  );
}
