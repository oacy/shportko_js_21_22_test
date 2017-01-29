
    function pow (b, exp) {
        var res = 1;
        for (var i = 0; i < Math.abs(exp); i++) {
            res *= b;
        }
        if (exp >= 0) {
            return res;
        } else {
            return 1 / res;
        }
    }

    module.exports.pow = pow;