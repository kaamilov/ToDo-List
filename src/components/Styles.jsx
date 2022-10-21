import styled from "styled-components";

const Title = styled.div`
text-decoration: ${({isValid}) => isValid ? '' : 'line-through'};
`


export {Title}