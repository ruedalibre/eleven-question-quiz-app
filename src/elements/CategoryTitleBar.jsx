import React from 'react'
import styled from 'styled-components'
import Data from '../data/data'
import { useParams } from 'react-router-dom'

const CategoryTitleBar = () => {
  const {id} = useParams();

    return (
      <TitleBarContainer>
          <CategoryTitle>{data[id -1].category}</CategoryTitle>
          <CategoryTitle>{data[id -1].subcategory}</CategoryTitle>
          <CategorySubtitle>{data[id -1].difficulty}</CategorySubtitle>
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