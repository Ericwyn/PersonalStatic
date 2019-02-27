function domId(domName) {
    return document.getElementById(domName);
}

function domTag(tagName) {
    return document.getElementsByTagName(tagName);
}

function domClass(className) {
    return document.getElementsByClassName(className);
}

function domName(name) {
    return document.getElementsByName(name);
}

function ajax_post(url, params, success_callback, fail_callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    let formData = new FormData();
    if (params !== null) {
        for (let i = 0; i < params.length; i++) {
            formData.append(params[i][0], params[i][1])
        }
        xhr.send(formData);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success_callback(xhr.responseText)
            } else {
                fail_callback(xhr.status)
            }
        }
    }
}

function ajax_get(url, params, success_callback, fail_callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // let formData = new FormData();
    let data = "";
    if (params !== null) {
        for (let i = 0; i < params.length; i++) {
            if (i === (params.length - 1)) {
                data += params[i][0]+"="+params[i][1];
            }else {
                data += params[i][0]+"="+params[i][1]+"&";
            }
        }
        xhr.send(data);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success_callback(xhr.responseText)
            } else {
                fail_callback(xhr.status)
            }
        }
    }
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return null;
}

function clog(msg) {
    console.log(msg)
}

function displayNone(dom) {
    dom.style.display = "none";
}

function displayInline(dom) {
    dom.style.display = "inline";
}