import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'
import { updateMail } from '../features/mail/mailSlice';
import { useDispatch } from 'react-redux';


const ResetPassword = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  const navigate = useNavigate();
      const dispatch = useDispatch();
      const [formData, setFormData] = useState({
        password:"",
      });
      const { password } = formData;
    
    //   const { categories } = useSelector((state) => state.categories);
    // 
    const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // const fullName = `${user.firstName} ${user.lastName}`;
        const mail = {
         password,
         token
        };
        console.log(mail);
        dispatch(updateMail(mail));
        setFormData({
         password:""
        });
      };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div
                  className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                   {/* Header */}
                  <div className="text-center mb-8">
                    <img src={logo} alt='' className='my-5 mx-auto' />
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                      Please enter your registered email
                    </p>
                  </div>
                   {/* Form  */}
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700" htmlFor="password">New Password</label>
                      <input
                        type="password"
                        id="password"
                         onChange={handleChange}
                          name="password"
                        className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span>Change Password</span>
                    </button>
                  </form>
        
                </div>
              </div>
            </div>
  );
};

export default ResetPassword;
