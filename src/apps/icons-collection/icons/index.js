import Fuse from 'fuse.js';
import supercons from './supercons';
import fa from './fa';

const options = {
    includeScore: true
  }
const f = (data) => new Fuse(data,options);

export default {
  "supercons": { data: Object.keys(supercons), fuse: f(Object.keys(supercons)), label:"Supercons", lib:"" },
  'Font Awesome': { data: fa, fuse: f(fa), label:"Font Awesome", lib:"fa" }
};
