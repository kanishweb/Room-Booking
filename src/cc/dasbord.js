import { Outlet,useNavigate} from "react-router-dom";
// import ToDo from './toDo' ;

const Dasbord  = () => {

    const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li className="dsli"   onClick={() => navigate('/dasbord/firstpage')}>
            Home
          </li>
          <li className="dsli" onClick={() => navigate('/dasbord/toDo')}>
            Room Registration
          </li>
          <li className="dsli" onClick={() => navigate('/')}>
            Logout
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Dasbord;