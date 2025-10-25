"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [eyeballCx, setEyeballCx] = useState(12);
  const [eyeballCy, setEyeballCy] = useState(12);
  const [eyelidOpacity, setEyelidOpacity] = useState(0);
  const [telescopeLensOpacity, setTelescopeLensOpacity] = useState(1);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const blinkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Make the eye look toward the username field when active
  const handleUsernameFocus = () => {
    setEyeballCy(9);
    setEyeballCx(12);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const len = e.target.value.length;
    const minCx = 10;
    const maxCx = 14;
    const maxLen = 16;
    const offset = (Math.min(len, maxLen) / maxLen) * (maxCx - minCx);
    setEyeballCx(minCx + offset);
    setEyeballCy(9);
  };

  const handleUsernameBlur = () => {
    setEyeballCy(12);
    if (!passwordInputRef.current || !passwordInputRef.current.value.length) {
      setEyeballCx(12);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle password input - move eyeball as user types
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const len = e.target.value.length;
    const startCx = 12;
    const targetCx = 6;
    const maxLen = 12;
    const progress = Math.min(len, maxLen) / maxLen;
    const easedProgress = 1 - Math.pow(1 - progress, 1.5); // ease-out for quicker response
    const offset = easedProgress * (startCx - targetCx);
    setEyeballCx(startCx - offset);
    setEyeballCy(12);
  };

  // Reset eyeball position when input loses focus and is empty
  const handlePasswordBlur = () => {
    if (passwordInputRef.current && !passwordInputRef.current.value.length) {
      setEyeballCx(12);
    }
    setEyeballCy(12);
  };

  const handlePasswordFocus = () => {
    setEyeballCy(12);
  };

  // Blinking animation for eye
  const blink = () => {
    // Close eyelid quickly
    setEyelidOpacity(1);
    setTimeout(() => {
      // Open eyelid
      setEyelidOpacity(0);
      scheduleNextBlink();
    }, 160 + Math.random() * 60); // Eyelid closed for 160-220ms (natural blink)
  };

  // Blinking animation for telescope lenses
  const blinkTelescope = () => {
    // Dim lenses quickly
    setTelescopeLensOpacity(0.2);
    setTimeout(() => {
      // Restore lenses
      setTelescopeLensOpacity(1);
      scheduleNextBlink();
    }, 160 + Math.random() * 60); // Lens dims for 160-220ms (natural blink)
  };

  const scheduleNextBlink = () => {
    const interval = 2000; // Blink every 2 seconds
    blinkTimeoutRef.current = setTimeout(() => {
      if (!passwordVisible) {
        blink(); // Blink eye when password is hidden
      } else {
        blinkTelescope(); // Blink telescope lenses when password is visible
      }
    }, interval);
  };

  // Start blinking animation on mount
  useEffect(() => {
    scheduleNextBlink();
    return () => {
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordVisible]);

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center px-4 py-6">
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.6 }}
        className="w-full max-w-md bg-white/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:pt-12 md:px-10 md:pb-12 shadow-soft-card"
      >
        <div className="text-center mb-8">
          <svg
            className="mx-auto mb-3 sm:mb-4 h-12 w-12 sm:h-14 sm:w-14 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 7.5v-1A4.5 4.5 0 008 6.5v1m8.5 10.5h-9A2.5 2.5 0 015 15.5v-7A2.5 2.5 0 017.5 6h9A2.5 2.5 0 0119 8.5v7a2.5 2.5 0 01-2.5 2.5z"
            ></path>
          </svg>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1">Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label
              className="block mb-2 text-sm sm:text-base text-gray-700 font-semibold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
              onChange={handleUsernameChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-2">
            <label
              className="block mb-2 text-sm sm:text-base text-gray-700 font-semibold"
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
                ref={passwordInputRef}
                onFocus={handlePasswordFocus}
                onChange={handlePasswordInput}
                onBlur={handlePasswordBlur}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 transition pr-10 sm:pr-12"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
                className="absolute right-2 sm:right-3 md:right-4 lg:right-5 xl:right-6 top-1/2 -translate-y-1/2 p-1 text-indigo-500 hover:text-indigo-700 transition cursor-pointer"
              >
                {/* Eye Open (password hidden) */}
                {!passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M1.458 12C2.732 7.943 6.522 5 12 5c5.478 0 9.268 2.943 10.542 7-1.274 4.057-5.064 7-10.542 7-5.478 0-9.268-2.943-10.542-7z"
                    />
                    <circle
                      cx={eyeballCx}
                      cy={eyeballCy}
                      r="3"
                      strokeWidth="1.7"
                      stroke="currentColor"
                      fill="currentColor"
                      style={{
                        transition: "cx 150ms ease-out, cy 120ms ease-out",
                      }}
                    />
                    {/* Blinking eyelid */}
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="4.5"
                      ry="2.8"
                      fill="white"
                      style={{
                        opacity: eyelidOpacity,
                        pointerEvents: "none",
                        transition:
                          eyelidOpacity === 1
                            ? "opacity 60ms"
                            : "opacity 120ms",
                      }}
                    />
                  </svg>
                )}
                {/* Binoculars (show password) */}
                {passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Left lens */}
                    <circle
                      cx="8"
                      cy="12"
                      r="4"
                      strokeWidth="1.7"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <circle
                      cx="8"
                      cy="12"
                      r="4"
                      strokeWidth="1.7"
                      fill="none"
                    />
                    {/* Right lens */}
                    <circle
                      cx="16"
                      cy="12"
                      r="4"
                      strokeWidth="1.7"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <circle
                      cx="16"
                      cy="12"
                      r="4"
                      strokeWidth="1.7"
                      fill="none"
                    />
                    {/* Bridge connecting the lenses */}
                    <line
                      x1="10"
                      y1="10"
                      x2="14"
                      y2="10"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    {/* Left lens glass - blinking element */}
                    <circle
                      cx="8"
                      cy="12"
                      r="2.5"
                      fill="currentColor"
                      opacity={telescopeLensOpacity * 0.35}
                      style={{
                        transition:
                          telescopeLensOpacity < 1
                            ? "opacity 60ms"
                            : "opacity 120ms",
                      }}
                    />
                    {/* Right lens glass - blinking element */}
                    <circle
                      cx="16"
                      cy="12"
                      r="2.5"
                      fill="currentColor"
                      opacity={telescopeLensOpacity * 0.35}
                      style={{
                        transition:
                          telescopeLensOpacity < 1
                            ? "opacity 60ms"
                            : "opacity 120ms",
                      }}
                    />
                    {/* Left lens reflection - animated */}
                    <circle
                      cx="7.2"
                      cy="11"
                      r="1"
                      fill="white"
                      opacity={telescopeLensOpacity * 0.9}
                      style={{
                        transition:
                          telescopeLensOpacity < 1
                            ? "opacity 60ms"
                            : "opacity 120ms",
                      }}
                    />
                    {/* Right lens reflection - animated */}
                    <circle
                      cx="15.2"
                      cy="11"
                      r="1"
                      fill="white"
                      opacity={telescopeLensOpacity * 0.9}
                      style={{
                        transition:
                          telescopeLensOpacity < 1
                            ? "opacity 60ms"
                            : "opacity 120ms",
                      }}
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
            <div>
              <input
                id="remember"
                type="checkbox"
                className="accent-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 text-xs sm:text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-xs sm:text-sm text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-soft-btn transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
