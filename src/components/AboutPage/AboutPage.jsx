import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This Webpage will show info about the current version of the application. It will also show what version of league it's set for as well as list the upcoming additions to the application.</p>
      </div>
    </div>
  );
}

export default AboutPage;
