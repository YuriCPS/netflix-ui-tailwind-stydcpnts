import tw, { styled } from 'twin.macro';

export const HeaderContainer = styled.div`
  ${tw`
    flex
    // justify-between
    p-6
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}
background-color: #111;
  img {
    ${tw`
      h-6
      mx-10
    `}
  }
`;

export const HeaderMenu = styled.h2`
  ${tw`
    text-sm
    font-medium
    mx-2
  `}
`;
