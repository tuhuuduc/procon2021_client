let soLuongHinh = 16;

class line {
    x = Math.floor(Math.random() * soLuongHinh).toString(16);
    y = Math.floor(Math.random() * soLuongHinh).toString(16);
    soBuocDiChuyen = Math.floor(Math.random() * 10) + 5;
    mangDiChuyen = function () {
        var s = '';
        for (var i = 0; i < this.soBuocDiChuyen; i++) {
            var temp = Math.floor(Math.random() * 4);
            if (temp == 0) s = s + "L";
            if (temp == 1) s = s + "U";
            if (temp == 2) s = s + "D";
            if (temp == 3) s = s + "R";
        }
        return s;
    };

};
var dapAn = {

    mangXoay: function (soLuongHinh) {
        for (var i = 0; i < dapAn.soLuongHinh; i++)
            dapAn.mangXoay[i] = Math.floor(Math.random() * 4);
        var s = '';
        for (var i = 0; i < soLuongHinh; i++) s = s + dapAn.mangXoay[i];
        return s;
    },
    soLine: Math.floor(Math.random() * 5) + 3,
    lineDiChuyen: function () {
        var l = [];
        for (var i = 0; i < this.soLine; i++) {
            l[i] = new line();
            console.log("toa do: " + l[i].x + l[i].y);
            console.log(l[i].soBuocDiChuyen);
            console.log(l[i].mangDiChuyen());
        }

    }

};



console.log("Mang xoay: " + dapAn.mangXoay(4));
console.log("so Line: " + dapAn.soLine);
dapAn.lineDiChuyen();