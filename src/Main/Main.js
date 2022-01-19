import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "../images/프리온.jpg";
import img2 from "../images/프론트.jpg";
import img3 from "../images/성장.jpg";
import img4 from "../images/마케팅.jpg";

const TOTAL_SLIDES = 3;

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <MainContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
      </MainContainer>
      <ButtonContainer>
        <ButtonLeft onClick={prevSlide}>{"<"}</ButtonLeft>
        <ButtonRight onClick={nextSlide}>{">"}</ButtonRight>
      </ButtonContainer>
    </Container>
  );
}

export default Main;
const Container = styled.div`
  width: 80%;
  position: relative;
  overflow: hidden;
`;
const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;
const ButtonContainer = styled.div``;

const ButtonLeft = styled.button`
  position: absolute;
  top: 145px;
  left: 270px;
  font-size: 35px;
`;

const ButtonRight = styled.button`
  position: absolute;
  top: 145px;
  right: calc((100% - 1250px) / 2);
  font-size: 35px;
`;
