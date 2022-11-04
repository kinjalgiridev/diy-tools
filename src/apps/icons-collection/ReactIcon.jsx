import React from 'react';
import * as FontAwesome from "react-icons/fa";

export default function ReactIcon({Type,ItemData}) {
    const beer = React.createElement(FontAwesome[ItemData]);
  return (
    <div style={{ fontSize: 24 }}>{beer}</div>
  );
}
