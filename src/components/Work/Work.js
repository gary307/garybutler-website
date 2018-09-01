import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    const { workSelection, closeWork } = this.props;

    return (
      <div className="work">
        <div class="gb-closeWork" onClick={closeWork}>
          <h4>Back to Home</h4>
        </div>
        <div className="work__row">
          <div className="work__copy">
            <h2>{workSelection.fields.title}</h2>
            <p>{workSelection.fields.copy}</p>
            <p>{workSelection.fields.skills}</p>
          </div>
          <div className="work__image">
            {workSelection.fields.images.map(image => (
              <img src={image.fields.file.url} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
