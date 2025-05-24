import { TReview } from "@/types/reviews";

export const getAverageRating = (reviews: TReview[]) => {
  if (!reviews || reviews.length === 0) return 0;

  const totalRating = reviews.reduce(
    (sum, review) => sum + (review?.ratings || 0),
    0
  );
  const average = totalRating / reviews.length;

  return Math.round(average * 10) / 10;
};
