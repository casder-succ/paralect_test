import React from 'react';

const User = ({userInfo}) => {
    return (
        <div>
            {userInfo.login}
        </div>
    );
};

export default User;