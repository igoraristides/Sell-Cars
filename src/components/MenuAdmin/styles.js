import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  position: fixed;
  width: 100%;
  height: 80px;

  background-color: #F7F9FC;

  z-index: 100;
`;

export const Centralize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  cursor: pointer;
`;
export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 20%;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const Img = styled.img`
  margin: auto 0px;
  width: 20px;
  height: 20px;
`;

export const Logout = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 14px;
  color: #0066ff;

  text-align: center;

  margin-top: 20px;
`;
