import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import Navbar from "../src/components/navbar/navbar.component";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />
        </div>
    );
}

export default App;
