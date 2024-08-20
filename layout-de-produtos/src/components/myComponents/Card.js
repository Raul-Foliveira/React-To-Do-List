import React from 'react';
import styled from 'styled-components';
import Image from './image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: black;
`;

const Card = ({ title, description, imageUrl }) => (
  <CardContainer>
    <Image src={imageUrl} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;
