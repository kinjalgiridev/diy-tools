import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import { generateRawData, generateJsonData } from '../generator';
import classes from './Output.styles.less';

export default function Output({ type, fields, amount, seed = null }) {
  const [theme] = useTheme();
  const [rawData, setRawData] = useState(generateRawData());
  const [jsonData, setJsonData] = useState(generateJsonData(fields, amount));

  useEffect(() => {
    setRawData(generateRawData());
    setJsonData(generateJsonData(fields, amount));
  }, [seed]);

  switch (type) {
    case 'default':
      const items = rawData.map((item) => (
        <div key={item.key} className={classes.rawItem}>
          <div className={classes.key}>{item.key}</div>
          <div className={classes.value}>{item.data}</div>
        </div>
      ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{items}</Background>;
    case 'login':
      const loginitems = rawData
        .filter((person) => person.key === 'Password' || person.key === 'Username')
        .map((item) => (
          <div key={item.key} className={classes.rawItem}>
            <div className={classes.key}>{item.key}</div>
            <div className={classes.value}>{item.data}</div>
          </div>
        ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{loginitems}</Background>;
    case 'profile':
      const profileitems = rawData
        .filter((person) => person.key === 'Name' || person.key === 'Email' || person.key === 'Avatar' || person.key === 'Job title' || person.key === 'Phone')
        .map((item) => (
          <div key={item.key} className={classes.rawItem}>
            <div className={classes.key}>{item.key}</div>
            <div className={classes.value}>{item.data}</div>
          </div>
        ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{profileitems}</Background>;
    case 'company':
      const companyitems = rawData
        .filter((person) => person.key === 'Company' || person.key === 'Domain' || person.key === 'Ip' || person.key === 'Address' || person.key === 'City')
        .map((item) => (
          <div key={item.key} className={classes.rawItem}>
            <div className={classes.key}>{item.key}</div>
            <div className={classes.value}>{item.data}</div>
          </div>
        ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{companyitems}</Background>;
    case 'address':
      const addressitems = rawData
        .filter((person) => person.key === 'Address' || person.key === 'Zip' || person.key === 'Latitude' || person.key === 'Longitude' || person.key === 'Bitcoin address' || person.key === 'City')
        .map((item) => (
          <div key={item.key} className={classes.rawItem}>
            <div className={classes.key}>{item.key}</div>
            <div className={classes.value}>{item.data}</div>
          </div>
        ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{addressitems}</Background>;
    case 'date':
      const dateitems = rawData
        .filter((person) => person.key === 'Date')
        .map((item) => (
          <div key={item.key} className={classes.rawItem}>
            <div className={classes.key}>{item.key}</div>
            <div className={classes.value}>{item.data}</div>
          </div>
        ));

      return <Background className={cx(classes.wrapper, classes[theme])}>{dateitems}</Background>;
    default:
      return (
        <Background className={cx(classes.wrapper, classes[theme])}>
          <Highlight>{JSON.stringify(jsonData, null, 2)}</Highlight>
        </Background>
      );
  }
}

Output.propTypes = {
  type: PropTypes.oneOf(['default', 'json']).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  amount: PropTypes.number.isRequired,
  seed: PropTypes.string,
};
