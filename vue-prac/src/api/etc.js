export const paramsToQueryString = function(obj, prefix) {
    const arr = []
    for (const p in obj) {
        if (obj[p]) {
            const k = prefix ? prefix + "[]" : p, v = obj[p]
            arr.push((v !==null && typeof v === 'object') ? 
            paramsToQueryString(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v))
        }
    }
    return arr.join("&")
}