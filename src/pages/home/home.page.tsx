import Home_page_module from './home.page.module.scss';
import Classnames from 'classnames';

const HomePage = () => {
    return (
        <div className={Home_page_module.homePage}>
            <div className={Home_page_module.homePage__jumbotron}>
                <div className={Home_page_module.jumbotronContent}>
                    <div>
                        <h1>Check out Latest Macbooks</h1>
                    </div>
                    <button>View Deals</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
