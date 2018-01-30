import React from 'react'
import Page from './page'

export default class PageProvider extends React.Component {
  render () {
    return (
      <div style={styles.pagesWrapper}>
        <Page number={this.props.page} min={this.props.min} max={this.props.max} />
        <Page number={this.props.page + 1} min={this.props.min} max={this.props.max} />
      </div>
    );
  }
}

const styles = {
  pagesWrapper: {
    textAlign: 'center'
  }
};
