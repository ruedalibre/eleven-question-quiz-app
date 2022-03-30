import React from 'react'

const CategoryTitle = ({category = undefined, color = undefined}) => {
  
    return (
    <div>
        <h1 className='category-title' style={{color: color}}>{category}</h1>
    </div>
  )
}

const SubcategoryTitle = ({subcategory, color}) => {
  
    return (
    <div>
        <h1 className='subcategory-title' style={{color: color}}>{subcategory}</h1>
    </div>
  )
}

export { CategoryTitle, SubcategoryTitle };