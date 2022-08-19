
// import ToDo from './cc/toDo';
import { useState} from 'react'; 
import { useNavigate} from 'react-router-dom'
import Chip from '@mui/material/Chip';
import { Person,Fingerprint,Instagram,Facebook,Twitter,WhatsApp } from '@mui/icons-material'

 function Roomlogin() {
   const [uname,setInputn] =useState('');
   const [password,setInpute] =useState('');
   

   const navigate = useNavigate();
   const inputName=(e)=>{
      setInputn(e.target.value)
      }

      const inputEmail=(e)=>{
         setInpute(e.target.value)
         }
         
         const enterin=()=>{
           
             if(uname !== 'bookroom@123' ){
                         alert("Invalid user Name");
                     }
                     else if(password !== 'admin' ){
                        alert("Invalid user password");
                    }
               else {
                  navigate('/dasbord/firstpage');
                     }
                     setInputn('');
                     setInpute('');
            }

   

   return (
      <div className="App">
      <div className='loginte'>
      <img  src='https://www.roomstatushub.com/img/final-logo.png' alt='bg' style={{ width: '23%',
    position: 'absolute',
    marginTop: '31',
    marginLeft: '27' }}/>
      <div className='loginte1'>
      
   
   {/* <h1>Login</h1> */}
   <h4>welcome to<b style={{color:'tomato'}}> RoomStatusHUB</b></h4>
   <h2 style={{color:'#051358'}}>Sign in to start your session</h2>
   
   <Chip  style={{width: '10%',height: 42,backgroundColor: '#ef5800',position: 'absolute'}} />
    <Person style={{color: 'white' ,position: 'absolute' ,marginLeft: '6.5%',marginTop: 4,fontSize: 31}} />
   <input className='textviewl' value={uname} type="text" placeholder="Enter Your Name or mail" onChange={(e)=>{inputName(e)}}/>
   
   <Chip  style={{width: '10%',height: 43,backgroundColor: '#ef5800',position: 'absolute'}}  />
    <Fingerprint style={{color: 'white' ,position: 'absolute' ,marginLeft: '6.5%',marginTop: 6,fontSize: 31}} />
   <input className='textviewl' value={password} type="password" placeholder="Enter Your password" onChange={(e)=>{inputEmail(e)}}/>
   
   <button className='exbtn' onClick={()=>enterin()}>Login</button>
   {/* <Link to="/toDo" > <button onClick={()=>{enterin()}}>Login</button></Link> */}
   <ul style={{ display: 'flex',
        flexDirection: 'row',}}>
    <li style={{color: 'brown' ,marginLeft: 103}}><Instagram/></li>
    <li style={{color: '#002af7' ,marginLeft: 15}}><Twitter/></li>
    <li style={{color: '#140874' ,marginLeft: 15}}><Facebook/></li>
    <li style={{color: '#097c02' ,marginLeft: 15}}><WhatsApp/></li>
   </ul>
    
   </div>
 
    
</div>
   
</div>

   )

}


export default Roomlogin;