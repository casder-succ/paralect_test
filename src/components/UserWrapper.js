import React from 'react';

const UserWrapper = ({loading, error, userInfo, userRepos}) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error...</h1>
    }

    return (
        <main>
            {userInfo.login}
        </main>
    );
};

export default UserWrapper;