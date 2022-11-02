import React from 'react';
import PropTypes from 'prop-types';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Button from '../../../components/Button/Button';
import Background from '../../../components/Background/Background';
import classes from './Settings.styles.less';
import Tabs from '../../../components/Tabs/Tabs';
import Peep from 'react-peeps';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';

export default function Settings({handlers, type, onTypeChange,accessory,body,face,hair,facialHair}) {
    const [theme] = useTheme();
    
    const styles = {
        peepStyle: {
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignSelf: 'center'
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
          borderStyle: 'solid'
        },
        showcaseWrapper: {
          display: 'flex',
          justifyContent: 'center',
          height: '-webkit-fill-available'
        }
      };
  const types = [
    { value: 'accessories', label: 'Accessories' },
    { value: 'body', label: 'Body' },
    { value: 'face', label: 'Face' },
    { value: 'facialhair', label: 'FacialHair' },
    { value: 'hair', label: 'Hair' },
  ];
  const data={
    accessories:[
        {name:"None",svg:<svg class="pieceListSvg" viewBox="-75 -125 500 400" width="70" height="70"></svg>},
        {name:"Eyepatch",svg:<svg class="pieceListSvg" viewBox="-75 -125 500 400" width="70" height="70"><g><path d="M305.396 0.386937C311.176 -1.59406 315.786 4.41694 314.676 9.65594C313.366 15.8259 306.926 20.7779 302.656 25.1269C298.176 29.7069 293.606 34.1969 288.866 38.5169C279.816 46.7779 270.436 54.5569 260.546 61.8069L257.522 64.0228C248.456 70.6558 239.417 77.1349 229.706 82.8769C224.446 85.9769 219.136 88.9769 213.756 91.8669C211.837 92.8969 209.496 94.4859 207.087 95.6669C215.896 102.467 222.676 112.847 224.146 122.517C227.786 146.537 212.306 168.797 190.465 177.647C179.576 182.057 167.456 183.337 155.816 182.007C143.976 180.656 131.976 177.156 124.286 167.457C117.456 158.847 114.996 147.858 114.506 137.067C114.276 131.947 114.326 126.906 115.406 122.377C110.696 122.417 105.986 122.397 101.316 122.447C89.7762 122.557 78.2152 122.608 66.6662 122.287C54.7562 121.947 42.9062 121.417 31.0362 120.358C25.8262 119.887 20.6462 119.117 15.4652 118.377C10.4362 117.667 4.88622 117.397 0.186215 115.337C-0.133785 115.207 -0.00113064 114.747 0.276215 114.656C5.28622 113.037 10.9762 113.326 16.1962 113.007L21.2839 112.698C25.5215 112.445 29.7562 112.212 34.0062 112.076C43.8237 111.753 53.6336 111.674 63.4491 111.505L67.6562 111.427C79.2062 111.197 90.7562 111.067 102.306 110.697C107.096 110.547 111.896 110.267 116.706 110.007C117.266 108.736 118.087 107.576 118.876 106.447C121.236 103.067 124.236 100.087 127.346 97.3869C133.715 91.8259 140.886 87.6969 148.886 84.9269C156.814 82.1913 168.409 80.8342 176.796 81.0107C185.183 81.1873 197.135 82.3703 200.976 89.2269C201.376 89.9369 208.686 88.5669 210.856 86.9059C215.926 83.0369 220.906 79.0569 225.795 74.9769C234.876 67.3869 244.215 59.9169 252.816 51.7969C261.686 43.4169 270.486 34.8969 278.926 26.0969C283.166 21.6869 287.396 17.2669 291.506 12.7469C295.706 8.13694 299.316 2.45694 305.396 0.386937Z" transform="translate(30.00034 -60)" fill="#000000" stroke="none"></path></g></svg>},
        {name:"GlassRoundThick",svg:<svg class="pieceListSvg" viewBox="-75 -125 500 400" width="70" height="70"><g><path d="M355.09 63.4319C352.262 71.1279 347.958 79.1399 342.695 85.6169C321.401 103.649 300.71 93.6649 290.204 69.2259C286.212 51.9549 296.811 33.3509 308.042 20.6459C324.262 4.38889 350.733 12.9209 358.191 32.2469C358.644 34.7509 358.918 37.2489 359.049 39.7389C358.894 47.8299 357.919 54.7449 355.09 62.4319M150.41 47.9109C178.462 14.5439 230.942 12.7599 229.603 64.1149C223.577 129.119 122.106 113.164 150.41 47.9109ZM363.913 20.0759C362.93 18.4109 361.839 16.7999 360.648 15.2589C360.208 14.9969 359.955 12.6729 358.337 12.5009C336.71 -11.3581 298.717 2.17889 284.989 25.9529C282.482 28.9589 280.437 32.4779 278.929 36.1959C265.403 33.7149 249.634 34.1969 237.054 39.3059C224.58 6.73389 186.815 3.82589 161.928 17.7429C146.449 25.3559 136.412 41.2989 121.358 50.0569C85.9688 52.6039 47.9878 44.6749 13.2378 53.5519C-14.1682 59.2499 8.74178 73.1269 13.3378 63.8659C46.1008 54.1859 84.9158 62.3659 118.933 60.1849C122.47 66.1679 129.253 71.0639 136.013 70.8549C143.314 135.576 237.698 124.844 240.954 67.3109C244.647 61.4719 249.24 55.8839 255.814 52.2459C258.331 51.7249 260.762 51.0479 262.984 49.9999C266.782 49.4639 272.634 51.0739 276.128 54.2359C288.097 126.052 357.052 117.688 369.375 54.7739C369.62 54.5239 370.305 53.5859 370.831 52.0809C375.049 46.5039 385.375 44.4309 383.725 35.0159C382.256 25.5989 370.364 25.7109 363.913 20.0759Z" transform="translate(11.99972 10.99992)" fill="#000000" stroke="none"></path></g></svg>},
        {name:"SunglassClubmaster",svg:<svg class="pieceListSvg" viewBox="-75 -125 500 400" width="70" height="70"><g><path d="M409.463 3.8448C410.287 3.9658 411.111 4.0948 411.934 4.2318C418.27 5.2808 419.246 15.2398 413.729 17.9668C409.483 20.0668 406.817 24.2488 407.954 29.0788C408.779 32.5828 407.27 35.3698 404.887 36.8078C404.153 59.4058 400.438 84.7238 382.858 101.261C342.399 128.036 302.322 95.3878 310.705 43.7638C310.105 43.3428 309.577 42.8078 309.189 42.1368C308.911 41.6868 308.672 41.2368 308.449 40.7878C307.565 40.0648 301.03 37.7038 292.541 38.8798C284.052 40.0568 281.355 44.0148 277.062 48.3008C276.399 49.5928 275.264 50.5688 273.479 50.9698C270.103 69.9788 266.632 91.0678 252.071 105.304C215.602 139.383 152.661 111.085 154.989 59.2428C142.316 57.0798 152.882 42.2078 132.833 38.8798C129.215 37.6678 125.792 35.3518 123.536 32.6958C93.5503 29.4738 64.0323 30.9178 35.0393 41.3338C33.2654 42.076 31.4106 42.7524 29.5642 43.4257C19.2827 47.175 9.2641 50.8284 14.9483 65.2098C14.7313 69.9788 8.89832 72.8158 5.46132 69.2928L5.45832 69.2958C5.45332 69.2898 5.45032 69.2828 5.44632 69.2768C-14.0668 34.2407 22.9785 28.378 51.445 23.8729C52.0721 23.7736 52.6952 23.675 53.3133 23.5768C68.6263 20.2758 84.2953 18.8808 99.9463 19.2088C101.76 19.2865 103.703 19.3157 105.697 19.3457C111.762 19.4369 118.302 19.5352 123.121 21.0268C123.147 21.0348 123.172 21.0408 123.197 21.0478C129.862 0.847801 268.445 -3.8812 276.461 29.6238C280.189 29.5282 283.582 29.8068 286.814 30.0721C292.712 30.5563 298.071 30.9962 303.94 29.0368C306.664 4.6888 372.671 -4.4282 401.203 1.9928C403.191 2.1778 405.182 2.5208 407.187 3.0298C408.065 3.1988 408.82 3.4798 409.463 3.8448ZM379.696 25.3631C380.723 23.6008 383.403 22.675 385.173 23.9221C389.215 26.7678 392.148 31.0002 392.344 36.066C392.544 41.2443 384.536 41.2182 384.337 36.066L384.321 35.8198C384.135 33.851 382.654 31.9296 381.133 30.8576L380.964 30.7337C379.306 29.4642 378.564 27.3036 379.696 25.3631ZM238.087 28.7229C233.065 27.6183 230.92 35.3611 235.958 36.4687C239.526 37.253 242.549 39.052 244.592 42.0998L244.807 42.4312C247.548 46.7931 254.48 42.7666 251.719 38.3765C248.614 33.4362 243.788 29.976 238.087 28.7229Z" transform="translate(-12.99972 8.999499)" fill="#000000" fill-rule="evenodd" stroke="none"></path></g></svg>},
        {name:"SunglassWayfarer",svg:<svg class="pieceListSvg" viewBox="-75 -125 500 400" width="70" height="70"><g><path d="M379.584 5.44083C374.676 5.04763 361.281 0 337.809 0C322.496 0 301.24 4.68927 287.629 10.9038L286.824 11.2693C280.634 14.0632 274.177 16.647 267.464 17.7921C259.217 19.2079 251.031 17.4015 243.065 15.3129L241.551 14.9193C233.986 12.9714 226.468 11.3294 218.906 10.3325C214.682 9.34741 210.429 8.59431 206.136 8.01192C195.948 6.61618 185.67 6.17537 175.422 7.14937C165.484 8.10329 155.695 9.87959 146.278 13.2334C145.27 13.5949 144.233 13.9784 143.186 14.3751C138.049 15.8612 131.546 18.0813 126.898 21.3959C121.282 22.0084 114.562 21.4783 110.805 25.3522C104.733 26.5034 20.3682 25.8027 20.3682 25.8027C15.1403 26.8329 3.36676 30.0862 0.814798 35.4948C-0.876527 39.0896 0.134265 42.2626 3.20667 44.6434C7.63936 48.0673 18.1384 43.6483 18.1384 43.6483C23.6002 43.6483 92.0277 41.6027 103.436 39.19C104.866 39.0876 106.301 38.9822 107.739 38.8717C107.875 40.9121 108.43 42.9133 109.51 44.7027C111.973 48.8015 115.85 49.8994 120.051 50.6879L122.009 51.0397C131.215 52.6807 133.537 62.5902 136.45 70.2277L136.691 70.8501C140.724 81.1233 158.225 105.158 188.502 107.742C203.415 109.015 219.665 105.634 231.626 96.4252C234.918 93.8948 237.63 90.9728 239.822 87.6993C246.297 81.2037 249.339 72.4577 251.231 63.3001C252.512 57.0936 253.343 50.7485 253.703 44.4225L253.835 41.8901C255.753 40.155 257.831 39.0595 260.031 38.3958C262.045 37.9841 264.054 37.6818 266.087 37.4549C268.166 37.3625 270.307 37.4318 272.479 37.5091C277.025 37.6698 281.436 38.0142 285.242 39.8347L285.134 40.7543C284.406 47.4288 285.031 54.2635 286.368 60.8299C289.191 74.6055 297.887 86.2132 309.597 93.7653C318.004 99.1835 327.831 102.295 337.771 102.666C343.597 104 350.098 103.497 355.584 102.233C366.509 99.7157 385.73 92.8184 388.42 51.9474C389.927 45.2475 389.786 37.785 389.65 30.6239L389.65 30.622C389.59 27.4213 389.53 24.2818 389.619 21.2975C393.743 16.6273 392.592 9.21687 385.526 6.49569C383.605 5.75264 381.773 5.58193 379.732 5.4514L379.584 5.44083ZM359.696 19.3626C360.724 17.6003 363.403 16.6745 365.173 17.9216C369.215 20.7673 372.149 24.9997 372.344 30.0655C372.544 35.2438 364.537 35.2177 364.338 30.0655L364.321 29.8193C364.135 27.8505 362.654 25.9291 361.133 24.8571L360.964 24.7332C359.306 23.4637 358.565 21.3031 359.696 19.3626ZM218.087 22.7224C213.065 21.6178 210.92 29.3606 215.958 30.4682C219.526 31.2525 222.549 33.0515 224.592 36.0993L224.807 36.4307C227.548 40.7926 234.48 36.7661 231.72 32.376C228.614 27.4357 223.788 23.9755 218.087 22.7224Z" transform="translate(-1.98952E-12 15)" fill="#000000" fill-rule="evenodd" stroke="none"></path></g></svg>},
        {name:"GlassAviator"},
        {name:"GlassButterfly"},
        {name:"GlassButterflyOutline"},
        {name:"GlassClubmaster"},
        {name:"GlassRound"},
    ],
    body:[
        {name:"BlazerBlackTee"},
        {name:"Shirt"},
        {name:"ButtonShirt"},
        {name:"Dress"},
        {name:"Gaming"},
        {name:"Geek"},
        {name:"Hoodie"},
        {name:"PointingUp"},
        {name:"Selena"},
        {name:"Thunder"},
        {name:"Turtleneck"},
        {name:"ArmsCrossed"},
        {name:"Coffee"},
        {name:"Device"},
        {name:"DotJacket"},
        {name:"Explaining"},
        {name:"FurJacket"},
        {name:"Killer"},
        {name:"Paper"},
        {name:"PocketShirt"},
        {name:"PoloSweater"},
        {name:"ShirtCoat"},
        {name:"ShirtFilled"},
        {name:"SportyShirt"},
        {name:"StripedShirt"},
        {name:"Sweater"},
        {name:"SweaterDots"},
        {name:"Whatever"},
        {name:"Bike"},
        {name:"ClosedLegBW"},
    ],
    face:[
        {name:"Angry"},
        {name:"Blank"},
        {name:"Calm"},
        {name:"Cheeky"},
        {name:"Concerned"},
        {name:"Contempt"},
        {name:"Cute"},
        {name:"Driven"},
        {name:"EatingHappy"},
        {name:"EyesClosed"},
        {name:"OldAged"},
        {name:"Serious"},
        {name:"Smile"},
        {name:"Solemn"},
        {name:"Suspicious"},
        {name:"Tired"},
        {name:"VeryAngry"},
        {name:"Awe"},
        {name:"ConcernedFear"},
        {name:"Cyclops"},
        {name:"Explaining"},
        {name:"Fear"},
        {name:"Hectic"},
        {name:"LoveGrin"},
        {name:"LoveGrinTeeth"},
        {name:"Monster"},
        {name:"Rage"},
        {name:"SmileBig"},
        {name:"SmileLol"},
        {name:"SmileTeeth"},
        {name:"CalmNM"},
        {name:"SmileNM"},
        {name:"CheersNM"}
    ],
    facialhair:[
        {name:"None"},
        {name:"Chin"},
        {name:"Full"},
        {name:"FullMajestic"},
        {name:"FullMedium"},
        {name:"Goatee"},
        {name:"GoateeCircle"},
        {name:"Dali"},
        {name:"Handlebars"},
        {name:"Imperial"},
        {name:"Painters"},
        {name:"PaintersFilled"},
        {name:"Swashbuckler"},
        {name:"MoustacheThin"},
        {name:"Yosemite"},
        {name:"GrayFull"},
        {name:"MajesticHandlebars"}
    ],
    hair:[
        {name:"Afro"},
        {name:"Bald"},
        {name:"BaldSides"},
        {name:"BaldTop"},
        {name:"Bangs"},
        {name:"BangsFilled"},
        {name:"Bear"},
        {name:"Bun"},
        {name:"BunCurly"},
        {name:"Buns"},
        {name:"FlatTop"},
        {name:"FlatTopLong"},
        {name:"HatHip"},
        {name:"Long"},
        {name:"LongAfro"},
        {name:"LongBangs"},
        {name:"LongCurly"},
        {name:"Medium"},
        {name:"MediumBangs"},
        {name:"MediumBangsFilled"},
        {name:"MediumLong"},
        {name:"MediumShort"},
        {name:"MediumStraight"},
        {name:"Mohawk"},
        {name:"MohawkDino"},
        {name:"Pomp"},
        {name:"ShavedRight"},
        {name:"ShavedSides"},
        {name:"ShavedWavy"},
        {name:"Short"},
        {name:"ShortCurly"},
        {name:"ShortMessy"},
        {name:"ShortVolumed"},
        {name:"ShortWavy"},
        {name:"BantuKnots"},
        {name:"Beanie"},
        {name:"BunFancy"},
        {name:"CornRows"},
        {name:"CornRowsFilled"},
        {name:"GrayBun"},
        {name:"GrayMedium"},
        {name:"GrayShort"},
        {name:"Hijab"},
        {name:"MediumShade"},
        {name:"Turban"},
        {name:"Twists"},
        {name:"TwistsVolumed"},
        {name:"DocBouffant"},
        {name:"DocSurgery"},
        {name:"DocShield"}
    ]
  };
  return (
    <>
      <Tabs data={types} active={type} onTabChange={onTypeChange} />
      <ul className={classes.scroll}>
      {
        data[type].map((element)=><li key={type+element.name} className={cx(classes[theme],classes.label)}>
            {/* <Peep
                style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
                hair = {type==="hair" ? element.name : ""}
                accessories = {type==="accessories" ? element.name : ""}
                face = {type==="face" ? element.name : ""}
                body = {type==="body" ? element.name : ""}
                facialhair = {type==="facialhair" ? element.name : ""}
            /> */}
            <a onClick={()=>handlers(type,element.name)} className={element.name===accessory || element.name===body || element.name===face || element.name===hair || element.name===facialHair?classes.active:""}>{element.name}</a>
            </li>)
      }
       </ul>    
    </>
  );
}
Settings.propTypes = {
    type: PropTypes.oneOf(['accessories', 'body', 'face', 'facialhair', 'hair']).isRequired,
    onTypeChange: PropTypes.func.isRequired,
  };