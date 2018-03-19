import React, {Component} from 'react'
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
    render(){
        const recipes = [
            {
                title: 'Pasta',
                img: 'spaghetti.jpeg',
                instructions: 'Mix ingredients',
                ingredients: ['Flour', 'Water']
            },
            {
                title: 'Toast',
                img: 'spaghetti.jpeg',
                instructions: 'Put bread in toaster',
                ingredients: ['Bread', 'Toaster']
            },
            {
                title: 'Cereal',
                img: 'spaghetti.jpeg',
                instructions: 'Mix cereal and milk in bowl',
                ingredients: ['Cereal', 'Milk']
            }
        ]
        return(
            <div className='recipe-list'>
                {recipes.map((recipe, index) => (
                    <Recipe key={index}
                            // className='recipe-item'
                            // title={recipe.title}
                            // img={recipe.img}
                            // instructions={recipe.instructions}
                            // ingredients={recipe.ingredients}
                            // REST OPERATOR!!!!
                            {...recipe}/>
                ))}
            </div>
        )
    }
}


export default RecipeList