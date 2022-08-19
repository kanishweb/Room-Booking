import {useNavigate} from 'react-router-dom'


function Firstapge (){
    const navigate=useNavigate();
    return (
<div> 
<div className='listedfrist'>
<h1>Room Book For You</h1>
<hr/>
<p>Experienced team, wealth of knowledge, innovative products, economical, exceptional service, ease of use, adaptability, compliance, continuous improvements, customers focus are just few of the reasons why you should choose us.</p>
    <button className = "udlist1" onClick={() => navigate('/toDo')}>Add Rooms</button>
</div>
</div>
    )
}
export default Firstapge;