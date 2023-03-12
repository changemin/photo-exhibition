import PhotoData from '../data/PhotoData.json'
import styled from 'styled-components'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Desktop } from './mediaQuery';


// const images = require.context('../photos', true);

export default function PhotoGridView() {
    return (
        <PhotoGridViewWrapper>
            {PhotoData.map((item, idx) => (
                <PhotoContainer>
                    <PhotoDescriptionContainer>
                        <PhotoDescription>{item.Title}</PhotoDescription>
                        <Desktop>
                            <PhotoDescription>{item.DateTime}</PhotoDescription>
                        </Desktop>
                    </PhotoDescriptionContainer>
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

const PhotoDescriptionContainer = styled.div`
    position: absolute;
    z-index: 2;
    right:0;
    bottom:0;
    padding:0;
    text-align: right;
    /* transform: translate(-50%, -50%); */
`

const PhotoDescription = styled.p`  
    text-align: right;
    width: max-content;
    margin:0;
    padding: 0;
    background-color: #0d0c0c;

    font-family: 'Courier New', monospace;
    letter-spacing: 0.em;
    background-color: black;
    color: white;

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
    top: 8vh;
    width: 100vw;
    
    @media screen and (min-width: 768px){
        width: 86vw;
        top: 3vh;
        padding-left:7vw;
        padding-right:7vw;
        padding-bottom: 3vh;
    }
    /* background-color: red; */
`
