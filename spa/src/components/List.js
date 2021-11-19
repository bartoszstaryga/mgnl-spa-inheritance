import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

function List(props) {
  const { list } = props;

  return <div>{list && <EditableArea content={list} />}</div>;
}

export default List;
