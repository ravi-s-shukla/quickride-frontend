"use client";
import React, { useState } from "react";
import { Car, User, Eye, EyeOff } from "lucide-react";
import InputField from "../../component/input-field";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Role = "rider" | "captain";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  vehicleModel?: string;
  plateNumber?: string;
}

interface RiderPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface CaptainPayload extends RiderPayload {
  vehicle: {
    model: string;
    plateNumber: string;
  };
}

const ApiUrl = "http://localhost:8080/api";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") as Role | null;
  const [role, setRole] = useState<Role>(initialRole || "rider");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    vehicleModel: "",
    plateNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Real-time validation logic
  const validateField = (name: string, value: string) => {
    let message = "";

    switch (name) {
      case "name":
        if (value.trim().length < 3)
          message = "Name must be at least 3 characters";
        break;

      case "email":
        if (/\s/.test(value)) message = "Email cannot contain spaces";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          message = "Invalid email format";
        break;

      case "phone":
        if (!/^\d{10}$/.test(value))
          message = "Phone must be a 10-digit number";
        break;

      case "password":
        if (/\s/.test(value)) message = "Password cannot contain spaces";
        else if (value.length < 8)
          message = "Password must be at least 8 characters";
        break;

      case "vehicleModel":
        if (role === "captain" && value.trim().length < 2)
          message = "Vehicle model is required";
        break;

      case "plateNumber":
        if (role === "captain" && value.trim().length < 3)
          message = "Plate number is required";
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateForm = (): boolean => {
    // If any validation errors exist → form is invalid
    const hasErrors = Object.values(errors).some(msg => msg);
  
    // Required fields based on role
    const requiredFields =
      role === "rider"
        ? ["name", "email", "phone", "password"]
        : ["name", "email", "phone", "password", "vehicleModel", "plateNumber"];
  
    // Check if any required field is empty
    const emptyFieldExists = requiredFields.some(
      (field) => !formData[field as keyof FormData]?.trim()
    );
  
    return !hasErrors && !emptyFieldExists;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const response = await apiCall();
    if (response.status === 201) {
      toast.success("Account created successfully! Please log in.");
      router.push(`/login?role=${role}`);
      resetForm();
    };
  }

  const apiCall = async () => {
    try {
      let url = "";
      let payload: RiderPayload | CaptainPayload;

      if (role === "rider") {
        // Remove vehicle fields
        const { plateNumber, vehicleModel, ...riderData } = formData;
        payload = riderData;
        url = `${ApiUrl}/${role}/register`;
      } else {
        // captain
        const { vehicleModel, plateNumber, ...riderData } = formData;
        payload = riderData;
        payload = {...payload, vehicle: {
          model: vehicleModel || "",
          plateNumber: plateNumber || "",
        }}
        url = `${ApiUrl}/${role}/register`;
      }

      console.log("API Request Payload:", payload);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.error("API Error:", error);
      return { success: false, message: "Something went wrong" };
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      vehicleModel: "",
      plateNumber: "",
    });
    setErrors({});
  };

  const switchRole = (newRole: Role) => {
    setRole(newRole);
    router.replace(`/signup?role=${newRole}`);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">QuickRide</h1>
          <p className="text-gray-600">Your journey, simplified</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Role Selector */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => switchRole("rider")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-all ${
                role === "rider"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User size={18} />
              Rider
            </button>

            <button
              onClick={() => switchRole("captain")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-all ${
                role === "captain"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Car size={18} />
              Captain
            </button>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name */}
            <InputField
              label="Full Name *"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              error={errors.name}
            />

            {/* Email */}
            <InputField
              label="Email *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              error={errors.email}
            />

            {/* Phone */}
            <InputField
              label="Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="9876543210"
              error={errors.phone}
            />

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Captain Fields */}
            {role === "captain" && (
              <>
                <InputField
                  label="Vehicle Model *"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="Honda City"
                  error={errors.vehicleModel}
                />

                <InputField
                  label="Plate Number *"
                  name="plateNumber"
                  value={formData.plateNumber}
                  onChange={handleInputChange}
                  placeholder="MH12 AB 1234"
                  error={errors.plateNumber}
                />
              </>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!validateForm()}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed mt-6 transition-all"
            >
              Create Account
            </button>
          </div>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href={`/login?role=${role}`} className="text-indigo-600 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
