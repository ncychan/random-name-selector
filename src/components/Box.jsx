import styled from 'styled-components';

const Box = styled.section`
    border: 1px solid #EBEBEB;
    border-radius: 17px;
    padding: 30px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    p:first-of-type {
        margin-top: 0;
    }

    ${(p) => p.width !== undefined && `
    flex-basis: ${p.width}%;
    `} 
`;

export default Box;