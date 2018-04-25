function appendHTML($target, template, $btnQuery, callback){
    $target.append(template);
    $($btnQuery).click(callback); 
}

var loadJS = function (url, location, implementationCode) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    // scriptTag.onreadystatechange = implementationCode;
    location.appendChild(scriptTag);
};

var getAll = function (query) {
    return Array.prototype.slice.call(document.querySelectorAll(query));
};

function show() {
    console.log('loaded');
}
document.addEventListener('DOMContentLoaded', function () {
    getAll('[data-load]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var element = e.target;
            var groupID = element.getAttribute('data-group-id');
            var id = element.getAttribute('href');
            var viewDiv = document.querySelector(id);
            var path = element.getAttribute('data-load');
            if (!element.getAttribute('data-loaded')) {
                loadJS(path, document.body, show);
                element.setAttribute('data-loaded', true);
            }
            getAll('[data-group-id="' + groupID + '"]').forEach(function (_element) {
                document.querySelector(_element.getAttribute('data-target')).classList
                    .add('d-none');
            });
            viewDiv.classList.remove('d-none');
        });
    });
});


