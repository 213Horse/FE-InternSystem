import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
function Opt({otp, setOtp}) {
    
    return (
        <div>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{width: "112px", height: "100px", fontSize: "50px"}}
            />
        </div>
    );
}

export default Opt;
