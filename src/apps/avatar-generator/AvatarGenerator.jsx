import React, { useState, useEffect } from 'react';
import { useDocumentTitle, useLocalStorage } from 'xooks';
import {
  Accessories,
  BustPose,
  Face,
  FacialHair,
  Hair,
  StandingPose,
  SittingPose,
} from 'react-peeps';
import Settings from './Settings/Settings';
import Background from '../../components/Background/Background';
import classes from './Settings/Settings.styles.less';
import Preview from './Preview/Preview';

//Object.keys(Accessories[Math.floor(Math.random() * Accessories.length)])
const Body = [
  ...Object.keys(BustPose),
  ...Object.keys(SittingPose),
  ...Object.keys(StandingPose),
];
const INITIAL_VALUES = {
  type: 'accessories',
  accessory: Object.keys(Accessories).at(Math.floor(Math.random() * Object.keys(Accessories).length)),
  body: Body.at(Math.floor(Math.random() * Body.length)),
  face: Object.keys(Face).at(Math.floor(Math.random() * Object.keys(Face).length)),
  hair: Object.keys(Hair).at(Math.floor(Math.random() * Object.keys(Hair).length)),
  facialHair: Object.keys(FacialHair).at(Math.floor(Math.random() * Object.keys(FacialHair).length)),
  background: true,
  backgroundColor: '#F3D34A',
  forground: '#000000',
  flip: false,
};

export default function AvatarGenerator() {
  useDocumentTitle('Avatar generator');
  console.log(Object.keys(Accessories).at(Math.floor(Math.random() * Accessories.length)));
  const ls = useLocalStorage({ key: '@omatsuri/avatar-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [type, setType] = useState(initialValues.type);
  const [accessory, setAccessory] = useState(initialValues.accessory);
  const [body, setBody] = useState(initialValues.body);
  const [face, setFace] = useState(initialValues.face);
  const [hair, setHair] = useState(initialValues.hair);
  const [facialHair, setFacialHair] = useState(initialValues.facialHair);
  const [background, setbackground] = useState(initialValues.background);
  const [backgroundColor, setbackgroundColor] = useState(initialValues.backgroundColor);
  const [forground, setforground] = useState(initialValues.forground);
  const [flip, setflip] = useState(initialValues.flip);

  useEffect(() => {
    ls.save({ type, accessory, body, face, hair, facialHair, background, backgroundColor, forground, flip });
    return ls.cancel;
  }, [type, accessory, body, face, hair, facialHair, background, backgroundColor, forground, flip]);

  const handlers = (state, value) => {
    switch (state) {
      case 'accessories':
        return setAccessory(value);
      case 'body':
        return setBody(value);
      case 'face':
        return setFace(value);
      case 'facialhair':
        return setFacialHair(value);
      case 'hair':
        return setHair(value);
      default:
    }
  };
  const previewHandlers = {
    onBackgroundChange: setbackground,
    onColorChange: setbackgroundColor,
    onForgroundChange: setforground,
    onFlipChange: setflip,
  };
  const getRandomAvatar = () => {
    setAccessory(Object.keys(Accessories).at(Math.floor(Math.random() * Object.keys(Accessories).length)));
    setBody(Body.at(Math.floor(Math.random() * Body.length)));
    setFace(Object.keys(Face).at(Math.floor(Math.random() * Object.keys(Face).length)));
    setHair(Object.keys(Hair).at(Math.floor(Math.random() * Object.keys(Hair).length)));
    setFacialHair(Object.keys(FacialHair).at(Math.floor(Math.random() * Object.keys(FacialHair).length)));
  };
  return (
    <>
      <Background className={classes.controls}>
        <div className={classes.body}>
          <div className={classes.column}>
            <Preview
              accessory={accessory}
              body={body}
              face={face}
              hair={hair}
              facialHair={facialHair}
              backgroundColor={backgroundColor}
              background={background}
              previewHandlers={previewHandlers}
              forground={forground}
              flip={flip}
              onFlipChange={() => setflip(!flip)}
              getRandomAvatar={getRandomAvatar}
            />
          </div>
          <div className={classes.column}>
            <Settings
              accessory={accessory}
              body={body}
              face={face}
              hair={hair}
              facialHair={facialHair}
              type={type}
              onTypeChange={setType}
              handlers={handlers}
            />
          </div>
        </div>
        <p style={{ textAlign: 'right' }}>Attribution: <a href="https://github.com/CeamKrier/react-peeps" target="_blank">CeamKrier</a></p>
      </Background>
    </>
  );
}
