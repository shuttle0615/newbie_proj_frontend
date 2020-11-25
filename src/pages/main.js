import react from 'react';
import {Link} from 'react-router-dom';
import './main.css'

function main() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to ='/gameplay'>
              Play
            <span></span><span></span><span></span><span></span>
            </Link>
          </li>
          <li>
            <Link to ='/scoreboard'>
              scoreboard
            <span></span><span></span><span></span><span></span>
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default main;