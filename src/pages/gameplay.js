import react, {useState , useEffect} from 'react';
import Login from './login'
import './gameplay.css'




function Gameplay() {

    const [userValue, setUservalue] = useState(0);
    const [value, setValue] = useState(0);

    const [refcont,setrefcont] = useState({
        winrate:0,
        wintime:0,
        losttime:0,
        streak:0,
        winflag:1
    })

    
    const onclick = (num) => {

        setUservalue(num);

        const kk = refcont;

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        setValue(getRandomInt(3));

        const won = (userValue === 0 && value === 1)||(userValue === 1 && value === 2)||(userValue === 2 && value === 0);
        const lost = (userValue === 1 && value === 0)||(userValue === 2 && value === 1)||(userValue === 0 && value === 2)
        
        if(won){
            //won
            kk.wintime = kk.wintime + kk.streak;

            if(kk.winflag === 1){
                kk.streak++;
            }else{
                kk.winflag = 1;
            }

        }else if(lost){
            //lost
            kk.losttime ++;
            kk.winflag = 0;
            kk.streak = 1;
        }else{
            //draw
            kk.winflag = 1;
        }
        
        if(kk.losttime != 0){
            kk.winrate = kk.wintime / kk.losttime;
        }else{
            kk.winrate = -1;
        }
        
        setrefcont(kk);

    };

    return (
        <div>
            <h1>
                Test Your Luck 
            </h1>

            <p> Computer's value:{value}</p>
            <p> Your value:{userValue}</p>
            <p> Win Rate: {refcont.winrate} </p>

            <button onClick = {() => onclick(0)}> Rock </button>
            <button onClick = {() => onclick(1)}> Scissor </button>
            <button onClick = {() => onclick(2)}> Paper </button>

            <Login winrate = {refcont.winrate}/>
        </div>
        
    );

}

export default Gameplay;