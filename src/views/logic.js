import {history} from '../history'
// const user = JSON.parse(localStorage.getItem("user"))
// const token = user && user.token
const baseurl = "http://142.93.152.229/ajo/api/"
const loginurl ="auth/login";
// const registerurl ="auth/register";
// const fetchGroup = "fetch_group?token="+token

  export const login = (email, password) =>{
    const requestOptions={
      method:"POST",
      body:JSON.stringify({email, password}),
      headers:{
        "Content-Type":"application/json",
        // "Authorization":"Bearer" +token
      }
    }
    fetch(baseurl+loginurl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      if(data.status){
        localStorage.setItem("user", JSON.stringify(data))
        history.push("/dashboard")
        console.log(data)
      }else{
        alert(data.message)
      }
    })
    .catch(err=>console.log(err))
  }


  export const logout = () =>{
    // localStorage.clear()
    history.push("/login")
  }