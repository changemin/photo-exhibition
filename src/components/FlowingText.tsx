import Marquee from "react-fast-marquee";
import styled from "styled-components";
import TextData from '../data/FlowingText.json';

export default function FlowingText() {
    return (
        <>
            <LeftMarquee />
            <RightMarquee />
        </>
    )
}

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
  font-size: clamp(1rem, 8vw, 5rem);
`

const LeftMarquee = () => (
  <LeftMarqueeContainer>
    <Marquee gradient={false} speed={0.5} direction="left">
      {TextData.left.map((item) => (
        <MarqueeText>{item}</MarqueeText>
      ))}
    </Marquee>
  </LeftMarqueeContainer>
)

const RightMarquee = () => (
  <RightMarqueeContainer>
    <Marquee gradient={false} speed={0.5} direction="left">
      {TextData.right.map((item) => (
        <MarqueeText>{item}</MarqueeText>
      ))}
    </Marquee>
  </RightMarqueeContainer>
)