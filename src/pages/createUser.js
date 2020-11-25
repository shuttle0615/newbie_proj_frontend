import react, {useState} from 'react';

function CreateUser() {
  
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
    console.log(e.target.value);
  } 

  const Uchanged = (e) => {
    setUserinfo({
      username: e.target.value,
      password: userinfo.password
    });
    console.log(e.target.value);
  } 

  const sendRequest = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: userinfo.username,
        password: userinfo.password     })
    };

    const response = await fetch('http://localhost:5000/login/createUser', requestOptions)
    const data = await response.json()

    if(data.state === "false"){
      setlogstate(data.msg)
    }else{
      setlogstate(data.msg)
      window.location.replace("/gameplay")
    }
    
    
  }

  return (

    <div>

      <h1>
        Create User Page
      </h1>

      <form>
        <label htmlFor = "username">username:</label><br/>
        <input type = 'text' name="username" value = {userinfo.username} onChange = {Uchanged}/><br/>
        <label htmlFor = "password">password:</label><br/>
        <input type = 'text' name="password" value = {userinfo.password} onChange = {Pchanged}/><br/>
        <button onClick = {sendRequest}> login </button><br/>
      </form>

      <p>
        {logstate}
      </p>

    </div>

    
  );
}

export default CreateUser;