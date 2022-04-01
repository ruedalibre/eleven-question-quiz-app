import React from 'react'
import styled from 'styled-components'

const CategoryTitleBar = () => {
  
    return (
      <TitleBarContainer>
          <CategoryTitle>Category Title</CategoryTitle>
          <CategoryTitle>Subcategory Title</CategoryTitle>
          <CategorySubtitle>Difficulty</CategorySubtitle>
      </TitleBarContainer>
  )
}

const TitleBarContainer = styled.div`
  display: flex; 
  display-direction: row;
  margin-bottom: 20px;
`
const CategoryTitle = styled.h3`
  color: black;
  padding: 10px;
  text-align: center;
`

const CategorySubtitle = styled.h4`
  color: grey;
  text-align: center;
  margin: 10px;
`

export default CategoryTitleBar;