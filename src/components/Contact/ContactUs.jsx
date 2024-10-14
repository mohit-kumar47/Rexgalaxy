import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate sending the form data to the server (replace with your actual API call)
      await sendFormDataToServer(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendFormDataToServer = async (formData) => {
    console.log("Sending form data:", formData);
    // Send form data to the server using fetch or your preferred HTTP client
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-blue-900 bg-opacity-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        {submitSuccess ? (
          <div className="text-green-600 font-bold mb-6">
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-2`}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-2`}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-2`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-lg mb-4">
                  Feel free to contact us via phone or email:
                </p>
                <p className="text-lg mb-4">Phone: 123-456-7890</p>
                <p className="text-lg mb-4">Email: info@example.com</p>
                <p className="text-lg mb-4">Address: 123 Main Street, City</p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
