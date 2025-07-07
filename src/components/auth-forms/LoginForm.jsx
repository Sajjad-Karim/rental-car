import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.email) errs.email = "Email is required";
    if (!data.password) errs.password = "Password is required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full border border-border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="w-full border border-border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleChange}
          className="accent-primary"
        />
        <label htmlFor="remember" className="text-sm text-muted-foreground">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-primary hover:bg-primary/90 transition text-white py-2 rounded-lg font-medium"
      >
        Log In
      </button>

      <p className="text-sm text-center text-muted-foreground mt-2 hover:underline cursor-pointer">
        Lost your password?
      </p>
    </form>
  );
}
