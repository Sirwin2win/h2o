
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { updateMail } from "../features/mail/mailSlice";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { updateStatus, error } = useSelector(
    (state) => state.mails
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!token) {
      setMessage("Invalid or missing reset link.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      const result = await dispatch(
        updateMail({
          token,
          newPassword: password,
        })
      ).unwrap();

      setMessage(
        result.message || "Password reset successful."
      );
      setPassword("");

      // Navigate to login after a short delay if desired.
      navigate("/login", {
        state: {
          message: result.message || "Password reset successful.",
        },
      });
    } catch (err) {
      setMessage(
        err?.message ||
          err?.data?.message ||
          (typeof err === "string" ? err : null) ||
          "Unable to reset your password."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="my-5 mx-auto" />

            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Enter your new password below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                New Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                maxLength={72}
                required
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {message && (
              <p role="status" className="text-sm text-red-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={updateStatus === "loading" || !token}
              className="w-full flex justify-center py-2 px-4 sm:py-3 rounded-lg text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-50"
            >
              {updateStatus === "loading"
                ? "Updating..."
                : "Change Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
