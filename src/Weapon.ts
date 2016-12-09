class Weapon 
{

    name: string;
    rarity: number;
    attack: number;
    jewels: Jewel[] = [];

    constructor(name: string, rarity: number)
    {
        this.name = name;
        this.rarity = rarity;
        this.attack = 5 * this.rarity
    }

    public setJewel(j: Jewel): void 
    {
        this.jewels.push(j);
        this.attack = this.attack + j.getAttack();
    }

    public getName(): string
    {
        return this.name;
    }

    public getRatity(): number
    {
        return this.rarity;
    }
    
    public getAttack(): number 
    {
        return this.attack;
    }

}
