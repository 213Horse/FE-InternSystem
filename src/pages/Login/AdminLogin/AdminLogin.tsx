import React, { useState } from 'react';
import Login from '..';
import Tabs from './Tabs';
type Props = {};

const AdminLogin: React.FC<{}> = ({}: Props) => {
    return (
        <Login>
            <div className="container mx-auto">
                <Tabs />
            </div>
        </Login>
    );
};

export default AdminLogin;
