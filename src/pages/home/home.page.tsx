import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';

import ProductCard from '../../components/product-card/product-card.component';

import Home_page_module from './home.page.module.scss';

import { Product } from '../../types';

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts([
            { name: 'Macbook Pro 2023 M3 Chip', price: 2055.99 },
            { name: 'Bluetooth Speaker', price: 2.55 },
            { name: 'Beats Headphones', price: 2.55 },
            { name: 'Cushion', price: 2.55 },
            { name: 'Aaron Rodgers Jersey', price: 2.55 },
            { name: 'Hotweels Nissan GTR-R35', price: 2.55 },
            { name: 'Signed Paul Walker Frame', price: 2.55 },
            { name: 'Air Jordan 6', price: 2.55 },
            { name: 'Dishwasher', price: 2.55 },
            { name: 'Apple Magic Keyboard and Mouse', price: 2.55 },
            { name: 'iPhone 14', price: 2.55 },
            { name: 'King Size Bed', price: 2.55 },
        ]);
    }, []);

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
            <div className={Home_page_module.homePage__products}>
                <FlatList
                    list={products}
                    renderItem={({ name, price }) => (
                        <ProductCard
                            key={name}
                            name={name}
                            price={price}
                            imageUrl="empty_image.png"
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default HomePage;
