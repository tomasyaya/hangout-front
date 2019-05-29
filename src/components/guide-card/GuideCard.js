import React from 'react';
import { string } from 'prop-types';

const GuideCard = props => {

  const { title, location } = props;

  return(
    <div>
      <p>{ title }</p>
      <p>{ location }</p>
    </div>
  )
}

GuideCard.propTypes = {
  title: string,
  location: string
}

export default GuideCard;