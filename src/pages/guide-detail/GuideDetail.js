import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGuide } from '../../redux/actions/guideActions';

const GuideDetail = props => {

  const { id } = props.match.params;
  const { guide , getGuide } = props;
  
  const [ load, setLoad ] = useState(false);

  const title = load ? guide.title : null;
  const location = load ? guide.location : null;

  useEffect(() => {
    ( async () => {
      try {
        await getGuide(id)
        setLoad(true)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [])
  
  return(
    <div>
      <h3>{ title }</h3>
      <p>{ location }</p>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    guide: state.guide.guide
  }
}

export default connect(mapStateToProps, { getGuide })(withRouter(GuideDetail));