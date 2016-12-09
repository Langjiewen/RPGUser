class Hero 
{  //和User是聚合关系
    name: string;
    isInTeam: boolean;
    weapons: Weapon[] = [];
    exp: number;
    level: number;
    defendce: number;
    strength: number;
    rarity: number;
    life: number;
    attack: number;

    constructor(name: string, defence: number, strength: number,rarity: number) 
    {
        this.name = name;
        this.rarity = rarity;
        this.strength = strength;
        this.defendce = defence;
        this.level = 1;
        this.exp = 0;
        this.life = this.level * 10 * this.defendce * this.rarity;
        this.attack = this.level * 10 * this.strength * this.rarity;
    }

    public setExp(e: number)
    {
        this.exp = this.exp + e;
        if(this.exp >= 1000)
        {
            this.level ++;
            this.exp = this.exp - 1000;
            this.life = this.level * 10 * this.defendce * this.rarity;
            this.attack = this.level * 10 * this.strength * this.rarity;
        }
    }

    public setWeapon(w: Weapon): void 
    {
        this.weapons.push(w);
        this.attack = this.attack + w.getAttack();
    }

    public getName(): string
    {
        return this.name;
    }

    public getRarity(): number
    {
        return this.rarity;
    }

    public getDefendce(): number
    {
        return this.defendce;
    }    

    public getStrength(): number
    {
        return this.strength;
    }  

    public getAttack(): number
    {
        return this.attack;
    }

    public getLife(): number
    {
        return this.life;
    }

    public getLevel(): number
    {
        return this.level;
    }

}

var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => 
{
    const getter = desc.get;
    desc.get = function () 
    {
        return getter.apply(this);
    }
    return desc;
}