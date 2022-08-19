import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';


function ToDo() {
    const [invalue,setInvalue] = useState('');
    const [inmail,setInmail] = useState('');
    const [statuss] = useState(0);
    const [count, setCount]=useState(0);
    const [listed, setListed] = useState([]);

    const inputchange=(e)=>{
        setInvalue(e.target.value)
    }

    const inputmail =(e) =>{
        setInmail(e.target.value)
    }

    const add =(e) =>{
         e.preventDefault();
        setListed((oldData)=>{
            let tempre=[...oldData,{'id': listed.length + 1 ,'name':invalue,'mail':inmail,"packeage": count,"status": statuss}]
          
            return(tempre)
        
                    });

                    setInvalue('');
                    setInmail('');
    }

    const me = ()=>{
      setCount(count + 1 )
    }
    const me1 = ()=>{
      setCount(count - 1 )
    }
    const updated = (index) => {
        setListed((oldData) => {
          let temp = oldData;
          temp[index].status = 1; 
          return [...temp];
        });
      
      };
      const deleted = (index) => {
        listed.splice(index,1);
        setListed( [...listed]);
        
      };
      const navigate = useNavigate();
      

    return(
    <div className='listedfro1'>
<h3>To Do List</h3>
      <div>
        <input className='textview2' type='text' value={invalue} onChange={(e) => inputchange(e)}  placeholder='Enter your name'/><br/><br/>
        <input className='textview2' type='text' value={inmail} onChange={(e) => inputmail(e)}  placeholder='Enter your Email'/><br/><br/>
        <div className='pcounter12'>
      <h2>Rooms wanted:{count}</h2>
      <button onClick={me} style={{marginLeft:20}}>+</button>
      <button onClick={me1}  style={{marginLeft:20}}>-</button>
    </div>
        <button className='exbtn' onClick={add}>Add</button>
      </div>
      <div className='listedfro'>
        <ul>
        <h2 style={{position: 'absolute',marginTop:'-32px'}}>List of Result</h2>
        {listed.map((item,index) => {
            return (
            <li >
            <div style={{display:'flex',flexDirection: 'row'}}>
            <p>Name :&nbsp; &nbsp;{item.name}</p>&nbsp; &nbsp;
             <p>Email :&nbsp; &nbsp;{item.mail}</p>&nbsp; &nbsp;
             <p>Rooms wanted :&nbsp; &nbsp;{item.packeage}</p>&nbsp; &nbsp;
             <p>status :&nbsp; &nbsp;{item.status}</p>&nbsp; &nbsp;
             <button className = "udlist" onClick={() => updated(index)}>update</button>&nbsp; &nbsp;
             <button className = "dllist" onClick={() => deleted(index)}>Delet</button>&nbsp; &nbsp;
             <button className = "vwlist" onClick={() => navigate('/listpage', { state: item })}>view</button>
             </div>
             </li>
             );
          })}
        </ul>
      </div>

    </div>
);

}

export default ToDo;