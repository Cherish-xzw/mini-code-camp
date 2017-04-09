/**
 * Created by ACER on 2017/4/9.
 */
(function () {
    $(document).ready(function () {
        var delay;
        var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lint: {esversion: 6},
            lineNumbers: true,
            mode: 'text/html',
//            mode: 'javascript',
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
            preview.write(editor.getValue());
            preview.close();
        }
    })
})();
