import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function ThumbComponent(props) {
  const { 'aria-valuenow': aria } = props;
  return (
    <div {...props}>
      {(aria) || 'Dimension'}
    </div>
  );
}

ThumbComponent.propTypes = {
  'aria-valuenow': PropTypes.number.isRequired,
};

const Container = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>QdtSlider</h3>
      <Typography gutterBottom>Default options: &#123; color: &apos; primary &apos; &#125;</Typography>
      <Slider
        ThumbComponent={ThumbComponent}
        valueLabelDisplay="auto"
        aria-label="QdtSlider"
        value={value}
        onChange={handleChange}
        min={0}
        step={1}
        max={100}
      />
      <Typography gutterBottom>options: &#123; color: &apos; secondary &apos; &#125;</Typography>
      <Slider
        ThumbComponent={ThumbComponent}
        color="secondary"
        valueLabelDisplay="auto"
        aria-label="QdtSlider"
        value={value}
        onChange={handleChange}
        min={0}
        step={1}
        max={100}
      />
    </>
  );
};
export default Container;
