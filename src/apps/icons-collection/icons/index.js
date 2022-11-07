import Fuse from 'fuse.js';
import supercons from './supercons';
import fa from './fa';
import bs from './bs';
import ai from './ai';
import bi from './bi';
import ci from './ci';
import di from './di';
import fi from './fi';
import fc from './fc';
import gi from './gi';
import go from './go';
import gr from './gr';
import hi from './hi';
import hi2 from './hi2';
import im from './im';
import io from './io';
import io5 from './io5';
import md from './md';
import ri from './ri';
import si from './si';
import sl from './sl';
import tb from './tb';
import tfi from './tfi';
import ti from './ti';
import vsc from './vsc';
import wi from './wi';
import cg from './cg';

const options = {
    includeScore: true
  }
const f = (data) => new Fuse(data,options);

export default {
  'Font Awesome': { data: fa, fuse: f(fa), label:"Font Awesome", lib:"fa", example:"FaBeer" },
  'Bootstrap': { data: bs, fuse: f(bs), label:"Bootstrap", lib:"bs", example:"BsFillAlarmFill" },
  'Ant Design': { data: ai, fuse: f(ai), label:"Ant Design", lib:"ai", example:"AiFillAccountBook" },
  'BoxIcons': { data: bi, fuse: f(bi), label:"BoxIcons", lib:"bi", example:"BiAbacus" },
  'Circum Icons': { data: ci, fuse: f(ci), label:"Circum Icons", lib:"ci", example:"CiAirportSign1" },
  'Devicons': { data: di, fuse: f(di), label:"Devicons", lib:"di", example:"DiAndroid" },
  'Feather': { data: fi, fuse: f(fi), label:"Feather", lib:"fi", example:"FiActivity" },
  'Flat Color Icons': { data: fc, fuse: f(fc), label:"Flat Color Icons", lib:"fc", example:"FcAbout" },
  'Game Icons': { data: gi, fuse: f(gi), label:"Game Icons", lib:"gi", example:"Gi3DGlasses" },
  'Github Octicons icons': { data: go, fuse: f(go), label:"Github Octicons icons", lib:"go", example:"GoAlert" },
  'Grommet-Icons': { data: gr, fuse: f(gr), label:"Grommet-Icons", lib:"gr", example:"GrAccessibility" },
  'Heroicons': { data: hi, fuse: f(hi), label:"Heroicons", lib:"hi", example:"HiAcademicCap" },
  'Heroicons 2': { data: hi2, fuse: f(hi2), label:"Heroicons 2", lib:"hi2", example:"HiAcademicCap" },
  'IcoMoon Free': { data: im, fuse: f(im), label:"IcoMoon Free", lib:"im", example:"ImHome" },
  'Ionicons 4': { data: io, fuse: f(io), label:"Ionicons 4", lib:"io", example:"IoIosAddCircleOutline" },
  'Ionicons 5': { data: io5, fuse: f(io5), label:"Ionicons 5", lib:"io5", example:"IoAccessibilityOutline" },
  'Material 5': { data: md, fuse: f(md), label:"Material 5", lib:"md", example:"Md3DRotation" },
  'Remix Icon': { data: ri, fuse: f(ri), label:"Remix Icon", lib:"ri", example:"RiAncientGateFill" },
  'Simple Icons': { data: si, fuse: f(si), label:"Simple Icons", lib:"si", example:"Si1001Tracklists" },
  'Simple Line Icons': { data: sl, fuse: f(sl), label:"Simple Line Icons", lib:"sl", example:"SlActionRedo" },
  'Tabler Icons': { data: tb, fuse: f(tb), label:"Tabler Icons", lib:"tb", example:"Tb2Fa" },
  'Themify Icons': { data: tfi, fuse: f(tfi), label:"Themify Icons", lib:"tfi", example:"TfiAgenda" },
  'Typicons': { data: ti, fuse: f(ti), label:"Typicons", lib:"ti", example:"TiAdjustBrightness" },
  'VS Code Icons': { data: vsc, fuse: f(vsc), label:"VS Code Icons", lib:"vsc", example:"VscAccount" },
  'Weather Icons': { data: wi, fuse: f(wi), label:"Weather Icons", lib:"wi", example:"WiAlien" },
  'css.gg': { data: cg, fuse: f(cg), label:"css.gg", lib:"cg", example:"CgAbstract" },
  "Supercons": { data: Object.keys(supercons), fuse: f(Object.keys(supercons)), label:"Supercons", lib:"Supercons", example:"Supercons" },
};
