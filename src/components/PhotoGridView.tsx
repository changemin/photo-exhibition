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
    width: 20vh;
    height: 20vh;
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
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
    justify-content:center;
    position: absolute;
    top: 3vh;
    left: 7vw;
    right: 7vw;
    width: 86vw;
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