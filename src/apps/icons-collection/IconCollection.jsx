import React, { useState } from 'react';
import cx from 'classnames';
import { useDocumentTitle, useLocalStorage, useClipboard } from 'xooks';
import { useTheme } from '../../ThemeProvider';
import Background from '../../components/Background/Background';
import Tabs from '../../components/Tabs/Tabs';
import Input from '../../components/Input/Input';
import classes from './IconCollection.styles.less';
import icons from './icons';
import Icon from 'supercons';
import Highlight from '../../components/Highlight/Highlight';
import ReactIcon from './ReactIcon';

const typesData = Object.keys(icons).map((tab) => ({ value: tab, label: tab }));

function searchSymbols(query, type) {
  if (!(type in icons)) {
    return [];
  }

  if (query.trim().length === 0) {
    return icons[type].data;
  }
  return icons[type].fuse.search(query).map(({ item }) => item);
}

export default function IconCollection() {
  useDocumentTitle('Icons collection');

  const [theme] = useTheme();
  const clipboard = useClipboard({ timeout: 1000 });
  const lsQuery = useLocalStorage({ key: '@diytool/icon-collection/search', delay: 200 });
  const lsType = useLocalStorage({ key: '@diytool/icon-collection/type', delay: 200 });
  const [query, setQuery] = useState(lsQuery.retrieve() || '');
  const [type, setType] = useState(lsType.retrieve() || 'supercons');
  const [copiedValue, setCopiedValue] = useState(null);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    lsQuery.save(event.target.value);
  };

  const handleTypeChange = (value) => {
    setType(value);
    lsType.save(value);
  };

  const handleCopy = (value) => {
    setCopiedValue(value);
    clipboard.copy(value);
  };

  const results = searchSymbols(query, type).map((Item, index) => (
    <tr className={classes.item} key={index}>
      <td className={classes.name}>
        <button
          className={cx(classes.control, {
            [classes.copied]: Item === copiedValue && clipboard.copied,
          })}
          type="button"
          onClick={() => handleCopy(Item)}
        >
          {Item}
        </button>
      </td>
      <td>
        <button
          className={cx(classes.control, {
            [classes.copied]: type==="supercons"?`<Icon glyph=${Item} />`:`<${Item} />` === copiedValue && clipboard.copied,
          })}
          type="button"
          onClick={() => handleCopy(type==="supercons"?`<Icon glyph=${Item} />`:`<${Item} />`)}
        >
          {type==="supercons"?<Icon glyph={Item} size={30} />:<ReactIcon Type={icons[type].lib} ItemData={Item} /> }
          
        </button>
      </td>
    </tr>
));

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.inputWrapper}>
        <Tabs data={typesData} active={type} onTabChange={handleTypeChange} />
        <Input
          className={classes.input}
          value={query}
          onChange={handleQueryChange}
          type="text"
          placeholder="Search icons..."
        />
      </div>

      {type === 'supercons' && (
        <>
          <div className={classes.inputWrapper}>
            <Highlight>
              yarn add supercons<br></br># npm i supercons
            </Highlight>
          </div>
          <div className={classes.inputWrapper}>
            <Highlight className={classes.mt20}>{`import React from 'react'
import Icon from 'supercons'

export default () => (
  <div style={{ color: 'magenta' }}>
    <Icon glyph="like" size={128} />
    <Icon glyph="cloud" size={32} />
  </div>
)`}</Highlight>
           <div className={classes.name} style={{textAlign:'right'}}>Attribution:<a target="_blank" href="https://supercons.vercel.app/">Supercons</a> </div>
          </div>
        </>
      )}
      <table className={classes.results}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>{results}</tbody>
      </table>
    </Background>
  );
}
