import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])

  const onAddCategory = ( newCategory ) => { 
    // No usar push porque muta el estado en lugar de hacer uno nuevo
    // categories.push(<li key={valorant} >Valorant</li>)
    
    if( categories.includes(newCategory) ) return
 
    setCategories([newCategory, ...categories])
  }

  const onRemoveCategory = ( categoryToRemove ) => {
    setCategories(categories.filter(category => category !== categoryToRemove))
  }

  return (
    <>
        <h1>Gift Expert App</h1>

        <AddCategory
          onNewCategory = { (value) =>onAddCategory(value) }
        />

        { categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
              onRemoveCategory = { onRemoveCategory }
            />))
        }
    </>
  )
}
