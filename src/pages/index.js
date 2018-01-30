import React from 'react'
import PageProvider from '../components/pageProvider'
import Link from 'gatsby-link'
import Header from '../components/header'

export const MIN_PAGE = 1;
export const MAX_PAGE = 690;

export default class IndexPage extends React.Component {
  state = {
    page: 1
  }

  correctPage (page) {
    const number = +page;
    if (typeof number !== 'number' || isNaN(number)) return this.state.page;
    if (number < MIN_PAGE) return MIN_PAGE;
    if (number > MAX_PAGE) return MAX_PAGE;
    return number;
  }

  onPrevious () {
    this.setState({
      page: this.correctPage(this.state.page - 2)
    });
  }

  onNext () {
    this.setState({
      page: this.correctPage(this.state.page + 2)
    });
  }

  update (newPage) {
    this.setState({
      page: this.correctPage(newPage)
    });
  }

  render () {
    return (
      <div>
        <Header
          page={this.state.page}
          min={MIN_PAGE}
          max={MAX_PAGE}
          onPrevious={() => this.onPrevious()}
          onNext={() => this.onNext()}
          onUpdate={(newPage) => this.update(newPage)}
        />
        <PageProvider
          page={this.state.page}
          min={MIN_PAGE}
          max={MAX_PAGE}
        />
      </div>
    );
  }
}
