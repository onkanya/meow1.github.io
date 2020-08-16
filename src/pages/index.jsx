import React from "react";
import styled from "styled-components";

// style
import styles from "../styles/Home.module.css";

// Icon
import { FaGithub, FaLine, FaFacebook, FaInstagram } from "react-icons/fa";

// image
import myImg from "../assets/picture.jpg";

const handleColor = (name, color) => {
  if (name === "facebook") {
    return color.info;
  }

  if (name === "line") {
    return color.line;
  }

  if (name === "github") {
    return color.disable;
  }

  if (name === "instagram") {
    return color.warning;
  }
};
const AvatarWrapper = styled.div`
  img {
    width: 100px;
    border-radius: 30px;
  }
`;

const DescWrapper = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.color.disable};
`;
const ButtonWrapper = styled.div`
  margin: 0.6rem;
  flex-basis: 45%;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  background: ${({ theme }) => theme.color.primary};
  border: 0px solid #49d75c;
  border-radius: 35px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease;
  width: 210px;
  position: relative;
  height: 60px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 25px 0px ${({ theme }) => theme.color.disable};

    svg {
      transform: translate(7px);
    }
  }

  svg {
    fill: ${({ theme, colorSet }) => handleColor(colorSet, theme.color)};
    position: absolute;
    left: 35px;
    pointer-events: none;
    z-index: 10;
    /* background: inherit; */
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.25s ease;
  }
`;

const TextButton = styled.span`
  width: 130px;
  display: block;
  position: relative;
  pointer-events: none;
  transition: all 0.25s ease;
  position: absolute;
  left: 85px;
`;

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AvatarWrapper>
          <img src={myImg} alt="" />
        </AvatarWrapper>

        <p className={styles.description}>@mean_onkanya</p>
        <DescWrapper>Frontend developer</DescWrapper>
        <DescWrapper>20scoops CNX</DescWrapper>

        <div className={styles.grid}>
          <ButtonWrapper>
            <Button
              href="https://www.facebook.com/mean.onkanya.75"
              target="_blank"
              colorSet="facebook"
            >
              <FaFacebook />
              <TextButton>Facebook</TextButton>
            </Button>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button
              href="https://line.me/ti/p/kz8tvBKclY"
              target="_blank"
              colorSet="line"
            >
              <FaLine />
              <TextButton>LINE</TextButton>
            </Button>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button
              href="https://github.com/onkanya"
              target="_blank"
              colorSet="github"
            >
              <FaGithub />
              <TextButton>Github</TextButton>
            </Button>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button
              href="https://www.instagram.com/mean_onkanya/"
              target="_blank"
              colorSet="instagram"
            >
              <FaInstagram />
              <TextButton>Instagram</TextButton>
            </Button>
          </ButtonWrapper>
        </div>
      </main>
    </div>
  );
};

export default Home;
