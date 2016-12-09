var Hero = (function () {
    function Hero(name, defence, strength, rarity) {
        this.weapons = [];
        this.name = name;
        this.rarity = rarity;
        this.strength = strength;
        this.defendce = defence;
        this.level = 1;
        this.exp = 0;
        this.life = this.level * 10 * this.defendce * this.rarity;
        this.attack = this.level * 10 * this.strength * this.rarity;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setExp = function (e) {
        this.exp = this.exp + e;
        if (this.exp >= 1000) {
            this.level++;
            this.exp = this.exp - 1000;
            this.life = this.level * 10 * this.defendce * this.rarity;
            this.attack = this.level * 10 * this.strength * this.rarity;
        }
    };
    p.setWeapon = function (w) {
        this.weapons.push(w);
        this.attack = this.attack + w.getAttack();
    };
    p.getName = function () {
        return this.name;
    };
    p.getRarity = function () {
        return this.rarity;
    };
    p.getDefendce = function () {
        return this.defendce;
    };
    p.getStrength = function () {
        return this.strength;
    };
    p.getAttack = function () {
        return this.attack;
    };
    p.getLife = function () {
        return this.life;
    };
    p.getLevel = function () {
        return this.level;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Hero.js.map