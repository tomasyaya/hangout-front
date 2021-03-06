import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteGuide } from '../../redux/actions/guideActions';
import './guideCard.css';

const GuideCard = props => {

  const { title, location, deleteGuide, id } = props;

  return(
    <div className="guide-card">
      <div>
        <p>{ title }</p>
        <p>{ location }</p>
      </div>
      <div className="guide-card-actions">
        <button onClick={() => deleteGuide(id)}>
          x
        </button>
        <Link to={`/guides/${id}`}>
          more
        </Link>
      </div>
    </div>
  )
}

GuideCard.propTypes = {
  title: string,
  location: string,
  id: string
}

export default connect(null, { deleteGuide })(GuideCard);