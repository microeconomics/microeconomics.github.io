import React from 'react'
import propTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'

export default class PageProvider extends React.Component {
  static propTypes = {
    number: propTypes.number.isRequired
  }

  normalize (number) {
    if (number < 10) return '00' + number;
    if (number < 100) return '0' + number;
    if (number < 1000) return '' + number;
  }

  render () {
    const { number, min, max } = this.props;
    const correctedPageNumber = this.normalize(number);
    return number > max || number < min
      ? <img style={styles.image} src={withPrefix(`/pages/default.png`)} />
      : <img style={styles.image} src={withPrefix(`/pages/${correctedPageNumber}.png`)} />;
  }
}

const styles = {
  image: {
    background: '#fff',
    width: '48%',
    dispay: 'inline-block',
    margin: '0',
    verticalAlign: 'top'
  }
};

// 2980 × 3855
