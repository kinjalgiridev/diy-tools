onmessage = (event) => {
  const { content } = event.data;
  if (content) {
    content.substring(0, 4) === 'data'
      ? postMessage(content)
      : postMessage(decodeURIComponent(content));
  } else {
    postMessage('please enter encode url');
  }
};
