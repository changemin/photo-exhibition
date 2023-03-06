import Marquee from "react-fast-marquee";
import styled from "styled-components";

export default function FlowingText() {
    return (
        <>
            <LeftMarquee />
            <RightMarquee />
        </>
    )
}

const leftTextItems = [
  "나의 시선들이 듬뿍 담긴 사진들",
  "한양대학교 건축학부 22학번 변경민",
  "@chgemn",
  "지극히 개인적인 시선들",
  "Copyright 2023. 변경민 all rights reserved."
]

const RightMarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2vw;
  /* height: 100vh; */
  width: 100vh;
  transform: rotate(90deg);
`
const LeftMarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2vw;
  width: 100vh;
  transform: rotate(-90deg);
`

const MarqueeText = styled.div`
  margin: 0px 100px 0px 0px;
  display: flex;
  align-items: center;
  /* height: 100%; */
  font-family: "NanumSquareNeo-EB";
  font-size: clamp(1rem, 10vw, 5rem);
`

const LeftMarquee = () => (
  <LeftMarqueeContainer>
    <Marquee gradient={false} speed={0.5} direction="left">
      {leftTextItems.map((item) => (
        <MarqueeText>{item}</MarqueeText>
      ))}
    </Marquee>
  </LeftMarqueeContainer>
)

const RightMarquee = () => (
  <RightMarqueeContainer>
    <Marquee gradient={false} speed={0.5} direction="left">
      {leftTextItems.map((item) => (
        <MarqueeText>{item}</MarqueeText>
      ))}
    </Marquee>
  </RightMarqueeContainer>
)