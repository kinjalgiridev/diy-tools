import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import Background from '../../../components/Background/Background';
import classes from './Preview.styles.less';

export default function Preview({ text }) {
  const [theme] = useTheme();

  return <Background className={cx(classes.wrapper, classes[theme])}><h2 className={cx(classes.label, classes[theme])} style={{textAlign:'center'}}>{text}</h2></Background>;
}

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};
