"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignUpPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Sign up form submitted");
  };

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center px-4 py-6">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.6 }}
        className="w-full max-w-md bg-white/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-soft-card"
      >
        <div className="text-center mb-4 sm:mb-5">
          <svg
            className="mx-auto mb-2 sm:mb-3 h-10 w-10 sm:h-12 sm:w-12 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            ></path>
          </svg>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">Create Account</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Sign up to get started</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 sm:mb-4">
            <label
              className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-700 font-semibold"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label
              className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label
              className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-700 font-semibold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
              placeholder="Choose a username"
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label
              className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-700 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition pr-10 sm:pr-12"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1 text-indigo-500 hover:text-indigo-700 focus:outline-none"
              >
                {!passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.949 9.949 0 014.362-5.095m0 0A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.362 5.095m0 0l-3-3m3 3l3 3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="mb-3 sm:mb-4">
            <label
              className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-gray-700 font-semibold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition pr-10 sm:pr-12"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                tabIndex={-1}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1 text-indigo-500 hover:text-indigo-700 focus:outline-none"
              >
                {!confirmPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.949 9.949 0 014.362-5.095m0 0A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.362 5.095m0 0l-3-3m3 3l3 3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-3 sm:mb-4">
            <input
              id="terms"
              type="checkbox"
              required
              className="accent-indigo-500"
            />
            <label htmlFor="terms" className="ml-2 text-xs sm:text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 text-sm sm:text-base rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-soft-btn transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 sm:mt-5 text-center text-gray-500 text-xs sm:text-sm">
          Already have an account?{" "}
          <Link
            href="/"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
