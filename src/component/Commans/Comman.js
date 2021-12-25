export const setCache =(key, value) => {
    sessionStorage.setItem(key, value);
}
export const getCache = key =>{
    return sessionStorage.getItem(key);
}