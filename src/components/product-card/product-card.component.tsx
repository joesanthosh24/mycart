import React from 'react';

import ProductCard_component_module from './product-card.component.module.scss';

import { ProductCardProps } from '../../types';

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
    return (
        <div className={ProductCard_component_module.productCard}>
            <div className={ProductCard_component_module.productCard__content}>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default ProductCard;
