import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGuide } from '../../redux/actions/guideActions';

const GuideDetail = props => {
  const { id } = props.match.params;
  const { guide, getGuide } = props;
  console.log(guide)

  useEffect(() => {
    ( async () => {
      try {
        await getGuide(id)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [])
  
  return(
    <div>
      <h3>Guide</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    guide: state.guide.guide
  }
}

export default connect(mapStateToProps, { getGuide })(withRouter(GuideDetail));