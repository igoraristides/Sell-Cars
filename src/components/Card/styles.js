import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px;

border: 1px solid #DCD9D9;
box-sizing: border-box;
border-radius: 7px;
margin-right: 20px;
`;

export const CarIcon = styled.img`
width: 100px;
height: 80px;
left: 25px;
top: 25px;
border-radius: 7px;
`;

export const Content =  styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;  
`;

export const CarBox =  styled.div`
display: flex;
flex-direction: column;
`;

export const CarName =  styled.p`
font-size: 16px;
line-height: 18px;
color: #249CF2;
`;
export const CarDescription =  styled.p`
font-weight: 500;
font-size: 12px;
line-height: 17px;
color: #979797;
`;
export const CarDescription2 =  styled.p`
font-size: 12px;
line-height: 14px;  
color: #979797;
`;

export const Price =  styled.p`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #55B84B;
margin-top: 5px;
`;
