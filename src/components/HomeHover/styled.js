import styled from "styled-components";

const HoverText = styled.p`
  display: inline-block;
  color: var(--light-yellow);
  padding-right: ${props => props.text === 'fine arts' ? '0' : '1.2%'};
  cursor: pointer;
  z-index: 1;
  font-family: ${props =>
    props.text === 'UI/UX designer'
      ? `'fira-sans-black', sans-serif !important`
      : props.text === 'front-end developer' ? 
      `'fira-sans-medium', sans-serif !important`
      : `'fira-sans-italic', sans-serif !important`};
  letter-spacing: ${props => props.text === 'front-end developer' ? '0.12em' : '0'};
`;

export { HoverText };
