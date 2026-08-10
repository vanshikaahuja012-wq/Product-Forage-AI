import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ======================================
  // HANDLE INPUT CHANGE
  // ======================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ======================================
  // NORMAL EMAIL/PASSWORD LOGIN
  // ======================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);

        alert("Login Successful!");

        window.location.href = "/";
      } else {
        alert(data.message || "Invalid Email or Password");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server Error");
    }
  };

  // ======================================
  // GOOGLE LOGIN
  // ======================================
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: credentialResponse.credential,
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);

        alert("Google Login Successful!");

        window.location.href = "/";
      } else {
        alert(data.message || "Google Login Failed");
      }
    } catch (err) {
      console.error("Google Login Error:", err);
      alert("Google Login Failed");
    }
  };

  // ======================================
  // GOOGLE LOGIN ERROR
  // ======================================
  const handleGoogleError = () => {
    console.error("Google Login Failed");
    alert("Google Login Failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">

      {/* Login Card */}
      <div className="w-full max-w-md">

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >

          {/* ======================================
              TITLE
          ====================================== */}
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Login
          </h2>

          {/* ======================================
              EMAIL
          ====================================== */}
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />

          {/* ======================================
              PASSWORD
          ====================================== */}
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />

          {/* ======================================
              LOGIN BUTTON
          ====================================== */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          {/* ======================================
              OR
          ====================================== */}
          <div className="flex items-center my-6">

            <div className="flex-1 border-t border-gray-300"></div>

            <span className="px-4 text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 border-t border-gray-300"></div>

          </div>

          {/* ======================================
              GOOGLE + GITHUB SIDE BY SIDE
          ====================================== */}
          <div className="flex gap-3">

            {/* GOOGLE */}
            <div className="flex-1 flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
              />
            </div>

          </div>

          {/* ======================================
              REGISTER
          ====================================== */}
          <p className="text-center text-gray-600 dark:text-gray-300 mt-7">

            Don't have an account?{" "}

            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </a>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;