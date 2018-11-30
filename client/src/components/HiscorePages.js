import React, {Component} from 'react';
import HiscorePage from './HiscorePage';

import '../index.scss';

class HiscorePages extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
    }
  }
  render() {
    const { toggleView } = this.props;
    const { page } = this.state;
    return (
      <div className="HiscorePage">
        <h1>Hiscores</h1>

        <HiscorePage page={page} />

        <footer>
          <button onClick={this.prevPage} className={`App-button`}>
            <i className="fa fa-3x fa-arrow-left"></i>
          </button>
          <button onClick={toggleView} className={`App-button`}>
            <i className="fa fa-3x fa-undo"></i>
          </button>
          <button onClick={this.nextPage} className={`App-button`}>
            <i className="fa fa-3x fa-arrow-right"></i>
          </button>
        </footer>
     </div>
    )
  }

  prevPage = () => {
    this.setState(state => {
      if (state.page > 0) {
        return { page: state.page - 1 };
      }
    })
  }

  nextPage = () => {
    this.setState(state => ({ page: state.page + 1 }))
  }
}

export default HiscorePages;