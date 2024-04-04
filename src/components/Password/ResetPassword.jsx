import { Form, Input, Button, message } from 'antd';
import React, { useState } from 'react'
import { callForgotPassWord } from '../../services/api';

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

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(email);
  const handleClick = async() => {
    try {
      setIsLoading(true);
      callForgotPassWord(email);
      message.success("Your password has been reset.Please check mail!!!");
      setIsLoading(false);
    } catch (error) {
      message.error(error);
    }
  }

  return (
    <div style={{ marginLeft: '16.375rem' }}>
      <h1 style={{color:"#4889E9"}}>Reset Your Password</h1>
      <p style={{color:"#667085"}}>Please provide the email address that you used when you signed up for your account. </p>

      <p>We will send you an email that will allow you to reset your password.</p>

      <Form name="form_item_path" layout="vertical" style={{marginTop:"2px"}}>
        <MyFormItemGroup prefix={['email']}>
          <MyFormItem name="email" label="Email" style={{borderRadius:'5px'}} >
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' />
          </MyFormItem>
      </MyFormItemGroup>

      <Button style={{background:"#4889E9", color:"#FFFFFF", paddingLeft:"0.5rem"}} onClick={() => handleClick()} loading={isLoading}>Reset password</Button>
    </Form>

    </div>
  )
}

export default ResetPassword
