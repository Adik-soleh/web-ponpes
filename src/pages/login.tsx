import { LoginFragment } from "@/components/fragments/login";
import AuthLayouts from "@/components/layouts/authLayouts";

function LoginPage() {
  return (
    <AuthLayouts
      title="Login"
      link="/register"
      text="Belum Punya Akun ?"
      target="Register"
    >
      <form action="">
        <LoginFragment />
      </form>
    </AuthLayouts>
  );
}

export default LoginPage;
