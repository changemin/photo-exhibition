import PhotoData from '../data/PhotoData.json'
import styled from 'styled-components'


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
    width: 25vw;
    height: 25vw;
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
    top: 3vh;
    left: 5vw;
    right: 5vw;
    width: 86vw;
    padding-bottom: 3vh;
    /* background-color: red; */
`

const Placeholder = styled.div`
    background-color: yellow;
    align-content: center;
    color: black;
    width: 20vh;
    height: 20vh;
    margin: 0.5vh;
`