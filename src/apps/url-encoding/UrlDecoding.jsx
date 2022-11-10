import React, { useLayoutEffect, useState } from 'react';
import { useDocumentTitle, useLocalStorage } from 'xooks';
import Background from '../../components/Background/Background';
import Base64Input from '../../components/Base64Input/Base64Input';
import classes from '../../components/Base64Input/Base64Input.styles.less';
import Highlight from '../../components/Highlight/Highlight';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import UrlWorker from '../../workers/url-decoding.worker';
// export const UrlEncoding = () => {
// function UrlEncoding() {
//   const UrlText = (UrlValue) => {
//       const encodedURL = encodeURIComponent(`${UrlValue}`);
//       console.log('UrlValue', encodedURL);
//       console.log('url', `https://www.google.com/search?q=${encodedURL}`);
//   };

//   return (
//     <>
//       <div> URL Encoding </div>
//       <textarea name="url-encoding" id="" cols="60" rows="10" onChange={(e) => UrlText(e.target.value)} />
//     </>
//   );
// }
// export default UrlEncoding;

const Url = new UrlWorker();

export default function UrlDecoding() {
  useDocumentTitle('Url decoding');

  const ls = useLocalStorage({ key: '@omatsuri/url-decoding', delay: 500 });
  const lsVal = useLocalStorage({ key: '@omatsuri/url-decoding-value', delay: 500 });
  const transmittedValue = useLocalStorage({ key: '@omatsuri/conversion-after-compression/Url' });
  const [value, setValue] = useState({ loading: false, error: null, content: lsVal.retrieve() || '' });
  const [result, setResult] = useState({ loading: false, error: null, content: ls.retrieve() || '' });

  const handleMessage = (event) => {
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

  useLayoutEffect(() => {
    Url.addEventListener('message', handleMessage);
    const transmittedContent = transmittedValue.retrieveAndClean();

    if (transmittedContent) {
      Url.postMessage({ content: transmittedContent });
    }

    return () => Url.removeEventListener('message', handleMessage);
  }, []);

  const handleChange = (text) => {
    setValue(text);
    lsVal.save(text);
    ls.save(text);
    setResult({ loading: true, content: null, error: null });
    Url.postMessage({ content: text });
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
    setValue({ loading: false, error: null, content: '' });
    setResult({ loading: false, content: '', error: null });
  };

  return (
    <>
      <Base64Input
        value={value.content}
        onChange={handleChange}
        clearData={clearData}
        title="Decode Url"
        errors={result.error && value.trim().length > 0 ? ['input file'] : []}
        onFilesDrop={handleFilesDrop}
        accepts={undefined}
      />
      {result.content && (
        <Background className={classes.wrapper}>
          <div className={classes.section}>
            <SettingsLabel>Raw encode</SettingsLabel>
            <Highlight>{result.content}</Highlight>
          </div>
        </Background>
      )}
    </>
  );
}
