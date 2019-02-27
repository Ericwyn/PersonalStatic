// mdui 专用的 js

// mdui 的 alert
function mduiAlert(msg, callback) {
    if (callback === undefined) {
        mdui.alert(msg)
    } else {
        mdui.dialog({
            content: msg,
            buttons: [
                {
                    text: "ok",
                    bold: false,
                    close: true
                },
            ],
            cssClass: 'mdui-dialog-alert',
            modal: true,
            closeOnEsc: false,
            onClose: function () {
                callback();
            }
        })
    }
}

//
// 显示一个遮罩，直到 callback 当中将遮罩关闭，HTML 为遮罩的代码
function showWaitDialog(title, content, callback) {
    let HTML =
        `<div class="mdui-dialog" id="dialog">
            <div class="mdui-dialog-title">${title}</div>
            <div class="mdui-dialog-content">${content}</div>
            <div class="mdui-dialog-actions"></div>
            </div>`;

    let instOfWaitDialog = new mdui.Dialog(HTML, {
        cssClass: 'mdui-dialog-alert',
        modal: true,
        closeOnEsc: false
    });

    instOfWaitDialog.open();
    callback(instOfWaitDialog);
}
