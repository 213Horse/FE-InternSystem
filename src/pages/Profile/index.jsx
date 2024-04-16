import React from 'react'
import { Grid } from "antd" 
import { Col, Row } from 'antd';
import { Avatar } from "antd";
import ProfilePic from "../../assets/img/Logo/Profile-Pic.png";
import { SearchOutlined} from '@ant-design/icons';
function Profile() {
  const styleCenter= {
    position: "absolute",
    top:"10%",
    left: "50%",
    height: "100px",
    // marginTeft: "-50px",
  }
  return (
    <div>
      <div style={{...styleCenter}}>
        <Row>
          <Col span={24}><Avatar src={ProfilePic}  size={120}/></Col>
          <Col span={24} style={{marginLeft:'-50px'}}><h2>Hello Natalie Brogan!</h2></Col>
          <Col span={24} style={{marginLeft:'-70px'}}><h2>nataliebrogan@gmail.com</h2></Col>
        </Row>
      </div>
      <div style={{marginTop:"300px", display:"flex", marginLeft:"80px"}}>
        <Row style={{background:"#D9D9D9", padding: "50px", width:"500px"}}>
          <Col span={24} style={{marginTop: '-15px', width:'20px'}}>
            <h2>Privacy & </h2>
            <h2>personalisation </h2>
          </Col>
          <Col span={24} style={{borderBottom:"1px solid #000"}}>
            <p>See the data in your Intern System
            Account and choose what activity 
            is saved, to personalise your experience</p>
          </Col>
          <Col span={24} style={{color:"#4889E9"}}>
            <h3>Manage your data and privacy</h3>
          </Col>
        </Row>
        <Row style={{background:"#D9D9D9", padding: "50px", margin:"0 50px", width:"500px"}}>
          <Col span={24} style={{marginTop: '-15px', width:'20px'}}>
            <h2>Security</h2>
            <h2>Recommendations </h2>
          </Col>
          <Col span={24} style={{borderBottom:"1px solid #000"}}>
            <p>Recommended actions found in the
              Security Check-Up</p>
          </Col>
          <Col span={24} style={{color:"#4889E9"}}>
            <h3>Protect your account</h3>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{background:"#D9D9D9", padding: "50px", margin:"50px 80px 0px"}}>
          <Col span={24} style={{marginTop: '-15px', width:'20px'}}>
            <h2>Privacy Check-Up </h2>
          </Col>
          <Col span={24} style={{borderBottom:"1px solid #000"}}>
            <p>Choose the privacy settings that are right for you with this step-
            by-step guide</p>
          </Col>
          <Col span={24} style={{color:"#4889E9"}}>
            <h3>Take Privacy Check-Up</h3>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{background:"#D9D9D9", padding: "50px", margin:"50px 80px 0px"}}>
          <Col span={24} style={{marginTop: '-15px', width:'20px'}}>
            <h2>What are you looking for? </h2>
          </Col>
          <Col span={24} style={{borderBottom:"1px solid #000"}}>
            <p><SearchOutlined />Search Intern System Account</p>
            <p style={{marginLeft:"14px"}}>See Help Options</p>
            <p style={{marginLeft:"14px"}}>Send Feedback</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Profile
