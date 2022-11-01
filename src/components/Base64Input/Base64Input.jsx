import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../ThemeProvider';
import Button from '../Button/Button';
import SettingsLabel from '../SettingsLabel/SettingsLabel';
import Background from '../Background/Background';
import Dropzone from '../Dropzone/Dropzone';
import DropPlaceholder from '../DropPlaceholder/DropPlaceholder';
// import example from './example';
import classes from './Base64Input.styles.less';

export default function Base64Input({
  value,
  onChange,
  errors,
  onFilesDrop,
  clearData,
  dropLabel,
  title,
  result,
  formatFileName = (f) => f,
}) {
  const [theme] = useTheme();
  const formattedErrors = errors.map((error, index) => (
    <p className={classes.error} key={index}>
      Failed to parse or minify file {formatFileName(error)}
    </p>
  ));
  return (
    <div className={classes[theme]}>
      <Dropzone accepts="*" onDrop={onFilesDrop} />
      {title!=="Decode from Base64" && <DropPlaceholder onFileAdd={(file) => onFilesDrop([file])}> Drop a file to the browser window to convert it to base64 format</DropPlaceholder>}
      <Background className={classes.wrapper}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>{title}</SettingsLabel>
          <Button onClick={() => clearData()}>Clear data</Button>
        </div>
        <textarea
          placeholder={`${title} here`}
          className={classes.input}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {formattedErrors.length > 0 && <div className={classes.errors}>{formattedErrors}</div>}
      </Background>
    </div>
  );
}

Base64Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilesDrop: PropTypes.func.isRequired,
  dropLabel: PropTypes.string.isRequired,
  formatFileName: PropTypes.func,
  result: PropTypes.object
};
