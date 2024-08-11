import { Form, Input, Button, message, Flex } from 'antd';
import React, { useState } from 'react';
import { callForgotPassWord, callVerifyOpt } from '../../services/auth-api';
import { useForm } from 'antd/es/form/Form';
import Opt from '../OTP';
import ChangePassword from './ChangePassword';

const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};

function ResetPassword() {
    const [form] = useForm();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSwitch, setIsSwitch] = useState(false);
    const [view, setView] = useState('reset-password');
    const [otp, setOtp] = useState('');
    let content;
    console.log(email);
    const handleClick = async () => {
        try {
            setIsLoading(true);
            const res = await callForgotPassWord(email);
            console.log('res', res);
            if (res?.data?.code) {
                setIsSwitch(true);
            }
            message.success('Your password has been reset.Please check mail!!!');
            setIsLoading(false);
        } catch (error) {
            message.error(error);
        }
    };

    const handleOTP = async () => {
        try {
            setIsLoading(true);
            const res = await callVerifyOpt(email, otp);
            console.log('res:', res);
            if (res?.data?.statusCode == '201') {
                message.success('Your code is correct');
                setView('change-password');
            } else message.error('Your code is incorrect');
            setIsLoading(false);
        } catch (error) {
            message.error('Error: ' + error.message);
        }
    };

    switch (view) {
        case 'reset-password':
            content = (
                <div style={{ marginLeft: '16.375rem', width: '500px' }}>
                    {!isSwitch ? (
                        <>
                            <h1 style={{ color: '#4889E9' }}>Reset Your Password</h1>
                            <p style={{ color: '#667085' }}>
                                Please provide the email address that you used when you signed up for your account.{' '}
                            </p>

                            <p>We will send you an email that will allow you to reset your password.</p>

                            <Form name="form_item_path" layout="vertical" style={{ marginTop: '2px' }}>
                                <MyFormItemGroup prefix={['email']}>
                                    <MyFormItem name="email" label="Email" style={{ borderRadius: '5px' }}>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="abc@gmail.com"
                                        />
                                    </MyFormItem>
                                </MyFormItemGroup>

                                <Flex
                                    vertical
                                    gap="small"
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Button
                                        style={{ background: '#4889E9', color: '#FFFFFF', paddingLeft: '0.5rem' }}
                                        onClick={() => handleClick()}
                                        loading={isLoading}
                                    >
                                        Reset password
                                    </Button>
                                </Flex>
                            </Form>
                        </>
                    ) : (
                        <>
                            <h1 style={{ color: '#4889E9' }}>OTP Verification</h1>
                            <p style={{ color: '#667085' }}>
                                Enter the 4 digit verification code received on your Email ID.
                            </p>

                            <Opt otp={otp} setOtp={setOtp} />
                            <Flex
                                vertical
                                gap="small"
                                style={{
                                    width: '100%',
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: '#4889E9',
                                        color: '#FFFFFF',
                                        paddingLeft: '0.5rem',
                                        marginTop: '10px',
                                    }}
                                    onClick={() => handleOTP()}
                                    loading={isLoading}
                                >
                                    Verify
                                </Button>
                            </Flex>
                        </>
                    )}
                </div>
            );
            break;
        case 'change-password':
            content = <ChangePassword email={email} />;
            break;
    }
    return <>{content}</>;
}

export default ResetPassword;
