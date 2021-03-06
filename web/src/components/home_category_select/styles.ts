import styled from "styled-components";
import images from "../../data/images";

export const Box = styled.div`
  height: 220px;
  margin: 8px 24px 0px 24px;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin: 0;
  }
`;

export const InboxOverlay = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  margin-top: 55px;
  height: 165px;
  position: absolute;
  border-radius: 5px;
`;

export const ImagePlaceholder = styled.img`
  position: relative;
  margin: auto;
  height: 70%;
  left: 50%;
  transform: translateX(-50%);
`;

export const ArrowButtonContainer = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayLine};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 13px;
  place-items: center;
  margin: auto;
  height: 13px;
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const Arrow = styled.img.attrs(() => ({
  src: images.arrowIcon,
}))`
  height: 10px;
`;

export const ArrowText = styled.span`
  display: block;
  text-align: center;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 13px;
  color: inherit;
`;

export const CategoryName = styled.span`
  position: relative;
  text-align: center;
  display: block;
  ${({ theme }) => theme.fonts.subtitle};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const OuterContainer = styled.div<{ lower?: boolean; nav?: boolean }>`
  margin-top: ${({ lower }) => (lower ? 120 : 32)}px;
  @media screen and (min-width: ${({ theme }) => theme.sizes.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: ${({ lower, nav }) => (lower ? 96 : nav ? 56 : 96)}px 40px 0 40px;
  }
`;
