
import React, { useEffect, useState } from 'react';

import logo from '../assets/images/logo.jpg';

import {
    fetchUsers,
    updateRole,
    fetchRoles
} from '../features/auth/authSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserRoleForm = () => {

    const {
        users,
        status,
        roles,
        rolesStatus,
        error
    } = useSelector(state => state.auth);

    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        id: '',
        role: ''
    });

    const [updating, setUpdating] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Fetch all roles
    useEffect(() => {

        if (rolesStatus === 'idle') {
            dispatch(fetchRoles());
        }

    }, [rolesStatus, dispatch]);


    // Fetch all users
    useEffect(() => {

        if (status === 'idle') {
            dispatch(fetchUsers());
        }

    }, [status, dispatch]);


    // Handle dropdown changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));

    };


    // Assign role to user
    const handleSubmit = async (e) => {

        e.preventDefault();

        setSubmitError('');

        if (!data.id || !data.role) {
            setSubmitError('Please select both a user and a role.');
            return;
        }

        const update = {
            id: data.id,
            role: data.role
        };

        try {

            setUpdating(true);

            await dispatch(updateRole(update)).unwrap();

            // navigate('/sidebar');

        } catch (err) {

            setSubmitError(
                err?.message || err || 'Unable to update user role'
            );

        } finally {

            setUpdating(false);

        }

    };


    // Loading
    if (status === 'loading' || rolesStatus === 'loading') {
        return <div className="p-5">Loading users and roles...</div>;
    }


    // Error
    if (status === 'failed' || rolesStatus === 'failed') {
        return (
            <div className="text-red-500 p-5">
                Error: {error?.message || error || 'Unable to load data'}
            </div>
        );
    }


    return (

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">

                    {/* Header */}

                    <div className="text-center mb-8">

                        <img
                            src={logo}
                            alt="Logo"
                            className="my-5 mx-auto w-24"
                        />

                        <h2 className="text-2xl font-bold text-gray-800">
                            Assign Role to User
                        </h2>

                        <p className="mt-2 text-sm text-gray-600">
                            Select a user and assign an appropriate role.
                        </p>

                    </div>


                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Select User */}

                        <div>

                            <label
                                htmlFor="id"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Select User
                            </label>

                            <select
                                id="id"
                                name="id"
                                value={data.id}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >

                                <option value="">
                                    -- Select User --
                                </option>

                                {users?.map(userItem => (

                                    <option
                                        key={userItem.id}
                                        value={userItem.id}
                                    >
                                        {userItem.name} ({userItem.email})
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* Select Role */}

                        <div>

                            <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Select Role
                            </label>

                            <select
                                id="role"
                                name="role"
                                value={data.role}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >

                                <option value="">
                                    -- Select Role --
                                </option>

                                {roles?.map(role => (

                                    <option
                                        key={role.id}
                                        value={role.id}
                                    >
                                        {role.name}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* Error message */}

                        {submitError && (

                            <p className="text-sm text-red-600">
                                {submitError}
                            </p>

                        )}


                        {/* Submit */}

                        <button
                            type="submit"
                            disabled={updating || !data.id || !data.role}
                            className="w-full flex justify-center py-3 px-4 rounded-lg text-white font-medium bg-blue-700 hover:bg-blue-800 disabled:opacity-50"
                        >

                            {updating ? 'Updating...' : 'Assign Role'}

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default UserRoleForm;
