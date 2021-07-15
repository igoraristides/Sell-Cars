import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 4px;
  border-color: #000;
  background-color: rgb(255, 255, 255);
  margin-right: 10px;
  padding: 30px 15px;
  flex: 1 1 0px;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  margin-left: 20px;
  color: #249cf2;
`;

export const SubTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Text = styled.p`
color: #000;
font-size: 30px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const TextButton = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: #000;
  margin: 20px 0 20px;
  width: 100%;
`;

export const Exit = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  background: red;
  width: 30%;
  border-radius: 30px;
  text-align: center;
`;

export const Save = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 25px;
  background: green;
  width: 30%;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 25px;
  background: #249cf2;
  width: 30%;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
`;