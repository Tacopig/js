/*Extension of Date*/
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

/*將Date轉為日期與星期幾 Ex:'2015/12/25 (五)' */
Date.prototype.toDateAndWeekDayString = function () {
    var dat = new Date(this.valueOf());
    var ret = dat.toLocaleDateString('roc', { year: 'numeric', month: '2-digit', day: '2-digit' });
    switch (dat.getDay()) {
        case 0:
            return ret += ' ( 日 )';
        case 1:
            return ret += ' ( 一 )';
        case 2:
            return ret += ' ( 二 )';
        case 3:
            return ret += ' ( 三 )';
        case 4:
            return ret += ' ( 四 )';
        case 5:
            return ret += ' ( 五 )';
        case 6:
            return ret += ' ( 六 )';
    }
}

String.prototype.tryParseDate = function () {
    var ret = { valid: false, message: '' };
    var dateStr = this.valueOf();

    var date = new Date(Date.parse(dateStr));
    if (date == 'Invalid Date') {
        ret.message = '日期格式錯誤';
        return ret;
    }

    ret.valid = true;
    return ret;
}

String.prototype.toDateAndWeekDayString = function () {
    var dtNum =  Date.parse(this.valueOf());
    if (isNaN(dtNum)) {
        return '日期格式錯誤';
    }

    return new Date(dtNum).toDateAndWeekDayString();
}
