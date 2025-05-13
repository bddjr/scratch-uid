const charset = '!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Generate unique identifier for scratch blocks, varibles or lists.
 */
export function ScratchUID() {
    let id = '';
    while (id.length < 20)
        id += charset.charAt(Math.random() * charset.length);
    return id;
}

export default ScratchUID;
