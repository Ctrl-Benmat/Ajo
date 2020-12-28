import React, { Component } from 'react';
import Form from './addMemberForm';
import {
    CWidgetDropdown,
    CWidgetBrand,
    CRow,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CProgress,
      CButton,
      CModal,
      CModalHeader,
      CModalBody,
      CModalFooter,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
import { logout } from '../../views/logic';
// import { fetchAllGroup } from '../../views/logic';
 class Groups extends Component {
  constructor(props){
    super(props)
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user && user.token
    this.state={
      modal : false,
      // modals: false,
      allGroups:[],
      token
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleModals = this.handleModals.bind(this);
    // this.handleCloseModals = this.handleCloseModals.bind(this);
  } 

  componentDidMount(){
    this.fetchAllGroup()
  }

  fetchAllGroup =()=>{
    const requestOptions={
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          ...{"Authorization":"Bearer" +this.state.token}
        }
      }
    fetch("http://142.93.152.229/ajo/api/fetch_group", requestOptions)
    .then(async res=>{
      const data = await res.json()
      this.setState({allGroups:data})
      if(data.status_code===401){
        logout()
      }
      console.log(data)
        return data
    })
    .catch(err=>{
        console.log(err)
    })
  }

  handleModal() {
    this.setState({modal:true})
  }
  handleCloseModal() {
    this.setState({modal:false})
  }
  // handleModals(){
  //   this.setState({modals:true})
  // }
  // handleCloseModals(){
  //   this.setState({modals:false})
  // }
    render() {
      const{modal, allGroups}=this.state
      // const{modals}=this.state
        return (
          <div style={{width:"100%", height:"100%", backgroundColor:"rgb(255, 255, 255)"}}>
          <CRow>
            {allGroups.map(group=>{
              const {amount, no_of_members, group_name, id} = group
              return(
            <CCol sm="6" lg="3" key={id}>
              <CWidgetBrand
                color="warning"
                rightHeader={no_of_members.toString()}
                rightFooter= "Members"
                leftHeader={amount}
                leftFooter= "Amount"
                >
                  <CWidgetDropdown 
                  color="warning"
                  header={group_name}
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                            <CDropdownItem href="/membersDetails"> Details</CDropdownItem>
                        <CDropdownItem href="/manageMembers">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            )})}
          </CRow>
          <CModal
            show={modal}
            onClose={this.handleCloseModal}
          >
            <CModalHeader closeButton>Fill To Add A New Member</CModalHeader>
            <CModalBody>
              <Form />
            </CModalBody>
            <CModalFooter>
              <CButton color="primary">Submit</CButton>
              <CButton
                color="secondary"
                onClick={this.handleCloseModal}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>

              {/* <CModal
                show={modals}
                onClose={this.handleCloseModals}
              >
                <CModalHeader closeButton>Fill To Add A New Member</CModalHeader>
                <CModalBody>
                
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary">Submit</CButton>
                  <CButton
                    color="secondary"
                    onClick={this.handleCloseModals}
                  >Cancel</CButton>
                </CModalFooter>
              </CModal>
 */}

              </div>
              
        
        );
    }
}

export default Groups
