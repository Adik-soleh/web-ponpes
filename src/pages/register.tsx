import { RegisterFragment } from "@/components/fragments/register";
import AuthLayouts from "@/components/layouts/authLayouts";

function RegisterPage() {
  return (
    <AuthLayouts title="Register" link="/login" text="Sudah Punya Akun?" target="Login">
      <form action="">
        <RegisterFragment />
      </form>
    </AuthLayouts>
  );
}

export default RegisterPage;
