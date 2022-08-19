
// import ToDo from './cc/toDo';
import { useState} from 'react'; 
import { useNavigate} from 'react-router-dom'
import {Chip,Button,CircularProgress } from '@mui/material/';
import { Person,Fingerprint,Instagram,Facebook,Twitter,WhatsApp } from '@mui/icons-material'
import { Formik} from 'formik';
import * as Yup from "yup";

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
         
         const enterin=(values)=>{
           

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

const handleSubmit = ({ uname, password }, formikHelpers) => {
               // handle login
            };
   

   return (
      <div className="App">
      <div className='loginte'>
      <img  src='https://www.roomstatushub.com/img/final-logo.png' alt='bg' style={{ width: '23%',
    position: 'absolute',
    marginTop: '31',
    marginLeft: '27' }}/>

      <div className='loginte1'>
      
   <Formik
                            initialValues={enterin}
                            onSubmit={handleSubmit}
                            validationSchema={Yup.object().shape({
                                uname: Yup.string().required('Email is required').email('Should be a valid Email'),
                                password: Yup.string()
                                    .required('Password is required')
                                    .min(6, 'Passwword must be atleast 6 characters')
                            })}
                            >

                        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                                <form  onSubmit={handleSubmit} > 
   
   <h4>welcome to<b style={{color:'tomato'}}> RoomStatusHUB</b> </h4>
   <h2 style={{color:'#051358'}}>Sign in to start your session</h2>
   
   <Chip  style={{width: '10%',height: 42,backgroundColor: '#ef5800',position: 'absolute'}} />
    <Person style={{color: 'white' ,position: 'absolute' ,marginLeft: '6.5%',marginTop: 4,fontSize: 31}} />
   {/* <input className='textviewl' value={uname} type="text" placeholder="Enter Your Name or mail" onChange={(e)=>{inputName(e)}}/> */}
   
   <input className='textviewl' 
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                        value={values.uname}
                                        onChange={(e)=>{inputName(e)}}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        labeldisplay={true}
                                        labelValue="E-mail"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Your Name or mail"
                                        textalignment="left"
                                        size="small"
                                        margin="normal"
                                        fullWidth
                                        autoFocus
                                        
                                        /> 
  
   <Chip  style={{width: '10%',height: 43,backgroundColor: '#ef5800',position: 'absolute'}}  />
    <Fingerprint style={{color: 'white' ,position: 'absolute' ,marginLeft: '6.5%',marginTop: 6,fontSize: 31}} />
   {/* <input className='textviewl' value={password} type="password" placeholder="Enter Your password" onChange={(e)=>{inputEmail(e)}}/> */}
   
   <input className='textviewl'  
                                        error={Boolean(touched.password && errors.password)}
                                        helperText={touched.password && errors.password}
                                        value={values.password}
                                        onChange={(e)=>{inputEmail(e)}}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        labeldisplay={true}
                                        labelValue="Password"
                                        name="password"
                                        type={password}
                                        placeholder="Enter Your password"
                                        textalignment="left"
                                        size="small"
                                        margin="normal"
                                        fullWidth 

                                       />

   

   <button className='exbtn' onClick={()=>enterin(values)}>Login</button>
   {/* <Link to="/toDo" > <button onClick={()=>{enterin()}}>Login</button></Link> */}

                                    {/* {isSubmitting ? (
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <CircularProgress size={20} color="primary" />
                                        </div>
                                    ) : (
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            
                                            disabled={isSubmitting}
                                        >
                                            Login
                                        </Button>
                                    )} */}
                                    </form>
                            )}
                        </Formik>

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