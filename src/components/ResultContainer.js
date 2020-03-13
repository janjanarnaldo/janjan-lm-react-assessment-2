import React from 'react';

const DEFAULT_IMAGE = 'https://semantic-ui.com/images/wireframe/image.png';
const DEFAULT_DECRIPTION = 'https://semantic-ui.com/images/wireframe/short-paragraph.png';

export default function ResultContainer(props) {
  const { results, isLoading, component: ChildComponent } = props;

  const renderResults = () => {
    return results.map((result, idx) => <ChildComponent key={`result-${idx}`} {...result} />)
  }

  const renderPlaceholder = () => {
    return [0, 1, 2].map(v => <div className="item" key={`loader-${v}`}>
      <div className="ui small image">
        <img src={DEFAULT_IMAGE} alt="none" />
      </div>
      <div className="content">
        <div className="description">
          <img src={DEFAULT_DECRIPTION} alt="loader" className="ui wireframe image" />
        </div>
      </div>
    </div>);
  }

  return <div className="ui segment container">
    <div className="ui relaxed divided items">
      { isLoading ? renderPlaceholder() : renderResults() }
    </div>
  </div>;
}
