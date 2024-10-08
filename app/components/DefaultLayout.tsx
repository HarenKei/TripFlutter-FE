"use client";
import { styled } from "styled-components";

interface DefaultLayoutProps {
  // 자식 Node
  children: React.ReactNode;
  top: number;
  right: number;
  bottom: number;
  left: number;
  // 상,우,하,좌 여백을 설정하기 위한 props
}

interface ContentsContainerProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <LayoutWrapper>
      <ContentsContainer top={top} right={right} bottom={bottom} left={left}>
        <>{children}</>
      </ContentsContainer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-width: 320px;
  max-width: 600px;
  width: 100%;
  min-height: 100dvh;

  border: 1px solid black;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 601px) {
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1), 2px 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const ContentsContainer = styled.div<ContentsContainerProps>`
  display: flex;
  flex-direction: column;

  height: calc(
    100% - (${(props) => props.top}px + ${(props) => props.bottom}px)
  );

  padding: ${(props) => props.top}px ${(props) => props.right}px
    ${(props) => props.bottom}px ${(props) => props.left}px;

  overflow-x: auto;
`;

export default DefaultLayout;