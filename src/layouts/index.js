import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

export default class TemplateWrapper extends React.Component {
  render () {
    return (
      <div style={styles.wrapper}>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
          {this.props.children()}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const styles = {
  wrapper: {
    background: '#fff',
    height: '100%',
    width: '100%',
    padding: '100px 50px'
  }
};
