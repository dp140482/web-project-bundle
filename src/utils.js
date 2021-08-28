export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

function loadScript(urlOrCallback, callback) {
    if (typeof urlOrCallback === 'function') {
        // Значит, передали Callback, и по логике define он составит тело скрипта
        let element = document.createElement("script");
        element.innerText = urlOrCallback;
        document.body.appendChild(element);
    } else if (typeof urlOrCallback === 'object') {
        /* Значит, передан массив строк. Полагаем, отсортированный в порядке
        зависимости и без повторений. */
        for (let url of urlOrCallback) {
            let element = document.createElement("script");
            element.src = url;
            element.onload = callback;
            document.body.appendChild(element);
        }
    } else {
        let element = document.createElement("script");
        element.src = url;
        element.onload = callback;
        document.body.appendChild(element);
    }
}