import React from 'react';
import { EditableArea } from '@magnolia/react-editor';
import { HomeHeader } from './Home';

function Contact(props) {
  const { title, main } = props;

  return (
    <>
      <HomeHeader />
      <h1>{title}</h1>
      {main && <EditableArea content={main} />}
    </>
  );
}

export default Contact;
