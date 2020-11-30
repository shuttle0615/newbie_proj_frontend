import react, {useState} from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
  
    const [logstate, setlogstate] = useState("");

    const [userinfo , setUserinfo] = useState({
        username: "",
        password: 0
    });

    const Pchanged = (e) => {
        setUserinfo({
            username: userinfo.username,
            password: e.target.value
        });
        
    } 

    const Uchanged = (e) => {
        setUserinfo({
            username: e.target.value,
            password: userinfo.password
        });
        
    } 

    const sendRequest = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: userinfo.username,
                password: userinfo.password,
                winrate: props.winrate
                })
        }; 

        console.log("this happened")

        const response = await fetch('http://ssal.sparcs.org:56172/login/login', requestOptions)
        const data = await response.json()

        if(data.state === "false"){
            setlogstate(data.msg)
        }else{
            setlogstate(data.msg)
            window.location.replace(`/scoreboard`)
        }
        
        
    }

  return (

    

    <div>

        <h1>
            Login to update Your winrate!
        </h1>

        <form>
            <label htmlFor = "username">username:</label><br/>
            <input type = 'text' name="username" value = {userinfo.username} onChange = {Uchanged}/><br/>
            <label htmlFor = "password">password:</label><br/>
            <input type = 'text' name="password" value = {userinfo.password} onChange = {Pchanged}/><br/>
            <button onClick = {sendRequest}> login </button><br/>
        </form>

        <p>
            {logstate}<br/>
            If you don't have username, create one!<br/>
            <Link to="/createUser">Create User</Link>
        </p>

    </div>
    
  );
}

export default Login;