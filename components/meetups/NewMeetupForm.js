import { useRef, useState } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const isEmpty = (value) => value.trim() === '';

function NewMeetupForm(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    image: true,
    address: true,
    description: true,
  });

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredImageIsValid = !isEmpty(enteredImage);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredDescriptionIsValid = !isEmpty(enteredDescription);

    setFormInputsValidity({
      title: enteredTitleIsValid,
      image: enteredImageIsValid,
      address: enteredAddressIsValid,
      description: enteredDescriptionIsValid,
    });

    const formIsValid = enteredTitleIsValid && enteredImageIsValid && enteredAddressIsValid && enteredDescriptionIsValid;

    if (!formIsValid) {
      return;
    }

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  const titleControlClasses = `${classes.control} ${formInputsValidity.title ? '' : classes.invalid}`;
  const imageControlClasses = `${classes.control} ${formInputsValidity.image ? '' : classes.invalid}`;
  const addressControlClasses = `${classes.control} ${formInputsValidity.address ? '' : classes.invalid}`;
  const descriptionControlClasses = `${classes.control} ${formInputsValidity.description ? '' : classes.invalid}`;

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={titleControlClasses}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' ref={titleInputRef} />
          {!formInputsValidity.title && <p>Title cannot be empty!</p>}
        </div>
        <div className={imageControlClasses}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' ref={imageInputRef} />
          {!formInputsValidity.image && <p>Please enter a valid image URL!</p>}
        </div>
        <div className={addressControlClasses}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInputRef} />
          {!formInputsValidity.address && <p>Address cannot be empty!</p>}
        </div>
        <div className={descriptionControlClasses}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
          {!formInputsValidity.title && <p>Description cannot be empty!</p>}
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
