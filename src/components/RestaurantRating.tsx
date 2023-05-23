"use client";

interface RestaurantRatingProps {
	rating: number | null;
	ratingLength: number;
}

const RestaurantRating = ({ rating, ratingLength }: RestaurantRatingProps) => {
	if (!rating) {
		return <div>Sem avaliação</div>;
	}

	return (
		<div>
			{rating} stars de {ratingLength} comentários
		</div>
	);
};

export default RestaurantRating;
