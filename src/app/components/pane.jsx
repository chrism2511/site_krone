let React = require('react');
class Pane extends React.Component {
  componentWillMount() {
      //componentHandler.upgradeElement(button, 'MaterialButton');
  }
  render() {
  	var sectionKey = this.props.sectionName.toLowerCase();
    return (
      <section id={sectionKey} className={'mdl-cell mdl-cell--12-col fullheight'}>
      	<h1>{this.props.sectionName} is the section</h1>
      	<div className="thing">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque lorem nec sapien fringilla, sit amet pulvinar odio egestas. Nulla volutpat libero id metus sodales ultricies. Nunc tincidunt metus nec augue laoreet, porta bibendum lacus lobortis. In in nisl est. Morbi finibus ac sapien a porttitor. Integer malesuada purus sem, non porta mi venenatis sed. Quisque vel sollicitudin purus. Aliquam pretium tincidunt dolor eu laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

</div>
      	<div className="thing">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque lorem nec sapien fringilla, sit amet pulvinar odio egestas. Nulla volutpat libero id metus sodales ultricies. Nunc tincidunt metus nec augue laoreet, porta bibendum lacus lobortis. In in nisl est. Morbi finibus ac sapien a porttitor. Integer malesuada purus sem, non porta mi venenatis sed. Quisque vel sollicitudin purus. Aliquam pretium tincidunt dolor eu laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

</div>
      </section>
    );
  }
};


module.exports = Pane;