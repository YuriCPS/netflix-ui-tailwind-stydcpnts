import tw, { styled } from 'twin.macro';

export const MoviesContainer = styled.div`
  ${tw`
    my-8
    mx-1
  `}
`;

export const MoviesTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
      mt-10
    `}
`;

export const MoviesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-0
      p-4
    `}
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-48
  `}
  transition: all 0.2s;
  &:hover {
    transform: scale(1.16);
  }
`;
