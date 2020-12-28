import React, {useState} from 'react'
import {
    CBadge,
    CDataTable,
    CButton,
    CCollapse,
    CCardBody,
}
from '@coreui/react'

export default function  Table() {
         const usersData = [
    {id: 1, Name: 'Tunde West Taribo', email:'west@gmail.com', phone_numb:'09076843012', position:'1st', registered: '2020/01/01', role: 'Admin', status: 'Active'},
    {id: 2, Name: 'Aisha Bimpe Zulum', email:'zulumaisha@gmail.com', phone_numb:'08076673022', position:'2nd', registered: '2021/05/30', role: 'Member', status: 'Inactive'},
    {id: 3, Name: 'Lola Debby Kayode', email:'debby@gmail.com', phone_numb:'07032457801', position:'3rd', registered: '2020/9/04', role: 'Member', status: 'Inactive'},
    {id: 4, Name: 'Joseph Adeboye', email:'josephkunle7@gmail.com', phone_numb:'08097564312', position:'4th', registered: '2021/08/01', role: 'Member', status: 'Active'},
    {id: 5, Name: 'Agboola Tosin', email:'tosin154@yahoomail.com', phone_numb:'09087652314', position:'5th', registered:'2021/04/30', role:'Member', status:'Inactive'},
    {id: 6, Name:'Alade Tosin Daniel', email:'danieltosin@gmail.com', phone_numb:'09076543211', position:'6th', registered:'2021/09/17', role:'Member', status:'Inactive' },
    {id: 7, Name:'Omidiji Florence Abosede', email:'Abosede555@gmail.com', phone_numb:'08162134561', position:'7th', registered:'2021/07/03', role:'Member', status:'Inactive' },
    {id: 8, Name:'Danlad Philip', email:'Danlad@gmail.com', phone_numb:'07087906555', position:'8th', registered:'2021/01/31', role:'Member', status:'Active' },
    {id: 9, Name:'Lawal Hameedah', email:'Hameedahlawal@gmail.com', phone_numb:'09054667812', position:'9th', registered:'2020/12/30', role:'Member', status:'Active' },
    {id: 10, Name:'Banjo Funmilayo', email:'Funmiomowunmi@gmail.com', phone_numb:'07098673912', position:'10th', registered:'2020/06/12', role:'Member', status:'Active' },
  ]

  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  const fields = [
    { key: 'Name', _style: { width: '40%'} },
    'registered',
    { key: 'role', _style: { width: '20%'} },
    { key: 'status', _style: { width: '20%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status)=>{
    switch (status) {
      case 'Active': return 'success'
      case 'Pending': return 'warning'
      default: return 'primary'
    }
  }

  return (
    <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
    //   footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
    //   sorter
      pagination
      scopedSlots = {{
        'status':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.status)}>
                {item.status}
              </CBadge>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.name}
                  </h4>
                  <p className="text-muted"> Name:{item.Name}<br/> Email:{item.email} <br/> 
                  Phone_number:{item.phone_numb} <br/> position:{item.position}</p>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
  )
    }
