import React from 'react';
import {
  Accessories,
  BustPose,
  Face,
  FacialHair,
  Hair,
  StandingPose,
  StandingPoseType,
  SittingPose,
} from 'react-peeps';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Settings.styles.less';
import Tabs from '../../../components/Tabs/Tabs';
import { useTheme } from '../../../ThemeProvider';
import { distinguishBodyViewbox } from '../../../utils/view-box';
import Background from '../../../components/Background/Background';

export default function Settings({ handlers, type, onTypeChange, accessory, body, face, hair, facialHair }) {
  const [theme] = useTheme();
  const styles = {
    peepStyle: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    circleStyle: {
      backgroundColor: '#F3D34A',
      width: 70,
      height: 70,
      alignSelf: 'center',
      borderRadius: 135,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: 'black',
      borderStyle: 'solid',
    },
    showcaseWrapper: {
      display: 'flex',
      justifyContent: 'start',
      height: '-webkit-fill-available',
    },
  };
  const adjustSvgViewbox = (piece) => {
    switch (type) {
      case 'accessories':
        return '-75 -125 500 400';
      case 'body':
        return distinguishBodyViewbox(piece);
      case 'hair':
        return '0 -100 550 750';
      case 'facialhair':
        return '-50 -100 500 400';
      case 'face':
        return '0 -20 300 400';
      default:
        break;
    }
  };
  const renderPiece = (piece) => {
    switch (type) {
      case 'accessories':
        return React.createElement(Accessories[piece]);
      case 'body':
        return React.createElement(
          BustPose[piece] ||
              SittingPose[piece] ||
              StandingPose[piece]
        );
      case 'hair':
        return React.createElement(Hair[piece]);
      case 'facialhair':
        return React.createElement(FacialHair[piece]);
      case 'face':
        return React.createElement(Face[piece]);
      default:
        break;
    }
  };
  const types = [
    { value: 'accessories', label: 'Accessories' },
    { value: 'body', label: 'Body' },
    { value: 'face', label: 'Face' },
    { value: 'facialhair', label: 'FacialHair' },
    { value: 'hair', label: 'Hair' },
  ];
  const data = {
    accessories: Object.keys(Accessories),
    body: [
      ...Object.keys(BustPose),
      ...Object.keys(SittingPose),
      ...Object.keys(StandingPose),
    ],
    face: Object.keys(Face),
    facialhair: Object.keys(FacialHair),
    hair: Object.keys(Hair),
  };
  return (
    <>
      <Background className={cx(classes.wrapper, classes[theme], classes.pd15)}>
        <Tabs data={types} active={type} onTabChange={onTypeChange} />
        <ul className={classes.scroll}>
          {
        data[type].map((element) => (
          <li key={type + element} className={cx(classes[theme], classes.label)}>
            <svg
              className="pieceListSvg"
              onClick={() => handlers(type, element)}
              viewBox={adjustSvgViewbox(type)}
              width="70"
              height="70"
            >
              {renderPiece(element)}
            </svg>
            <h4 onClick={() => handlers(type, element)} className={element === accessory || element === body || element === face || element === hair || element === facialHair ? classes.active : ''}>{element}</h4>
          </li>
        ))
      }
        </ul>
      </Background>
    </>
  );
}
Settings.propTypes = {
  type: PropTypes.oneOf(['accessories', 'body', 'face', 'facialhair', 'hair']).isRequired,
  onTypeChange: PropTypes.func.isRequired,
};
