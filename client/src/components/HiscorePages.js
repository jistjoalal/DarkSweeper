import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HiscorePage from './HiscorePage';
import TitleBar from './TitleBar';

import '../index.scss';

class HiscorePages extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
    }
  }
  render() {
    const { page } = this.state;
    return (
      <div className="HiscorePage">
        <TitleBar title="Hiscores" />

        <HiscorePage page={page} />

        <footer>
          <button onClick={this.prevPage} className={`App-button`}>
            <i className="fa fa-3x fa-arrow-left"></i>
          </button>
          <Link to="/">
            <i className="fa fa-3x fa-undo"></i>
          </Link>
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