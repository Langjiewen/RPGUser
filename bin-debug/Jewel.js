var Jewel = (function () {
    function Jewel(name, rarity) {
        this.name = name;
        this.rarity = rarity;
        this.attack = this.rarity * 3;
    }
    var d = __define,c=Jewel,p=c.prototype;
    ;
    p.getName = function () {
        return this.name;
    };
    p.getRatity = function () {
        return this.rarity;
    };
    p.getAttack = function () {
        return this.attack;
    };
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map