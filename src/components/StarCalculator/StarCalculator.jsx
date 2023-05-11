import React from 'react'
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";


const StarCalculator = (props) => {
    if (props.reviews.length === 0) {
        return <><p>No reviews yet</p></>
    } else {
        const calculateAverage = (reviews) => {
            let average = reviews.reduce((acc, val) => acc + val.stars, 0) / reviews.length
            average = Math.round(average * 2) / 2 //rounds to nearest 0.5

            let icons = [];

            let fullStars = Math.floor(average);
            let halfStars = average - fullStars;
            let emptyStars = 5 - Math.ceil(average);

            for (let i = 0; i < fullStars; i++) {
                icons.push(<FaStar />)
            }
            if (halfStars) {
                icons.push(<FaStarHalfAlt />)
            }
            for (let i = 0; i < emptyStars; i++) {
                icons.push(<FaRegStar />)
            }
            return icons
        }

        const calculateEach = (review) => {
            let iconsEach = []
            const fullStars = review.stars;
            const emptyStars = 5 - fullStars
            for (let i = 0; i < fullStars; i++) {
                iconsEach.push(<FaStar />)
            }
            for (let i = 0; i < emptyStars; i++) {
                iconsEach.push(<FaRegStar />)
            }
            return iconsEach
        }

        const ratingDisplay = calculateAverage(props.reviews);  //Average
        const reviewMap = props.reviews.map(review => {  //Each review
            return <>
                <div key={review.id}>
                {calculateEach(review)}
                <p className="small px-2"><em>{review.details}</em></p>
                <hr />
                </div>
            </>
        })

        return (
            <>
                {ratingDisplay}
                <p className="read-more mt-2" data-bs-toggle="collapse" data-bs-target={`#${props.productId}-review`}>Read more</p>
                <div id={`${props.productId}-review`} className="collapse text-center text-bg-dark mt-2 pt-1">
                {reviewMap}
                </div>
            </>
        )
    }
}

export default StarCalculator