import React from 'react';
import { array } from 'prop-types';
import GuideCard from '../guide-card/GuideCard';

const DisplayGuides = props => {
  const { guides } = props;
  const showGuides = guides.map(({title, location, _id}) => <GuideCard key={_id} id={_id} title={title} location={location} />)
  return(
    <div>
      { showGuides }
    </div>
  )
}

DisplayGuides.propTypes = {
  guides: array
}

export default DisplayGuides;