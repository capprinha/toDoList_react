import { useState } from "react"

import { CardContainer } from "./styles"

type CardProps = {
    title: string,
    description?: string
    id?: string
    onClick: () => void
    author: string
}
const Card = ({description, title, id, onClick, author}: CardProps) => {

    const[ isCheck, setIsCheck ] = useState(false)
    return(
        <CardContainer>
            <div>
                <input type="checkbox" onChange={e => setIsCheck(e.target.checked)} />
            </div>
            <div className="taskContainer">
                <span>{id} | Autor: {author}</span>
                <h2 className={isCheck ? 'taskCompleted' : ''}>{title}</h2>
                <p className={isCheck ? 'taskCompleted' : ''}>
                    {description}
                </p>
            </div>
            <button onClick={onClick} className="button">x</button>
        </CardContainer>
    )
}

export default Card