import { Avatar } from 'antd';
import React from 'react';
import profilePic from '../../assets/img/Logo/Profile-Pic.png';
function ProfileUser({titlePage}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ color: '#280559' }}>{titlePage}</h1>
            <div style={{ display: 'flex' }}>
                <Avatar src={profilePic} style={{ marginTop: '20px' }}></Avatar>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
                    <h2>Natalie Brogan</h2>
                    <p style={{ color: '#AAABAF', marginTop: '-15px' }}>Admin</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
