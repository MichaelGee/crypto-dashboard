import styled from '@emotion/styled';
import RightIcon from '../icons/Right'


export const Container = styled.div`
 background: #fff;
 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0, 3%);
 padding: 1.5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 8px;
 cursor: pointer;
 margin: 0 0.5rem;
 svg{
     width: 1.5rem;
     height: 1.5rem;
 }
 &:hover{
    opacity: 0.6;
 }
`

export const RightButton = (props) => {
    return (
        <Container {...props}>
            <RightIcon/>
        </Container>
    )
}
