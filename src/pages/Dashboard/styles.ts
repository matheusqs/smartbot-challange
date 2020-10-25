import styled from 'styled-components';

interface GeneralInfoPropos {
  total: number;
}

export const DashboardContainer = styled.div`
  padding: 24px;
  height: 100vh;
  display: flex;

  > div:last-of-type {
    flex: 1;
    box-sizing: border-box;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-left: 24px;
  margin-bottom: 24px;
  background-color: #fff;
  width: -webkit-fill-available;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  svg {
    color: #00b39d;
    font-size: 21px;
  }

  .line {
    align-self: stretch;
    width: 1px;
    background-color: #e6e6e6;
    margin: 0 24px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex: 1;

  p {
    color: #b4b3b5;

    &:first-of-type {
      color: #343234;
      font-weight: 500;
    }

    &:last-of-type {
      color: #00b39d;
    }
  }
`;

export const GeneralOperations = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.2);
  margin-left: 24px;
  padding: 16px;
  margin-bottom: 24px;

  h5 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  div.transactions-info {
    display: flex;
    justify-content: space-between;

    div {
      &:first-of-type {
        h4 {
          color: ${({ total }: GeneralInfoPropos) =>
            total >= 0 ? '#00b39d' : '#ff4501'};
        }
      }

      &:last-of-type {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      span {
        display: inline-block;
        font-size: 12px;
        line-height: 14px;
        color: #b4b3b5;
        margin-bottom: 2px;
      }

      h4 {
        font-size: 18px;
        line-height: 20px;
        font-weight: bold;
      }
    }
  }

  .line {
    height: 1px;
    background-color: #e6e6e6;
    margin: 12px 0;
  }

  > span {
    display: inline-block;
    font-size: 12px;
    line-height: 14px;
    color: #b4b3b5;
    margin-bottom: 12px;
  }

  div.transactions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 64px;
    row-gap: 8px;
  }
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;

  h3 {
    padding: 4px 8px;
    color: white;
    background-color: #00b39d;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }

  div.line--dotted {
    height: 1px;
    flex: 1;
    border-top: 1px dashed #c5c5c5;
    margin: 0 8px;
  }

  strong {
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
    margin-right: 4px;
  }

  span {
    font-size: 12px;
    line-height: 14px;
    color: #b4b3b5;
  }
`;
