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
    var sections = "Splash,What,Where,How,Book,Contact".split(",");
    for (var section of sections) {
      links.push(<TargetButton key={section} targetName={section} />);
      panes.push(<Pane key={section} sectionName={section} />);
    };
    return (
      <div>
         <nav className="navbar navbar-inverse transparent navbar-fixed-top" role="navigation">
          <nav className="navbar-inner">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="example-nav-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    {links}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
        <main>
          {panes}
        </main>
      </div>
    );
  }

};

module.exports = Main;