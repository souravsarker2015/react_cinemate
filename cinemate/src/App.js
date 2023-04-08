import './App.css';

import {AllRoutes} from "./route/AllRoutes";
import {Footer, Header} from "./components";

function App() {
    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
