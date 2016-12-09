class User
{
    name: string;
    gold: number;
    exp: number;
    level: number;
    heroes: Hero[] = [];
    power: number;

    constructor(name: string)
    {
        this.name = name;
        this.gold = 1000;
        this.exp = 0;
        this.level = 1;
        this.power = 0;
    }

    public addGold(g: number): void
    {
        this.gold = this.gold + g;
    }

    public reduceGold(g: number): void
    {
        this.gold = this.gold - g;
    }

    public setExp(e: number): void
    {
        this.exp = this.exp + e;
        if(this.exp >= 1000)
        {
            this.level ++;
            this.exp = this.exp - 1000;
        }
    }

    public getName(): string
    {
        return this.name;
    }

    public getGold(): number
    {
        return this.gold;
    }

    public getExp(): number
    {
        return this.exp;        
    }

    public getLevel(): number
    {
        return this.level;
    }

    public setHero(hero: Hero): void 
    {
        this.heroes.push(hero);
        this.power = this.power + hero.getLife() * hero.getLevel() * 5 + hero.getAttack() * hero.getLevel() * 10;
    }

    public getHeroesInTeam()
    {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    public getPower(): number 
    {
        return this.power;
    }
}
