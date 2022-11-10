onmessage = (event) => {
  const { content } = event.data;
  if (content) {
    content.substring(0, 4) === 'data'
      ? postMessage(content)
      : postMessage(encodeURIComponent(content));
  } else {
    postMessage('please enter url for encode');
  }
};
