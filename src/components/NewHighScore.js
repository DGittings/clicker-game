import React from 'react';
import styled from 'styled-components';

const StyledHighScore = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #269f26;
  text-align: center;
  text-transform: uppercase;
`;

const StyledEmoji = styled.span`
  margin: 0 10px;
`;

const HighScore = () => {
  return (
    <StyledHighScore>
      <StyledEmoji role="img" aria-label="Trophy emoji">
        🏆
      </StyledEmoji>
      New high score!
      <StyledEmoji role="img" aria-label="Fire emoji">
        🔥
      </StyledEmoji>
    </StyledHighScore>
  );
};

export default HighScore;
