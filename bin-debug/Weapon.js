var Weapon = (function () {
    function Weapon(name, rarity) {
        this.jewels = [];
        this.name = name;
        this.rarity = rarity;
        this.attack = 5 * this.rarity;
    }
    var d = __define,c=Weapon,p=c.prototype;
    p.setJewel = function (j) {
        this.jewels.push(j);
        this.attack = this.attack + j.getAttack();
    };
    p.getName = function () {
        return this.name;
    };
    p.getRatity = function () {
        return this.rarity;
    };
    p.getAttack = function () {
        return this.attack;
    };
    return Weapon;
}());
egret.registerClass(Weapon,'Weapon');
//# sourceMappingURL=Weapon.js.map