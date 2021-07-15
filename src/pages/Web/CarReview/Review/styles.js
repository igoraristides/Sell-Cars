import styled from "styled-components";

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

export const Title = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 70px;
  color: #249cf2;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Datasheet = styled.div`
  display: flex;
  border-radius: 4px;
  flex: 1 1 0px;
  margin-top: 10px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: #249cf2;
  margin: 20px 0 20px;
  margin-left: 20px;
`;
export const Text2 = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: #000;
  margin: 20px 0 20px;
  margin-left: 20px;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #DCD9D9;
  flex: 1 1 0px;
  width: 90%;
`;

export const Box2 = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #F7F9FC;
  flex: 1 1 0px;
  width: 10%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const Exit = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  background: red;
  width: 30%;
  border-radius: 30px;
  text-align: center;
`;

export const TextButton = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: #000;
  margin: 20px 0 20px;
  width: 100%;
`;
