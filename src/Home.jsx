import React from 'react';


export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.onload = function() {
      (adsbygoogle = window.adsbygoogle || []).push({});
  });
  }

  render() {
    return (
      <React.Fragment>
        sdfsdf
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2102496211345907"
          data-ad-slot="9510073568"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        sdfsdf
      </React.Fragment>
    );
  }
}