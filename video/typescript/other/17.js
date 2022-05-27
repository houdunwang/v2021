{
    function get(val) {
        if (typeof val === 'number') {
            return val * 100;
        }
        return 0;
    }
    console.log(get(100)); //NaN
}
