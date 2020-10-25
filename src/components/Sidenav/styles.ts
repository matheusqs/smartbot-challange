import styled from 'styled-components';

export const SidenavContainer = styled.div`
  height: -webkit-fill-available;
  background-color: #fff;
  width: min-content;
  padding: 16px 12px;
  border-radius: 8px;
  transition: width 0.2s;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    .image {
      width: auto;
    }

    span {
      width: inherit;
      color: #8a888b;
      margin-left: 16px;
    }
  }

  .image {
    overflow: hidden;
    width: 37px;
    transition: width 0.2s;
  }

  .line {
    background-color: #e6e6e6;
    height: 1px;
    width: -webkit-fill-available;
    margin: 16px 0;
  }
`;

export const Image = styled.img`
  height: 28px;
  width: auto;
  margin-left: 4px;
`;

export const Item = styled.button`
  padding: 16px 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    color: #00b39d;
    font-size: 21px;
  }

  span {
    width: 0;
    color: transparent;
    white-space: nowrap;
    font-size: 14px;
    transition: width 0.2s, color 0.2s;
    margin: 0;
  }

  &:active {
    background-color: #f2f2f2;
  }
`;
