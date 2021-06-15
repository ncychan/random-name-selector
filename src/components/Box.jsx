import styled from 'styled-components';

const Box = styled.section`
    border: 1px solid #EBEBEB;
    border-radius: 17px;
    padding: 30px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);

    ${(p) => p.isLast && `
    margin-left: 10px;
    `}

    ${(p) => p.width !== undefined ? `
    flex-basis: ${p.width}%;
    `: `flex-grow: 1;`} 

`;

export default Box;