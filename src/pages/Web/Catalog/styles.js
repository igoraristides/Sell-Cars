import styled from "styled-components";
import Form from "../../../components/Form";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const Head = styled.div``;

export const SearchContainer = styled(Form)`
  display: flex;
  margin-top: 30px;
  width: auto;
  height: 32px;
  justify-content: right;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Filter = styled.img`
  margin: auto 15px;

  cursor: pointer;
  width: auto;
  height: 32px;
`;
export const Aux = styled.div`
  flex: 1;
  display: flex;
  margin-right: 50px;
  background: #fff;
`;
