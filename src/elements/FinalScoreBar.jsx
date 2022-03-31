import React from "react";

const FinalScoreBar = () => {
  return (
    <FinalScoreContainer>
        <p>You scored:</p>
        <p>3 / 11</p>
    </FinalScoreContainer>
  )
}

const FinalScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default FinalScoreBar