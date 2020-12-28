import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
  import {history} from '../history'
const baseurl = "http://142.93.152.229/ajo/api/"
const registerurl ="auth/register";

 const register =(first_name, last_name, middle_name,phone_no, email,password,password_confirmation) =>
  {    
    const requestOptions={
        method:"POST",
        body:JSON.stringify(first_name, last_name, middle_name, phone_no, email, password, password_confirmation),
        headers:{
          "Content-Type":"application/json",
        }
      }
    fetch(baseurl+registerurl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      if(data.status){
        history.push("/login")
      }else{
        alert(data.message)
      }
    })
    .catch(err=>{
        alert(err)
    })
  }


const Register = () => {

  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [middle_name, setMiddle_name] = useState("")
  const [phone_no, setPhone_no] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[password_confirmation, setPassword_confirmation] = useState("")

  const handleChange=(e)=>{
    const {name, value} = e.target
    if (name ==="first_name"){
      setFirst_name(value)
    }else if (name==="last_name"){
      setLast_name(value)
    }else if (name==="middle_name"){
      setMiddle_name(value)
    }else if (name==="phone_no"){
      setPhone_no(value)
    }else if (name==="email"){
      setEmail(value)
    }else if (name==="password"){
      setPassword(value)
    } else{
      setPassword_confirmation(value)
    }
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={first_name} type="text" placeholder="First-Name" name="first_name" required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={last_name} type="text" placeholder="Last-Name" name="last_name" required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={middle_name} type="text" placeholder="Middle-Name" name="middle_name" required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={phone_no} type="number" placeholder="Phone-Number" name="phone_no" required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={email} type="email" placeholder="Email" name="email" required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={password} type="password" placeholder="Password" name="password" required />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={handleChange} value={password_confirmation} type="password" placeholder="Confirm password" name="confirm_password" required />
                  </CInputGroup>
                  <CButton color="primary" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <p className="text-muted text-center">Already have an account?</p>
                <Link to ="/login">
                    <CButton color="primary" block>Login</CButton>
                </Link>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
