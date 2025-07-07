import LoginForm from "@/components/auth-forms/LoginForm";
import RegisterForm from "@/components/auth-forms/RegisterForm";
export default function AuthPage() {
  const handleLogin = (data) => console.log("Login:", data);
  const handleRegister = (data) => console.log("Register:", data);

  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-background shadow-md rounded-xl p-8">
          <h2 className="text-4xl font-extrabold mb-6">Login</h2>
          <LoginForm onSubmit={handleLogin} />
        </div>

        <div className="bg-background shadow-md rounded-xl p-8">
          <h2 className="text-4xl font-extrabold mb-6">Register</h2>
          <RegisterForm onSubmit={handleRegister} />
        </div>
      </div>
    </section>
  );
}
