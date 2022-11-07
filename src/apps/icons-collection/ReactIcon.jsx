import React from 'react';
import * as icons from 'react-icons/all'

export default function ReactIcon({ItemData}) {
    const icon = React.createElement(icons[ItemData]);
  return (
    <div style={{ fontSize: 30 }}>{icon}</div>
  );
}
