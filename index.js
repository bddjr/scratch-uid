/**
 * Generate unique identifier for scratch blocks, varibles or lists.
 */
function ScratchUID() {
    var charset = '!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        , cl = charset.length, id = '';
    while (id.length < 20) id += charset.charAt(Math.random() * cl);
    return id;
}

module.exports = ScratchUID
