import React from 'react';

import ProductCard_component_module from './product-card.component.module.scss';

import { ProductCardProps } from '../../types';

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
    return (
        <div className={ProductCard_component_module.productCard}>
            <img
                src={`../../../src/assets/images/${imageUrl}`}
                className={ProductCard_component_module.productCard__image}
            />
            <div className={ProductCard_component_module.productCard__content}>
                <h2>{name}</h2>
                <div className={ProductCard_component_module['productCard__content--detail']}>
                    <span>Add</span>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
