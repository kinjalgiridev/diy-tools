import optimize from 'svgo-browser/lib/optimize';
import processSvgFile from '../utils/process-svg-file';

onmessage = (event) => {
  console.log(event);
  const { file, content } = event.data;
  if (content) {
    postMessage(atob(content));  
  } else if (file) {
    if (file.type === 'image/svg+xml') {
      processSvgFile(file)
        .then((code) => optimize(code))
        .then((code) => {
          postMessage(`data:image/svg+xml;base64,${atob(code)}`);
        })
        .catch((error) => postMessage(error));
  }
  try {
    const reader = new FileReader();
    reader.addEventListener('loadend', () => postMessage(reader.result));
    reader.readAsDataURL(file);
  } catch (error) {
    postMessage(error);
  }
  }
 
};
