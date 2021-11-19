import React, { useState, useEffect } from 'react';
import { EditableArea } from '@magnolia/react-editor';

export function HomeHeader() {
  const [header, setHeader] = useState();

  useEffect(() => {
    async function getHeader() {
      const res = await fetch('/magnoliaAuthor/.rest/delivery/pages/spa-home/header');
      const json = await res.json();

      setHeader(json);
    }

    getHeader();
  }, []);

  return header ? <EditableArea content={header} /> : null;
}

function Home(props) {
  const { title, main, header } = props;

  return (
    <>
      {header && <EditableArea content={header} />}
      <h1>{title}</h1>
      {main && <EditableArea content={main} />}
    </>
  );
}

export default Home;
