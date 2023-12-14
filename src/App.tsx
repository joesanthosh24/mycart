import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';

import Navbar from '../src/components/navbar/navbar.component';

import HomePage from './pages/home/home.page';
import PageWrapper from './components/page-wrapper.component';

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageWrapper title="My Cart">
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/shopping"
                        element={
                            <PageWrapper title="My Cart - Shopping">
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
