/**
 * Created by ACER on 2017/4/9.
 */
(function () {
    $(document).ready(function () {
        var delay;
        var challengeType = $("#challengeType").val();
        var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lint: { esversion: 6 },
            lineNumbers: true,
            mode: challengeType === '0' ? 'text/html' : 'javascript',
            theme: 'monokai',
            runnable: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            gutters: ['CodeMirror-lint-markers']
        });
        editor.on("change", function () {
            clearTimeout(delay);
            delay = setTimeout(updatePreview, 300);
        });
        setTimeout(updatePreview, 300);
        function updatePreview() {
            var previewFrame = document.getElementById('preview');
            var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
            preview.open();
            preview.write('<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>');
            preview.write('<script src="//cdn.bootcss.com/chai/4.0.0-canary.1/chai.min.js"></script>');
            preview.write('<script src="//cdn.bootcss.com/d3/4.7.4/d3.min.js"></script>');
            preview.write('<script src="/js/frame-runner.js"></script>');
            preview.write(editor.getValue());
            preview.close();
        }

        $('#submitButton').click(function () {
            var previewFrame = document.getElementById('preview');
            var frame = previewFrame.contentDocument || previewFrame.contentWindow.document;

            frame.__runTests();

        });

        var output = CodeMirror.fromTextArea(document.getElementById("output"), {
            lineNumbers: false,
            lineWrapping: true,
            mode: 'javascript',
            readOnly: 'nocursor',
            theme: 'monokai'
        })

    })
})();
