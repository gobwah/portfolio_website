import { Wrapper } from './ScrollUpStyles';
import { FaArrowUp } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { SocialContainer } from '../Footer/FooterStyles';
import { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(
    () =>
      window.addEventListener('scroll', (e) => setVisible(window.scrollY > 0)),
    []
  );

  return (
    visible && (
      <Wrapper>
        <SocialContainer>
          <SocialIcons href="javascript:window.scrollTo({ top: 0, behavior: 'smooth' })">
            <FaArrowUp size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </Wrapper>
    )
  );
};

export default ScrollUp;
