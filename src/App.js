import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import MainTable from './components/MainTable/MainTable';
import SelectedTable from './components/SelectedTable/SelectedTableRow';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Main Table</Link>
                        </li>
                        <li>
                            <Link to="/selected">Selected Table</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/selected" element={<SelectedTable/>}/>
                    <Route path="/" element={<MainTable/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;