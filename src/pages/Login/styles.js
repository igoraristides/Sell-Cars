import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  padding: 0 0.5rem;
  align-items: center;
  height: 70vh;
`;

export const Text = styled.h1`
color: #000;

`;
export const Button = styled.div`
  width: 100%;
  margin-top: 15px;
  cursor: pointer;  
  background: #00C1DA;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;  
  border: 1px solid #fff;   
  margin-bottom: 10px;  
  text-shadow: 0 1px 1px #333;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  transition: all 0.2s linear;
`;


export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius:  50px;
  width: 45%;
  background: #fff;
`;
export const Content =  styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;  
`;

export const Aux =  styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Img =  styled.img`
max-width: 200px;
`;