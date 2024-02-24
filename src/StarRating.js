import Star from "./Star"
import DataContext from "./context/DataContext"
import { useContext } from "react"

const StarRating = () => {

    const { stars, handleMouseOutContainer } = useContext(DataContext);

    return (

        <main className='main'>

            <h2 className="main__h2">Rate our product: </h2>

            <div onMouseLeave={handleMouseOutContainer}>

                {stars.map((star) => {

                    return (

                        <Star
                            key={star.id}
                            star={star}
                        ></Star>
                    )
                })}

            </div>

        </main>

    )

}

export default StarRating
