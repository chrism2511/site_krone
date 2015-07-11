let React = require('react');
class Pane extends React.Component {
  componentWillMount() {
      //componentHandler.upgradeElement(button, 'MaterialButton');
  }
  render() {
  	var sectionKey = this.props.sectionName.toLowerCase();
    return (
      <section id={sectionKey} className={'mdl-cell mdl-cell--12-col fullheight'}>{this.props.sectionName}</section>
    );
  }
};


module.exports = Pane;