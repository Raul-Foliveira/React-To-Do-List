import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Products = ({ products }) => (
  <ProductsContainer>
    {products.map(product => (
      <Card
        key={product.id}
        title={product.title}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    ))}
  </ProductsContainer>
);

export default Products;
