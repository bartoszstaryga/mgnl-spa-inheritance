import React from 'react';
import ReactDOM from 'react-dom';
import { EditablePage, EditorContextHelper } from '@magnolia/react-editor';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Text from './components/Text';
import List from './components/List';
import Item from './components/Item';

const config = {
  componentMappings: {
    'spa-lm:pages/Home': Home,
    'spa-lm:pages/Contact': Contact,
    'spa-lm:components/Text': Text,
    'spa-lm:components/List': List,
    'spa-lm:components/Item': Item,
  },
};

class App extends React.Component {
  state = {};

  async componentDidMount() {
    let templateAnnotations;
    const nodeName = '/spa-home';
    const nodePath = nodeName + window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');
    const pageRes = await fetch('/magnoliaAuthor/.rest/delivery/pages' + nodePath);
    const page = await pageRes.json();

    if (EditorContextHelper.inEditor()) {
      const templateAnnotationsRes = await fetch('/magnoliaAuthor/.rest/template-annotations/v1' + nodePath);

      templateAnnotations = await templateAnnotationsRes.json();
    }

    this.setState({ page, templateAnnotations });
  }

  render() {
    const { page, templateAnnotations } = this.state;

    return (
      <div className='App'>
        {page && config && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
