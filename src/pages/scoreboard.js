import react, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';

function Gameplay() {

    const [reset, setReset] = useState([]);

    const advise = async () => {
        const response = await fetch('http://localhost:5000/game');
        const data = await response.json();
        const arr = await data.map((a) => [a.username,a.winrate]);
        return arr;
    }

    useEffect( () => {
        const arr = advise();
        arr.then((a) => setReset(a))
    }, []);


    const clickHandel = () => {
        const arr = advise();
        arr.then((a) => setReset(a))
    }

    return (
        <div>
            <h1>
                Score Board 
            </h1>
            <ul>
                {reset.map((list) => 
                    <li key ={list[0]}>
                        Username: {list[0]}<br/>
                        Winrate: {list[1]}
                    </li>
                )}
            </ul>
            
            <button onClick = {clickHandel}> Reload </button>
            <Link to = '/gameplay'> regame </Link>
            <Link to = '/'> Home </Link>

        </div>
        
    );
}

export default Gameplay;