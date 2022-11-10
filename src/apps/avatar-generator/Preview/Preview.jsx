import React, { useCallback, useState } from 'react';
import Peep from 'react-peeps';
import Button from '../../../components/Button/Button';
import { saveSvg, savePng } from '../../../utils/save';
import classes from '../Settings/Settings.styles.less';
import { adjustPeepsViewbox } from '../../../utils/view-box';
import Tabs from '../../../components/Tabs/Tabs';
import HexInput from '../../../components/HexInput/HexInput';
import { useTheme } from '../../../ThemeProvider';
import cx from 'classnames';

export default function Preview({
  previewHandlers,
  forground,
  background,
  backgroundColor,
  accessory,
  body,
  face,
  hair,
  facialHair,
  getRandomAvatar,
  flip,
  onFlipChange
}) {
  const [theme] = useTheme();
  const scaleVector = 4;
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
  const backgroundData = [
    { value: false, label: 'Transparent' },
    { value: true, label: 'Colorful' },
  ];

  const downloadSvgFile = useCallback(() => {
    saveSvg(document.querySelector('.svgWrapper > svg'), 'DIY-Tools.svg');
  }, []);
  const downloadPngFile = useCallback(() => {
    savePng(document.querySelector('.svgWrapper > svg'), 'DIY-Tools.png', scaleVector);
  }, [scaleVector]);
  return (
    <>
      <div className="svgWrapper" style={styles.showcaseWrapper}>
        <Peep
           style={{ ...styles.peepStyle, transform: flip?'scale(-1, 1)':'' }}
         // style={{ ...styles.peepStyle }
          accessory={accessory}
          body={body}
          face={face}
          hair={hair}
          facialHair={facialHair}
          viewBox={adjustPeepsViewbox(body)}
          strokeColor={forground}
          wrapperBackground={background ? backgroundColor : ''}
        />
      </div>
      <div className={classes.inner}>
        <div className={classes.body}>
          <div className={classes.column}>
            <Tabs
              data={backgroundData}
              onTabChange={previewHandlers.onBackgroundChange}
              active={background}
            />
            {background && (
              <>
                <div className={cx(classes[theme],classes.labelprev)}>Background Color</div>
                <HexInput value={backgroundColor} onChange={previewHandlers.onColorChange} />
              </>
            )}
          </div>
          <div className={classes.column}>
            <div style={styles.showcaseWrapper}>
            <Button
              style={{ height: '35px', marginRight:'20px', display: 'flex', alignItems: 'center'}}
              onClick={getRandomAvatar}
            >
              Shuffle
            </Button>
            <Button
              style={{ height: '35px', marginRight:'20px' }}
              onClick={onFlipChange}
            >
              Flip
            </Button>
            </div>
            <div className={classes.labelprev}>Forground Color</div>
            <HexInput value={forground} onChange={previewHandlers.onForgroundChange} />
          </div>
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
      </div>
    </>
  );
}
