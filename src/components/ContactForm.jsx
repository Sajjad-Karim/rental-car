import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Enquiry Submitted:", [formData]);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section className="bg-muted py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm text-primary font-semibold tracking-wider">
            Mail Us
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
            Drop a Line
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            We'd love to hear from you! Fill in the form below and we'll get in
            touch shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className=" p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  placeholder=" "
                  className={`peer w-full border border-border bg-muted-foreground/20 rounded-lg px-4 pt-5 pb-2 text-foreground placeholder-transparent outline-none focus:ring-2 focus:ring-primary ${
                    errors[field] ? "border-red-500" : ""
                  }`}
                />
                <label
                  htmlFor={field}
                  className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground transition-all"
                >
                  {field === "name" ? "Your Name" : "Your Email"}
                </label>
                {errors[field] && (
                  <p className="text-xs text-red-600 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder=" "
              className={`peer w-full border border-border bg-muted-foreground/20 rounded-lg px-4 pt-5 pb-2 text-foreground placeholder-transparent outline-none focus:ring-2 focus:ring-primary ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground transition-all"
            >
              Phone Number
            </label>
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder=" "
              className={`peer w-full border border-border bg-muted-foreground/20 rounded-lg px-4 pt-5 pb-2 text-foreground placeholder-transparent outline-none resize-none focus:ring-2 focus:ring-primary ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground transition-all"
            >
              Message
            </label>
            {errors.message && (
              <p className="text-xs text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary cursor-pointer text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Send Enquiry
            </button>
            {submitted && (
              <p className="text-sm text-green-600 mt-2">
                Thanks! Your message has been sent.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
