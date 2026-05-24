import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMe } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const { user, status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ "Onyekwa?": user });
  const handleDelete = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmed) return;

    try {
      await dispatch(deleteMe(user.id)).unwrap();

      navigate("/");

      alert("Account deleted successfully");
    } catch (error) {
      alert(error?.message || "Something went wrong");
    }
  };
  return (
    <div className="mx-10">
      <p className="text-center text-red-500 my-10 font-semibold">
        Kindly note that all data associated with your account will be deleted
        as well. If you agree to that, click the delete button below
      </p>
      <div className="flex justify-center mb-5">
        <button
          className="bg-red-500 text-white text-semibold p-5 rounded-lg"
          onClick={handleDelete}
        >
          Delete Me
        </button>
      </div>
    </div>
  );
};

export default Delete;
