import React, { useCallback } from 'react';
import Peep from 'react-peeps';
import Button from '../../../components/Button/Button';
import { saveSvg, savePng } from '../../../utils/save';
import classes from '../Settings/Settings.styles.less';

export default function Preview({ accessory, body, face, hair, facialHair }) {
  const scaleVector = 1;
  const styles = {
    peepStyle: {
      width: 400,
      height: 400,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    circleStyle: {
      backgroundColor: '#F3D34A',
      width: 270,
      height: 270,
      alignSelf: 'center',
      borderRadius: 135,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: 'black',
      borderStyle: 'solid',
    },
    showcaseWrapper: {
      display: 'flex',
      justifyContent: 'center',
      height: '-webkit-fill-available',
    },
  };
  const downloadSvgFile = useCallback(() => {
    saveSvg(document.querySelector('.svgWrapper > svg'), 'peep.svg');
  }, []);
  const downloadPngFile = useCallback(() => {
    savePng(document.querySelector('.svgWrapper > svg'), 'peep.png', scaleVector);
  }, [scaleVector]);
  return (
    <>
      <div className="svgWrapper" style={styles.showcaseWrapper}>
        <Peep
          style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
          accessory={accessory}
          body={body}
          face={face}
          hair={hair}
          facialHair={facialHair}
          viewBox={{ x: '-550', y: '-300', width: '2000', height: '2000' }}
          strokeColor="black"
          wrapperBackground="wheat"
        />
            </div>
        <div className={classes.body}>
          <div className={classes.column}>
            <Button
              style={{ float: 'right', margin: '10px 0px 10px 10px' }}
              onClick={downloadSvgFile}
            >
              Download SVG
            </Button>
          </div>
          <div className={classes.column}>
            <Button
              style={{ float: 'right', margin: '10px 0px 10px 10px' }}
              onClick={downloadPngFile}
            >
              Download PNG
            </Button>
          </div>
        </div>
  
    </>
  );
}
