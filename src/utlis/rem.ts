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
        size = Math.max(minFontSize, size)
        html.style.fontSize = size + 'px'
    }
    setRem();
    window.addEventListener('resize', throttle(setRem, 500))
})();

export {};