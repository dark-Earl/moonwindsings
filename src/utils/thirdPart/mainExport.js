export function createJqFn () {
  return new Promise(function (resolve, reject) {
    const tag = document.getElementsByTagName('script');
    for (let i of tag) {
      if (i.src === 'https://code.jquery.com/jquery-3.6.0.min.js') {
        resolve(window.createJqFn);
        return;
      }
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.id = 'jqFn';
    script.onerror = reject;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(window.createJqFn);
    }
  })
}
// 离开当前页面时移除标签
export function removeJqFn () {
  return new Promise(function (resolve, reject) {
    const jqFnId = document.getElementById("jqFn");
    jqFnId.parentNode.removeChild(jqFnId);
  })
}
