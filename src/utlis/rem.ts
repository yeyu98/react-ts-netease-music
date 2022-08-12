import throttle from 'lodash/throttle';
let remBase = 14;
(function() {
    const setRem = () => {
        // 只适配了两个比例要么18要么14
        const maxFontSize = 18
        const minFontSize = 14
        const html = document.getElementsByTagName('html')[0]
        const width = html.clientWidth
        let size = remBase * (width / 1440)
        size = Math.min(maxFontSize, size)
        size = Math.max(minFontSize, size) // 这段可以换种写法 === 14=< size <=18 超过18取18 小于14取14
        html.style.fontSize = size + 'px'
    }
    setRem();
    window.addEventListener('resize', throttle(setRem, 500))
})();

export {};