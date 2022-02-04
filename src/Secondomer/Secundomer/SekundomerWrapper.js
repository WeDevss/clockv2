import styled from "styled-components";
import colors from "./Colors";
const SekundomerWrapper = styled.div`
  color:${colors.textColor};
  font-size: 24px;
  font-weight: bold;
  display: flex;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
   background-color:${colors.bgColor} !important;
  .btn {
    font-size: 30px;
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid yellow;
    color:${colors.textColor};
    padding: 16px 24px;
    margin: 45px 20px 0px 20px;
  }
  .mainColor {
    font-size: 48px;
     color:${colors.textColor};
  }
  table {
     color:${colors.textColor};
    min-height: 300px;
    border: ${colors.textColor};
  }
  .borderBottom {
     color:${colors.textColor};
  }
  .sekund {
    width:100%;
  }
  .row {
    height: 55vh;
    display: flex;
    flex-direction: column;
  }
  .col-12 {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  .col-12::-webkit-scrollbar {
    display: none;
  }
`;
export default SekundomerWrapper;
