"use client";

import React, { useState } from "react";
import { Car, User, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Role = "rider" | "captain";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const apiUrl = "http://localhost:8080/api";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") as Role | null;
  const [role, setRole] = useState<Role>(initialRole || "rider");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // -----------------------
  // Validate individual field
  // -----------------------
  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors };

    if (name === "email") {
      if (!value) newErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value))
        newErrors.email = "Invalid email format";
      else newErrors.email = "";
    }

    if (name === "password") {
      if (!value) newErrors.password = "Password is required";
      else if (value.length < 8)
        newErrors.password = "Password must be at least 8 characters";
      else if (/\s/.test(value))
        newErrors.password = "Password cannot contain spaces";
      else newErrors.password = "";
    }

    setErrors(newErrors);
  };

  // -----------------------
  // Input handler
  // -----------------------
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // -----------------------
  // Validate entire form
  // -----------------------
  const validateForm = () => {
    return (
      formData.email !== "" &&
      formData.password !== "" &&
      !errors.email &&
      !errors.password
    );
  };

  // -----------------------
  // Submit handler
  // -----------------------
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(`${apiUrl}/${role}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.status === 200) {
        localStorage.setItem(`${role}details`, JSON.stringify(result.data));
        resetForm();
        toast.success("Login successful!");
        router.push(`/${role}`);
      } else {
        toast.error(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({ email: "", password: "" });
    setErrors({ email: "", password: "" });
  };

  const switchRole = (newRole: Role) => {
    setRole(newRole);
    router.replace(`/login?role=${newRole}`);
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
            Welcome Back
          </h2>

          {/* Form */}
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  autoComplete="current-password"
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  }`}
                  placeholder="••••••••"
                />

                {/* Eye Icon */}
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

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-indigo-600 hover:text-indigo-700 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!validateForm()}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed mt-6 transition-all"
            >
              Sign In
            </button>
          </div>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href={`/signup?role=${role}`}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
