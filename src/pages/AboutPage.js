import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="About" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Comfy Sloth, your go-to online destination for all things
            cozy and delightful! At Comfy Sloth, we're dedicated to bringing you
            a curated selection of the coziest products, from plush blankets to
            trendy loungewear and charming home decor. We believe in the
            transformative power of comfort and strive to create a seamless
            shopping experience. Every item in our collection is handpicked for
            its quality, style, and, most importantly, its ability to bring joy
            and relaxation into your life. Join us on a journey to discover the
            joy of comfort at Comfy Sloth. Whether you're shopping for yourself
            or looking for the perfect gift, our diverse range ensures there's
            something for everyone. Thank you for choosing Comfy Sloth, where
            comfort meets style in every purchase.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
