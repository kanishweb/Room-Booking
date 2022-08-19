// import List from './cc/test';
import { useEffect,useState} from 'react'; 
import { useLocation}  from 'react-router-dom';


function Listpage(){

    const {state} = useLocation();
      
    const [list] =useState([state])


    useEffect(()=>{

        //  alert(JSON.stringify(list))
        // setList(state)
        
    },[])



    return(
<div >

    <h1>Result ID :&nbsp; &nbsp; {state.id}</h1>
    <ul>
        {list.map((item,index) => {

           

            return (
            <li className='listedfro2' >
            <div style={{display:'flex',flexDirection: 'row'}}>
            <p>Name :&nbsp; &nbsp;{item.name}</p>&nbsp; &nbsp;
             <p>Email :&nbsp; &nbsp;{item.mail}</p>&nbsp; &nbsp;
             <p>Rooms wanted :&nbsp; &nbsp;{item.packeage}</p>&nbsp; &nbsp;
             <p>status :&nbsp; &nbsp;{item.status}</p>&nbsp; &nbsp;
             
             
             </div>
             </li>
             );
          })}
        </ul>
</div>
    );

};

export default Listpage;