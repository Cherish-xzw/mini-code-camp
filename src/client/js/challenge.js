$(document).ready(() => {
  let delay;
  let challengeType = window.__state__.challengeType;
  let tests = window.__state__.tests;
  let editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    lint: {
      esversion: 6
    },
    lineNumbers: true,
    mode: challengeType === 0 ? 'text/html' : 'javascript',
    theme: 'monokai',
    runnable: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    gutters: ['CodeMirror-lint-markers']
  });
  editor.on('change', () => {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
  });
  setTimeout(updatePreview, 300);

  function updatePreview() {
    let previewFrame = document.getElementById('preview');
    let preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    const source = editor.getValue();
    preview.__source = source;
    preview.open();
    preview.write('<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>');
    preview.write('<script src="//cdn.bootcss.com/chai/4.0.0-canary.1/chai.min.js"></script>');
    preview.write('<script src="//cdn.bootcss.com/d3/4.7.4/d3.min.js"></script>');
    preview.write('<script src="/js/frame-runner.js"></script>');
    if (challengeType) {
      // javascript
      preview.write('<script>' + source + '</script>');
    } else {
      // html
      preview.write(source);
    }
    preview.close();
  }

  $('#submitButton').click(function () {
    let previewFrame = document.getElementById('preview');
    let frame = previewFrame.contentDocument || previewFrame.contentWindow.document;
    try {
      frame.__runTests(tests);
      $('#result').modal();
    } catch (e) {
      console.log(e.message);
      alert(e.message);
    }
  });
});
