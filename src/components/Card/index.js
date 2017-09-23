import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FlipCard from 'react-flipcard'
import FontAwesome from 'react-fontawesome'
import './Card.css'


class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false
    }
    this.showBack = this.showBack.bind(this)
    this.showFront = this.showFront.bind(this)
    this.handleOnFlip = this.handleOnFlip.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

  }

  showBack() {
    this.setState({
      isFlipped: true
    })
  }

  showFront() {
    this.setState({
      isFlipped: false
    })
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.focus()
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront()
    }
  }

  render() {
    return (
      <li className={this.props.completed ? 'completed' : 'not-completed'}>
        <FlipCard disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        >
          {/* The first child is used as the front of the card */}
          <div>
            <div className="cardValueWrapper">
              <div className="cardValue">
                {this.props.front}
              </div>
            </div>
            <button type="button" className="remove" onClick={this.props.removeClick}><FontAwesome name='trash' /></button>
            <button type="button" onClick={this.showBack}><FontAwesome name='arrow-circle-right' /></button>
            <button type="button" className="done" onClick={this.props.onClick}><FontAwesome name={this.props.completed ? 'check-circle' : 'check-circle-o'} /></button>
          </div>
          {/* The second child is used as the back of the card */}
          <div>
            <div className="cardValueWrapper">
              <div className="cardValue">
                {this.props.back}
              </div>
            </div>
            <button type="button" className="done" onClick={this.props.onClick}><FontAwesome name={this.props.completed ? 'check-circle' : 'check-circle-o'} /></button>
            <button type="button" ref="backButton" onClick={this.showFront}><FontAwesome name='arrow-circle-left' /></button>
          </div>
        </FlipCard>
      </li>
    )
  }
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
}

export default Card
/*
const Card = ({ onClick, completed, front, back }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <FlipCard disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
    >

          <div>
            <div>{front}</div>
            <button type="button" onClick={this.showBack}>Show back</button>
          </div>

          <div>
            <div>{back}</div>
            <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
          </div>
        </FlipCard>

  </li>
)

Card.getInitialState = () => {
  return {
    isFlipped: false
  };
}

Card.showBack = () => {
  this.setState({
    isFlipped: true
  });
}

Card.showFront = () => {
  this.setState({
    isFlipped: false
  });
}

Card.handleOnFlip = (flipped) => {
  if (flipped) {
    this.refs.backButton.getDOMNode().focus();
  }
}

Card.handleKeyDown = (e) => {
  if (this.state.isFlipped && e.keyCode === 27) {
    this.showFront();
  }
}


Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
}

export default Card
*/
