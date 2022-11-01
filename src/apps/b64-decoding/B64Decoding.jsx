import React, { useState, useLayoutEffect } from 'react';
import cx from 'classnames';
import { useDocumentTitle, useLocalStorage } from 'xooks';
import Highlight from '../../components/Highlight/Highlight'; 
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import DropPlaceholder from '../../components/DropPlaceholder/DropPlaceholder';
import Dropzone from '../../components/Dropzone/Dropzone';
import B64Worker from '../../workers/b64-decode.worker';
import classes from './B64Decoding.styles.less';
import Base64Input from '../../components/Base64Input/Base64Input';

const b64 = new B64Worker();

function generateCssExample(content) {
  return `.element {\n  background-image: url(${content});\n}`;
}

export default function B64Encoding() {
  useDocumentTitle('Base64 decoding');

  const ls = useLocalStorage({ key: '@omatsuri/b64-decoding', delay: 500 });
  const lsVal = useLocalStorage({ key: '@omatsuri/b64-decoding-value', delay: 500 });
  const transmittedValue = useLocalStorage({ key: '@omatsuri/conversion-after-compression/b64-decode' });
  const [value, setValue] = useState({ loading: false, error: null, content: lsVal.retrieve()|| '' });
  const [result, setResult] = useState({ loading: false, error: null, content: ls.retrieve()|| '' });

  const handleMessage = (event) => {
    console.log(event.data);
    const error = event.data instanceof Error;
    if (!error) {
      ls.save(event.data);
    }
    setResult({
      error,
      loading: false,
      content: error ? null : event.data,
    });
  };

  const postMessage = (file) => {
    b64.postMessage({ file });
  };

  useLayoutEffect(() => {
    b64.addEventListener('message', handleMessage);
    const transmittedContent = transmittedValue.retrieveAndClean();

    if (transmittedContent) {
      b64.postMessage({ content: transmittedContent });
    }

    return () => b64.removeEventListener('message', handleMessage);
  }, []);

  const handleChange = (text) => {
    setValue(text);
    lsVal.save(text);
    ls.save(text);
    setResult({ loading: true, content: null, error: null });
    b64.postMessage({ content: text });
  };

  const handleFilesDrop = (files) => {
    lsVal.save();
    if (files.length > 0) {
      postMessage(files[0]);
    }
  };

  const clearData = () => {
   lsVal.clean();
   ls.clean();
    setValue({ loading: false, error: null, content: ''});
    setResult({ loading: false, content: '', error: null });
  }
  return (
    <>
      <Base64Input
        value={value.content}
        onChange={handleChange}
        clearData={clearData}
        title={"Decode from Base64"}
        errors={result.error && value.trim().length > 0 ? ['input file'] : []}
        onFilesDrop={handleFilesDrop}
        accepts={undefined}
        dropLabel="Drop an SVG file to the browser window to optimize it and convert it to JSX"
      />
      {result.content && (
        <Background className={classes.wrapper}>
          <div className={classes.section}>
            <SettingsLabel>Raw base64</SettingsLabel>
            <Highlight>{result.content}</Highlight>
          </div>
        </Background>
      )}

      {(value.content==='' && result.content) && 
        <Background className={classes.wrapper}>
        <div className={classes.section}>
          <SettingsLabel>Use as CSS background</SettingsLabel>
          <Highlight>{generateCssExample(result.content)}</Highlight>
        </div>
        </Background>
      }
    </>
  );
}
