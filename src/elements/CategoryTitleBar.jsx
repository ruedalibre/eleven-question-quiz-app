import React from 'react'
import styled from 'styled-components'

const CategoryTitleBar = () => {
    return (
      <TitleBarContainer>
          <CategoryTitle>{category}</CategoryTitle>
          <CategoryTitle>{subcategory}</CategoryTitle>
      </TitleBarContainer>
  )
}

const TitleBarContainer = styled.div`
  display: flex; 
  display-direction: column;
  margin-bottom: 20px;
`
const CategoryTitle = styled.h1`
  color: black;
  font-size: 20px;
  padding: 10px;
  text-align: center;
`
export default CategoryTitleBar;