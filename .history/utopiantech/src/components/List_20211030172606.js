import React from "react"
import Book from './BookCard'

const List = (props)=>{
    return(
        <div>
            {props.items.map(Item =>{<BookCard />})}
        </div>
    )
}

export default List 