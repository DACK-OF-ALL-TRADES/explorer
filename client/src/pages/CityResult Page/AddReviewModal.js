import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Rating, Modal } from "semantic-ui-react";
import { ADD_REVIEW } from "../../utils/mutations";
import { QUERY_REVIEWS } from "../../utils/queries";
import { ToastsContainer, ToastsStore } from "react-toasts";

function AddReviewModal({ city, country, username }) {
  const { data } = useQuery(QUERY_REVIEWS);
  const reviewData = data?.reviews || [];
  //
  let reviewHistory = false;
  reviewData.forEach((review) => {
    if (review.username === username && review.city === city) {
      reviewHistory = true;
    }
  });
  //
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    city: city,
    country: country,
    review: "",
    username: username,
    rating: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleRatingChange = (event, data) => {
    const rating = data.rating;

    setFormState({
      ...formState,
      rating: rating,
    });
  };
  const [addReview] = useMutation(ADD_REVIEW);

  const handleSubmit = async () => {
    try {
      if (formState.review.length === 0) {
        ToastsStore.warning(`Please enter a review...`);
      } else if (formState.rating === null) {
        ToastsStore.warning(`Please enter a rating...`);
      } else if (reviewHistory === true) {
        ToastsStore.warning(`Already have a review for this city...`);
      } else {
        await addReview({
          variables: {
            city: formState.city,
            country: formState.country,
            username: formState.username,
            review: formState.review,
            rating: formState.rating,
          },
        });
        ToastsStore.success(`Success! Added review to ${formState.city}`);
        setFormState({ review: "" });
        setOpen(false);
      }
    } catch (err) {
      ToastsStore.error(`${err}`);
      console.log(err);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button data-aos="zoom-in" color="violet">
          Add a Review
        </Button>
      }
      size="mini"
    >
      <ToastsContainer store={ToastsStore} />
      <Modal.Header>Add a Review</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form>
            <Form.TextArea
              label="Share your thoughts"
              placeholder="Write your experience..."
              value={formState.review}
              name="review"
              onChange={handleChange}
              required
            />
            <Form.Field>
              <label>Rating</label>
              <Rating
                icon="star"
                name="rating"
                maxRating={5}
                onRate={handleRatingChange}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Return
        </Button>
        <Button
          content="Submit Review"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default AddReviewModal;
