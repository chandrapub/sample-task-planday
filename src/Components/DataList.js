import React from 'react';
import ListItem from './ListItem';

export default function DataList({data}) {
  return (
      <div className="data-list">
        {data === [] ? 'no results found' : data.map((item, index) => <ListItem key={index} currentData={item} />)}
      </div>
  )
};
