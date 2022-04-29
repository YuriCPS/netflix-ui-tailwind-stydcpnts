import tw, { styled } from 'twin.macro';

export const FooterContainer = styled.div`
  ${tw`
    my-8
    mx-auto
    p-2
    text-center
  `}
`;

export const FooterText = styled.h4`
  ${tw`
    text-sm
    m-2
    hover:font-bold
  `}
`;

export const FooterImage = styled.img`
  ${tw`
    mx-auto
  `}
`;
