import React from "react";
import PropTypes from "prop-types";
import { withWidth } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import feedback1 from "../../dummy_data/images/feedback-01.png";
import feedback2 from "../../dummy_data/images/feedback-02.png";
import feedback3 from "../../dummy_data/images/feedback-03.png";
import feedback4 from "../../dummy_data/images/feedback-04.png";
import feedback5 from "../../dummy_data/images/feedback-05.png";
import "./FeedbackSection.css";




function CarouselFeedback(props)
{
  let items = [
    {
      img: feedback1
    },
    {
      img: feedback2
    },
    {
      img: feedback3
    },
    {
      img: feedback4
    },
    {
      img: feedback5
    }
  ]

  return (
    <Carousel>
      {
        items.map( item => <Item item={item} /> )
      }
    </Carousel>
  )
}


function Item(props)
{
  return (

    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid">
        <Paper className='feedbackBox'>
          <a href="https://www.upwork.com/fl/stasfedorko" className='feedbackLink'>
            <img
              src={props.item.img}
              alt="feedback"
              className='feedbackImg'
            />
          </a>
        </Paper>
      </div>
    </div>
  )
}




CarouselFeedback.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(CarouselFeedback);


