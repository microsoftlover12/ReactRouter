import react from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch

} from 'react-router-dom';

import boots from './Component/boots.js';
import footwear from './Component/footwear.js';
import shoes from './Component/shoes.js';



const category = () => {

    return (


        <>
            <Router>
                <ul>
                    <li>
                        <Link to="/shoes">Shoes</Link>
                    </li>
                    <li>
                        <Link to="/boots">Boots</Link>
                    </li>
                    <li>
                        <Link to="/footwear">Foot Wear</Link>
                    </li>
                    <switch>
                        <Route exact path='/shoes' component={shoes}></Route>
                        <Route exact path='/boots' component={boots}></Route>
                        <Route exact path='/footwear' component={footwear}></Route>
                    </switch>
                </ul>
            </Router>
        </>
    )

}

export default category;