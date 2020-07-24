import react from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch

} from 'react-router-dom';
import nike from './Component/nike.js';
import polo from './Component/polo.js';
import addidas from './Component/addidas.js';
import leecooper from './Component/leecooper.js';


const products = () => {

    return (


        <>
            <h1>products</h1>
            <ul>
                <li>

                    <Link to="/nike">NIKE Liteforce Blue Sneakers</Link>
                </li>
                <li>
                    <Link to="/polo">U.S. POLO ASSN. Slippers</Link>
                </li>
                <li>
                    <Link to="/addidas">ADIDAS Adispree Running Shoes</Link>
                </li>
                <li>
                    <Link to="/leecooper">Lee Cooper Mid Sneakers</Link>
                </li>
            </ul>
            <switch>
                <Route exact path='/nike' component={nike}></Route>
                <Route exact path='/polo' component={polo}></Route>
                <Route exact path='/addidas' component={addidas}></Route>
                <Route exact path='/leecooper' component={leecooper}></Route>
            </switch>
        </>
    )


}

export default products;
;