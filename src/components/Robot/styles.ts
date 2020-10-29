import styled from 'styled-components';
import { lighten } from 'polished';

interface WorkDataProps {
  daily_balance: number;
}

interface PaperProps {
  profit: number;
}

interface InfoProps {
  running: number;
}

export const RobotContainer = styled.section`
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 4fr);
  column-gap: 16px;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  > section {
    flex: 1;

    h4 {
      font-weight: bold;
    }

    span {
      font-size: 12px;
      line-height: 14px;
      color: #b4b3b5;
    }

    &:last-of-type {
      display: flex;
      align-items: center;

      > div {
        border-radius: 50%;
        background-color: ${({ running }: InfoProps) =>
          running ? '#00b39d' : '#ff4501'};
        height: 8px;
        width: 8px;
        margin-right: 8px;
      }

      > h5 {
        color: #b4b3b5;
        font-weight: 500;
      }
    }
  }
`;

export const History = styled.div`
  display: flex;
  margin-bottom: 12px;

  > section {
    flex: 1;

    h4 {
      font-weight: bold;
    }

    span {
      font-size: 12px;
      line-height: 14px;
      color: #b4b3b5;
    }
  }

  > div {
    border-radius: 50%;
    background-color: #15b8a1;
    height: 8px;
    width: 8px;
  }

  svg {
    color: #b1b0b2;
    cursor: pointer;

    &:first-of-type {
      margin-right: 8px;
    }
  }
`;

export const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -8px 0 16px -8px;
  width: calc(100% + 12px);

  > * {
    margin: 8px 0 0 8px;
  }
`;

export const Tag = styled.span`
  color: #b4b3b5;
  border: 1px solid ${lighten(0.1, '#b4b3b5')};
  padding: 2px 4px;
  border-radius: 2px;

  font-size: 12px;
  line-height: 14px;
`;

export const Paper = styled.div`
  border: 1px solid ${lighten(0.1, '#b4b3b5')};
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h1 {
    font-size: 30px;
    line-height: 32px;
    color: #5f5d60;
    margin-right: 24px;
    font-weight: bold;
  }

  > div {
    flex: 1;

    &:last-of-type {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 0;

      > div {
        display: flex;
        align-items: center;
        color: ${({ profit }: PaperProps) =>
          profit >= 0 ? '#00b39d' : '#ff4501'};

        > span {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    h4 {
      color: #959aa2;
      font-weight: 500;
    }

    h5 {
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;
    }

    > span {
      color: #b4b3b5;
      font-size: 12px;
      line-height: 14px;

      margin-bottom: 2px;
    }
  }
`;

export const WorkData = styled.div`
  display: flex;

  > div {
    flex: 1;

    span {
      color: #b4b3b5;
      font-size: 12px;
      line-height: 14px;
    }

    h3 {
      font-weight: bold;
    }
  }

  div.balance {
    div {
      display: flex;
      align-items: center;

      svg {
        color: #b4b3b5;
        margin-left: 4px;
      }
    }

    h3 {
      color: ${({ daily_balance }: WorkDataProps) =>
        daily_balance >= 0 ? '#00b39d' : '#ff4501'};
    }
  }

  div.trades {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
