var user = {
    name: '后盾人',
    age: 18,
    isLock: false
};
function isLock(user, lock) {
    user.isLock = lock;
    return user;
}
isLock(user, true);
