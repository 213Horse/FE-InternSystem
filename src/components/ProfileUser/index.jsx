import { Avatar } from 'antd';
import React from 'react';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
import { useSelector } from 'react-redux';
function ProfileUser({titlePage}) {
    const username = useSelector((state) => state.account.user.username);
    const role = useSelector((state) => state.account.user.role);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ color: '#280559' }}>{titlePage}</h1>
            <div style={{ display: 'flex' }}>
                <Avatar src={profilePic} style={{ marginTop: '20px' }}></Avatar>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
                    <h2>{username}</h2>
                    <p style={{ color: '#AAABAF', marginTop: '-15px' }}>{role}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
