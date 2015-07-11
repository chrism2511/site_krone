/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let Pane = require('./pane.jsx');
let TargetButton = require('./targetButton.jsx');
//let mui = require('material-ui');
//let RaisedButton = mui.RaisedButton;
//let Dialog = mui.Dialog
//let ThemeManager = new mui.Styles.ThemeManager();
//let Colors = mui.Styles.Colors;

class Main extends React.Component {

  componentDidMount() {
    //componentHandler.upgradeAllRegistered();
  }
  render() {
    var panes = [];
    var links = [];
    var sections = "Home,Services,Region,Technology,Booking,Contact".split(",");
    for (var section in sections) {
      section = sections[section];
      links.push(<TargetButton key={section} targetName={section} />);
      panes.push(<Pane key={section} sectionName={section} />);
    };
    return (
      <div id='content'>
        <nav className="navbar">
            {links}
        </nav>
        <main>
          {panes}
        </main>
      </div>
    );
  }

};

module.exports = Main;