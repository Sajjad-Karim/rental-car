import { useState } from "react";

export default function RegisterForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    setError("");
    onSubmit({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>

      <p className="text-sm text-muted-foreground">
        A link to set a new password will be sent to your email address.
      </p>

      <p className="text-xs text-muted-foreground">
        Your personal data will be used to support your experience on this
        website, to manage access to your account, and for other purposes
        described in our{" "}
        <span className="text-primary cursor-pointer underline">
          privacy policy
        </span>
        .
      </p>

      <button
        type="submit"
        className="w-full bg-primary cursor-pointer hover:bg-primary/90 transition text-white py-2 rounded-lg font-medium"
      >
        Register
      </button>
    </form>
  );
}
