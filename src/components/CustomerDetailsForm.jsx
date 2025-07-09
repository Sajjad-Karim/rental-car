import { useState } from "react";

export default function CustomerDetailsForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: { month: "", day: "", year: "" },
    country: "",
    city: "",
    phone: "",
    email: "",
    comments: "",
    termsAccepted: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleDOBChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      dob: {
        ...prev.dob,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert("Please agree to the terms & conditions.");
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 text-sm bg-background text-foreground">
      <h2 className="text-2xl font-bold mb-6">Or Enter Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="space-y-4">
            <FormField
              label="First Name"
              required
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />

            <div>
              <label className="block font-medium mb-1">
                Date of Birth: <span className="text-destructive">*</span>
              </label>
              <div className="flex gap-2">
                <SelectField
                  options={[
                    "Month",
                    ...[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ],
                  ]}
                  value={form.dob.month}
                  onChange={(e) => handleDOBChange("month", e.target.value)}
                />
                <SelectField
                  options={[
                    "Day",
                    ...Array.from({ length: 31 }, (_, i) => i + 1),
                  ]}
                  value={form.dob.day}
                  onChange={(e) => handleDOBChange("day", e.target.value)}
                />
                <SelectField
                  options={[
                    "Year",
                    ...Array.from(
                      { length: 100 },
                      (_, i) => new Date().getFullYear() - i
                    ),
                  ]}
                  value={form.dob.year}
                  onChange={(e) => handleDOBChange("year", e.target.value)}
                />
              </div>
            </div>

            <FormField
              label="Country"
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />

            <FormField
              label="E-mail"
              required
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <div>
              <label className="block font-medium text-sm">Pay by:</label>
              <div className="text-muted-foreground text-xs mt-1 leading-relaxed">
                <strong>Pay at Pick-up</strong>
                <br />
                <em>“Cash Payment Only”, Credit Card Required</em>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <FormField
              label="Last Name"
              required
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />

            <FormField
              label="City"
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />

            <FormField
              label="Phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <div>
              <label className="block font-medium mb-1">
                Additional Comments
              </label>
              <textarea
                rows={4}
                value={form.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
                className="w-full border border-border bg-background rounded-2xl px-4 py-2 outline-none"
              />
            </div>

            <div className="pt-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-primary"
                  checked={form.termsAccepted}
                  onChange={(e) =>
                    handleChange("termsAccepted", e.target.checked)
                  }
                />
                <span className="text-sm">
                  I agree with the terms & conditions
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-foreground cursor-pointer text-background px-6 py-2 rounded-full font-semibold hover:bg-foreground/90 transition-colors"
          >
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}

function FormField({ label, required, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block font-medium mb-1">
        {label}: {required && <span className="text-destructive">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-border bg-background rounded-full px-4 py-2 outline-none"
      />
    </div>
  );
}

function SelectField({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      required
      className="flex-1 border border-border bg-background rounded-full px-3 py-2 text-sm outline-none"
    >
      {options.map((opt, idx) => (
        <option
          key={idx}
          value={opt === options[0] ? "" : opt}
          disabled={idx === 0}
        >
          {opt}
        </option>
      ))}
    </select>
  );
}
