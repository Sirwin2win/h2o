import {
    createContext,
    useContext,
    useMemo,
    useEffect,
    useCallback
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPermissions } from '../features/auth/authSlice';


const PermissionContext = createContext(null);

export const PermissionProvider = ({ children }) => {

    const dispatch = useDispatch();

    const { permissions = [], PermStatus } = useSelector(
        (state) => state.auth
    );

    // Fetch permissions automatically
    useEffect(() => {
        if (PermStatus === 'idle') {
            dispatch(fetchPermissions());
        }
    }, [PermStatus, dispatch]);

    // Check user permission
    const hasPermission = useCallback((permission) => {
        return permissions.includes(permission);
    }, [permissions]);

    const value = useMemo(() => ({
        permissions,
        hasPermission,
        loading: PermStatus === 'loading' || PermStatus === 'idle'
    }), [permissions, hasPermission, PermStatus]);

    return (
        <PermissionContext.Provider value={value}>
            {children}
        </PermissionContext.Provider>
    );
};

export const usePermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'usePermissions must be used within PermissionProvider'
        );
    }

    return context;
};