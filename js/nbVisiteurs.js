'use strict';

const e = React.createElement;

class LikeButton extends React.Component { 
    render() {
      return 'nb visiteur:';
    }
  }
/*
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
*/
const domContainer = document.querySelector('#nb_visiteur');
ReactDOM.render(e(LikeButton), domContainer);
//ReactDOM.render(LikeButton, domContainer);