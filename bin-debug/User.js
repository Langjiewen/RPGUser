var User = (function () {
    function User(name) {
        this.heroes = [];
        this.name = name;
        this.gold = 1000;
        this.exp = 0;
        this.level = 1;
        this.power = 0;
    }
    var d = __define,c=User,p=c.prototype;
    p.addGold = function (g) {
        this.gold = this.gold + g;
    };
    p.reduceGold = function (g) {
        this.gold = this.gold - g;
    };
    p.setExp = function (e) {
        this.exp = this.exp + e;
        if (this.exp >= 1000) {
            this.level++;
            this.exp = this.exp - 1000;
        }
    };
    p.getName = function () {
        return this.name;
    };
    p.getGold = function () {
        return this.gold;
    };
    p.getExp = function () {
        return this.exp;
    };
    p.getLevel = function () {
        return this.level;
    };
    p.setHero = function (hero) {
        this.heroes.push(hero);
        this.power = this.power + hero.getLife() * hero.getLevel() * 5 + hero.getAttack() * hero.getLevel() * 10;
    };
    p.getHeroesInTeam = function () {
        return this.heroes.filter(function (hero) { return hero.isInTeam; });
    };
    p.getPower = function () {
        return this.power;
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map