class Jewel 
{
    name: string;
    rarity: number;;
    attack: number

    constructor(name: string,rarity: number)
    {
        this.name = name;
        this.rarity = rarity;
        this.attack = this.rarity * 3;
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