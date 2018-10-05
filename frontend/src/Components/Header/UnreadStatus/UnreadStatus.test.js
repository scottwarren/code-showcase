import React from 'react';
import ReactDOM from 'react-dom';
import UnreadStatus from './UnreadStatus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnreadStatus isUnread={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
