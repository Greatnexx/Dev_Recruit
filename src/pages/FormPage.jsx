import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 0 && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is not valid';
      }
    }

    if (step === 2) {
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep = () => {
    if (validateStep()) {
      if (step < 2) {
        setStep(step + 1);
      } else {
        toast.success('Registration Successful');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep()) {
      const model = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      console.log('Form submitted successfully:', model);
      toast.success('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      setErrors({});
      setStep(0);
    }
  };

  return (
    <>
      <Link to="/" className="text-blue-700 mb-5 flex items-center px-4">
        <BiArrowBack className="mr-2" />
        Go back
      </Link>

      <h1 className="text-2xl md:text-4xl text-center mb-8">Multi-Step Form Wizard</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto shadow-md p-6 rounded bg-white"
      >
        {/* Step Indicator */}
        <div className="flex justify-center mb-6">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white mx-2 ${
                step === item ? 'bg-blue-700' : 'bg-gray-300'
              }`}
            >
              {item + 1}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {step === 0 && (
          <div className="py-4">
            <Input
              onChange={handleInputChange}
              type="text"
              size="lg"
              name="name"
              label="Name"
              value={formData.name}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
        )}

        {step === 1 && (
          <div className="py-4">
            <Input
              onChange={handleInputChange}
              type="text"
              size="lg"
              name="email"
              label="Email"
              value={formData.email}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
        )}

        {step === 2 && (
          <div className="py-4">
            <Input
              onChange={handleInputChange}
              type="password"
              size="lg"
              name="password"
              label="Password"
              value={formData.password}
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>
        )}

        <button
          type={step === 2 ? 'submit' : 'button'}
          onClick={handleStep}
          className="bg-blue-700 text-white py-2 px-6 mt-4 w-full hover:bg-blue-800 rounded"
        >
          {step === 0 || step === 1 ? 'Next' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default FormPage;
