import PhotoData from '../data/PhotoData.json'
import styled from 'styled-components'
import 'react-lazy-load-image-component/src/effects/blur.css';


// const images = require.context('../photos', true);

export default function PhotoGridView() {
    return (
        <PhotoGridViewWrapper>
            {PhotoData.map((item, idx) => (
                <PhotoContainer>
                    <Photo src={require("../photos/"+item.FilePath)}/>
                </PhotoContainer>
             ))}
        </PhotoGridViewWrapper>
    )
}

const PhotoContainer = styled.div`
    position: relative;
    width: 32vw;
    height: 32vw;
    @media screen and (min-width: 768px){
        width: 20vw;
        height: 20vw;
    }
    /* margin: 1%; */
`

const Photo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
`

const PhotoGridViewWrapper = styled.div`
    display: flex;
    column-gap: 1vw;
    row-gap: 1vw;
    flex-wrap: wrap;
    justify-content:center;
    position: absolute;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 3vh;
    top: 10vh;
    width: 100vw;
    
    @media screen and (min-width: 768px){
        width: 86vw;
        top: 2vh;
        padding-left:7vw;
        padding-right:7vw;
        padding-bottom: 3vh;
    }
    /* background-color: red; */
`
