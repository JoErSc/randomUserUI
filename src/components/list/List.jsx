import React from "react";
import './list.css';
import ListFilter from './filter/ListFilter';
import ListContent from './ListContent';

export default function List() {

  return (
    <div>
      <ListFilter/>
      <ListContent/>
    </div>
  );
}
