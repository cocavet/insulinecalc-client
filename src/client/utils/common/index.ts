import uniqid from 'uniqid';

export function goTo(router, url) {
    router.push({ path: url });
}

export function getUniqId() {
    return uniqid() + uniqid();
}