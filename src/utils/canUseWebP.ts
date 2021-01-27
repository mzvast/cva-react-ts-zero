/**
 * @file [canUseWebP]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-08-20 20:53:02
 */
// WebP支持detect https://stackoverflow.com/questions/5573096/detecting-webp-support
function canUseWebP() {
    // todo: remove
    if (typeof window === 'undefined') return false;
    let elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').startsWith('data:image/webp');
    }

    // very old browser like IE 8, canvas not supported
    return false;
}
export default canUseWebP;
