import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const starsIcon = (stars) => {
  return Array.from({ length: 5 }, (_, index) => {
    const halfStar = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= halfStar ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
};
const Stars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <div className="stars">{starsIcon(stars)}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
