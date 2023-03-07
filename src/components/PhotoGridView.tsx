import PhotoData from '../data/PhotoData.json'
import styled from 'styled-components'


// const images = require.context('../photos', true);

export default function PhotoGridView() {
    return (
        <PhotoGridViewWrapper>
            {PhotoData.map((item, idx) => (
                <div>
                    {/* <p>{"photos/"+item.FilePath.toString()}</p> */}
                    {/* <img src={require("photos/"+item.FilePath)}/> */}
                </div>
             ))}
        </PhotoGridViewWrapper>
    )
}

// ../photos/2023:03:06 22:54:00@2@이불.jpg

function newLine(idx: number) {
    if ((idx+1)%4==0) {
        return <p>hello</p>
    }
}

const Photo = styled.img`
    width: 100px;
`

const PhotoGridViewWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 10vw;
    bottom: 0;
    right: 10vw;
    width: 50vw;
`

const Placeholder = styled.div`
    background-color: red;
    width: 20vh;
    height: 20vh;
    margin: 0.5vh;
`