import 'react';
import { useContext } from 'react';
import { AuthUserRoleContext } from '../../../Contexts/AuthUserContext';

const UserProfile = () => {
    const {currentUser} = useContext(AuthUserRoleContext)
    console.log(currentUser?.uid)
    return (
        <div>
            <p>user profile</p>
        </div>
    );
};

export default UserProfile;