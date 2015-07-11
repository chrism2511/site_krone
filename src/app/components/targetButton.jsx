let React = require('react');
class TargetButton extends React.Component {
  handleClick(event) {
    var location = event.target.getAttribute('target');
    document.location.href=location;
  }
  render() {
    return (
      <button className="mdl-button mdl-js-button mdl-button--secondary" target={"#" + this.props.targetName.toLowerCase()} onClick={this.handleClick}>{this.props.targetName}</button>
    );
  }
};


module.exports = TargetButton;