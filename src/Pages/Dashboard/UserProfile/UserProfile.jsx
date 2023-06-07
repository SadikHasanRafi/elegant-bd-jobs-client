import 'react';
import { useContext } from 'react';
import { AuthUserRoleContext } from '../../../Contexts/authUserRoleContext';

const UserProfile = () => {
    const {currentUser,getUserType} = useContext(AuthUserRoleContext)
    console.log(currentUser?.uid)
    return (
        <div>
            <p>user profile</p>
        </div>
    );
};

export default UserProfile;