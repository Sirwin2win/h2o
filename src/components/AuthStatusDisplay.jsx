import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; // Assuming you use Redux Toolkit
import { toast } from 'react-toastify';

function AuthStatusDisplay() {
  const { user, error, status } = useSelector(state => state.auth); // Access authSlice state

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (status=='succeeded') {
      toast.success(status, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [user, error, status]); // Re-run effect when these values change

  return null; // This component doesn't render anything visible directly
}

export default AuthStatusDisplay;