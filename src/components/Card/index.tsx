import { useState } from "react"

import { CardContainer } from "./styles"

type CardProps = {
    title: string,
    description?: string
}
const Card = ({description, title}: CardProps) => {

    const[ isCheck, setIsCheck ] = useState(false)
    return(
        <CardContainer>
            <div>
                <input type="checkbox" onChange={e => setIsCheck(e.target.checked)} />
            </div>
            <div className="taskContainer">
                <h2 className={isCheck ? 'taskCompleted' : ''}>{title}</h2>
                <p className={isCheck ? 'taskCompleted' : ''}>
                    {description}
                </p>
            </div>
        </CardContainer>
    )
}

export default Card