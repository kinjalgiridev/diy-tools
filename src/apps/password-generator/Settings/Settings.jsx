import React from 'react';
import PropTypes from 'prop-types';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Button from '../../../components/Button/Button';
import Background from '../../../components/Background/Background';
import classes from './Settings.styles.less';

export default function Settings({
  onLengthChange,
  length,
  values, 
  onSubmit,
  copied,
  changeState,
}) {
  return (
    <Background className={classes.wrapper}>
      <h3 className={classes.label}>Password Generator</h3>
      <div className={classes.footer}>
        <div className={classes.length}>
          <div className={classes.label}>Password Length</div>
          <SliderInput value={length} min={1} max={20} onChange={onLengthChange} />
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.length}>
          <div className={classes.label}>Include Uppercase Letters</div>
          <input
            defaultChecked={values.includeUppercase}
            onClick={()=>changeState("setIncludeUppercase",values.includeUppercase)}
            type="checkbox"
            id="uppercase-letters"
            name="uppercase-letters"
          />
        </div>
        <div className={classes.length}>
          <div className={classes.label}>Include Lowercase Letters</div>
          <input
            defaultChecked={values.includeLowercase}
            onClick={()=>changeState("setIncludeLowercase",values.includeLowercase)}
            type="checkbox"
            id="lowercase-letters"
            name="lowercase-letters"
          />
        </div>
        <div className={classes.length}>
          <div className={classes.label}>Include Numbers</div>
          <input
            defaultChecked={values.includeNumbers}
            onClick={()=>changeState("setIncludeNumbers",values.includeNumbers)}
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
          />
        </div>
        <div className={classes.length}>
          <div className={classes.label}>Include Symbols</div>
          <input
            defaultChecked={values.includeSymbols}
            onClick={()=>changeState("setIncludeSymbols",values.includeSymbols)}
            type="checkbox"
            id="include-symbols"
            name="include-symbols"
          />
        </div>
        <Button
          className={classes.control}
          onClick={onSubmit}
          disabled={copied}
          theme={copied ? 'success' : 'primary'}
        >
          {copied ? 'Copied to clipboard' : 'Generate and copy to clipboard'}
        </Button>
      </div>
    </Background>
  );
}

Settings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  copied: PropTypes.bool.isRequired,
  onLengthChange: PropTypes.func.isRequired,
 
};
