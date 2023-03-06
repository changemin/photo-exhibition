import React from 'react';
import './css/App.css';
import Marquee from "react-fast-marquee";
import styled from "styled-components";


const leftTextItems = [
  "나의 시선들이 듬뿍 담긴 사진들",
  "한양대학교 건축학부 22학번 변경민",
  "@chgemn",
  "지극히 개인적인 시선들",
  "질문 받아요",
]

export default function App() {
  return (
    <Container>
      <LeftMarqueeWrapper>
        <Marquee gradientColor={[19,19,19]} speed={2}>
          {leftTextItems.map((item) => (
              <FlowingText>{item}</FlowingText>
          ))}
        </Marquee>
      </LeftMarqueeWrapper>

      <RightMarqueeWrapper>
        <Marquee gradientColor={[19,19,19]} speed={2}>
          {leftTextItems.map((item) => (
              <FlowingText>{item}</FlowingText>
          ))}
        </Marquee>
      </RightMarqueeWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
`

const FlowingText = styled.p`
  margin: 0px 20px 0px 0px;
  font-family: "NanumSquareNeo-EB";
  font-size: clamp(1rem, 10vw, 3rem);
`

const LeftMarqueeWrapper = styled.div`
  position: absolute;
  height: 100vh;
`

const RightMarqueeWrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 60vw;
  transform: rotate(90deg);
`