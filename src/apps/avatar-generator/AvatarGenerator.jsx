import React, { useState, useEffect } from 'react';
import Settings from './Settings/Settings';
import { useDocumentTitle, useLocalStorage } from 'xooks';
import Background from '../../components/Background/Background';
import classes from './Settings/Settings.styles.less';
import Preview from './Preview/Preview';

const INITIAL_VALUES = {
  type: 'accessories',
  accessory: 'GlassRoundThick',
  body: 'Shirt',
  face: 'Cute',
  hair: 'ShortVolumed',
  facialHair: 'Dali',
};

export default function AvatarGenerator() {
  useDocumentTitle('Avatar generator');

  const ls = useLocalStorage({ key: '@omatsuri/avatar-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [type, setType] = useState(initialValues.type);
  const [accessory, setAccessory] = useState(initialValues.accessory);
  const [body, setBody] = useState(initialValues.body);
  const [face, setFace] = useState(initialValues.face);
  const [hair, setHair] = useState(initialValues.hair);
  const [facialHair, setFacialHair] = useState(initialValues.facialHair);
  
  useEffect(() => {
    ls.save({ type,accessory,body,face,hair,facialHair});
    return ls.cancel;
  }, [type,accessory,body,face,hair,facialHair]);

  const handlers = (state,value)=>{
    console.log(state);
    switch(state){
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
            return    
    }
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
            ></Preview>
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
              handlers={handlers}></Settings>
          </div>
        </div>
      </Background>
    </>
  );
}
