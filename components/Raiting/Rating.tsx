import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import { useState, useEffect, KeyboardEvent } from "react";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDispay(i + 1)}
        onMouseLeave={() => changeDispay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  const changeDispay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };
  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
