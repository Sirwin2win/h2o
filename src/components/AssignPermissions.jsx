
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchPermissions,
    fetchRolePermissions,
    fetchRoles,
    assignRolePermissions
} from '../features/auth/authSlice';

export const AssignPermissions = () => {

    const {
        PermStatus,
        permissions,
        error,
        rolesPermStatus,
        roles,
        rolesStatus,
        assignStatus,
        assignError,
        assignSuccess
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [selectedRole, setSelectedRole] = useState('');
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    // Fetch all permissions
    useEffect(() => {
        if (PermStatus === 'idle') {
            dispatch(fetchPermissions());
        }
    }, [PermStatus, dispatch]);

    // Fetch all roles
    useEffect(() => {
        if (rolesStatus === 'idle') {
            dispatch(fetchRoles());
        }
    }, [rolesStatus, dispatch]);

    // Fetch permissions whenever a role is selected
    useEffect(() => {

        if (!selectedRole) {
            setSelectedPermissions([]);
            return;
        }

        let active = true;

        setSelectedPermissions([]);

        dispatch(fetchRolePermissions(selectedRole))
            .unwrap()
            .then(result => {

                if (active) {
                    setSelectedPermissions(
                        result.map(permission => Number(permission.id))
                    );
                }

            })
            .catch(err => {
                if (active) {
                    console.error('Unable to fetch role permissions:', err);
                }
            });

        return () => {
            active = false;
        };

    }, [selectedRole, dispatch]);


    // Toggle individual permission
    const handlePermissionChange = (permissionId) => {

        setSelectedPermissions(prev => {

            if (prev.includes(permissionId)) {
                return prev.filter(id => id !== permissionId);
            }

            return [...prev, permissionId];

        });

    };


    // Select or deselect an entire category
    const handleCategoryChange = (categoryPermissions) => {

        const categoryIds = categoryPermissions.map(
            permission => Number(permission.id)
        );

        const allSelected = categoryIds.every(
            id => selectedPermissions.includes(id)
        );

        if (allSelected) {

            setSelectedPermissions(prev =>
                prev.filter(id => !categoryIds.includes(id))
            );

        } else {

            setSelectedPermissions(prev =>
                [...new Set([...prev, ...categoryIds])]
            );

        }

    };


    // Select or deselect all permissions
    const handleSelectAll = () => {

        if (selectedPermissions.length === permissions.length) {
            setSelectedPermissions([]);
        } else {
            setSelectedPermissions(
                permissions.map(permission => Number(permission.id))
            );
        }

    };


    // Group permissions by category
    const groupedPermissions = permissions.reduce(
        (groups, permission) => {

            const category = permission.name.split('.')[0];

            if (!groups[category]) {
                groups[category] = [];
            }

            groups[category].push(permission);

            return groups;

        },
        {}
    );


    // Save permissions
    const handleSavePermissions = async () => {

        if (!selectedRole) {
            return;
        }

        try {

            await dispatch(
                assignRolePermissions({
                    roleId: selectedRole,
                    permissionIds: selectedPermissions
                })
            ).unwrap();

            // Refresh permissions from database
            await dispatch(
                fetchRolePermissions(selectedRole)
            ).unwrap();

        } catch (err) {

            console.error('Permission assignment failed:', err);

        }

    };


    // Loading roles and permissions
    if (
        PermStatus === 'loading' ||
        rolesStatus === 'loading'
    ) {
        return <div className="p-5">Loading roles and permissions...</div>;
    }


    // Initial fetching errors
    if (error || rolesStatus === 'failed' || PermStatus === 'failed') {

        const message = error?.message || error || 'Unable to load data';

        return (
            <div className="text-red-500 p-5">
                Error: {message}
            </div>
        );

    }


    return (

        <div className="max-w-6xl mx-auto p-4">

            <h2 className="text-2xl font-bold mb-6">
                Assign Permissions To Roles
            </h2>


            {/* SELECT ROLE */}

            <div className="mb-6">

                <label className="block font-semibold mb-2">
                    Select Role
                </label>

                <select
                    value={selectedRole}
                    onChange={e => setSelectedRole(e.target.value)}
                    className="w-full border rounded-lg p-3 bg-white"
                >

                    <option value="">
                        -- Select a role --
                    </option>

                    {roles.map(role => (

                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>

                    ))}

                </select>

            </div>


            {/* PERMISSIONS */}

            {selectedRole && (

                <>

                    {rolesPermStatus === 'loading' ? (

                        <p className="py-5">Loading role permissions...</p>

                    ) : (

                        <>

                            {/* PERMISSION HEADER */}

                            <div className="flex flex-wrap justify-between items-center gap-3 mb-5">

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Available Permissions
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Select the permissions this role should have.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">

                                    <span className="text-sm font-medium">
                                        {selectedPermissions.length} / {permissions.length} selected
                                    </span>

                                    <button
                                        type="button"
                                        onClick={handleSelectAll}
                                        className="text-blue-600 text-sm font-semibold"
                                    >
                                        {selectedPermissions.length === permissions.length
                                            ? 'Deselect All'
                                            : 'Select All'}
                                    </button>

                                </div>

                            </div>


                            {/* PERMISSION GROUPS */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {Object.entries(groupedPermissions).map(
                                    ([category, categoryPermissions]) => {

                                        const allSelected =
                                            categoryPermissions.every(
                                                permission =>
                                                    selectedPermissions.includes(
                                                        Number(permission.id)
                                                    )
                                            );

                                        return (

                                            <div
                                                key={category}
                                                className="border rounded-lg p-4 shadow-sm"
                                            >

                                                {/* CATEGORY HEADER */}

                                                <div className="flex justify-between items-center border-b pb-3 mb-3">

                                                    <h4 className="font-bold capitalize">
                                                        {category}
                                                    </h4>

                                                    <label className="flex items-center gap-2 text-sm cursor-pointer">

                                                        <input
                                                            type="checkbox"
                                                            checked={allSelected}
                                                            onChange={() =>
                                                                handleCategoryChange(
                                                                    categoryPermissions
                                                                )
                                                            }
                                                        />

                                                        Select all

                                                    </label>

                                                </div>


                                                {/* INDIVIDUAL PERMISSIONS */}

                                                <div className="space-y-3">

                                                    {categoryPermissions.map(
                                                        permission => (

                                                            <label
                                                                key={permission.id}
                                                                className="flex items-start gap-3 cursor-pointer"
                                                            >

                                                                <input
                                                                    type="checkbox"
                                                                    className="mt-1"
                                                                    checked={selectedPermissions.includes(
                                                                        Number(permission.id)
                                                                    )}
                                                                    onChange={() =>
                                                                        handlePermissionChange(
                                                                            Number(permission.id)
                                                                        )
                                                                    }
                                                                />

                                                                <div>

                                                                    <p className="text-sm font-medium">
                                                                        {permission.name}
                                                                    </p>

                                                                    <p className="text-xs text-gray-500">
                                                                        {permission.description}
                                                                    </p>

                                                                </div>

                                                            </label>

                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        );

                                    }
                                )}

                            </div>


                            {/* SAVE BUTTON */}

                            <div className="mt-7 flex flex-wrap items-center gap-4">

                                <button
                                    type="button"
                                    onClick={handleSavePermissions}
                                    disabled={
                                        assignStatus === 'loading' ||
                                        rolesPermStatus === 'loading'
                                    }
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
                                >

                                    {assignStatus === 'loading'
                                        ? 'Saving...'
                                        : 'Save Permissions'}

                                </button>

                                {assignSuccess && (
                                    <p className="text-green-600 text-sm">
                                        Permissions assigned successfully!
                                    </p>
                                )}

                                {assignError && (
                                    <p className="text-red-500 text-sm">
                                        {typeof assignError === 'string'
                                            ? assignError
                                            : assignError.message}
                                    </p>
                                )}

                            </div>

                        </>

                    )}

                </>

            )}

        </div>

    );

};
