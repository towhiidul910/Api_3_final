export function Attack() {
  // Every item is just an object
  const sword = { name: "Iron Sword", damage: 10, durability: 100 };
  const bow = { name: "Wooden Bow", damage: 6, durability: 50 };

  function attack(item: { name: string; damage: number; durability: number }) {
    console.log(`Attacked with ${item.name} for ${item.damage} damage`);
    item.durability--;
  }

  // attack(sword);
  // attack(bow);
}





//! with classes
export const ClassTest = () => {
  class Item {
    name: string;
    damage: number;
    durability: number;

    constructor(name: string, damage: number, durability: number) {
      this.name = name;
      this.damage = damage;
      this.durability = durability;
    }

    attack() {
      if (this.durability <= 0) {
        console.log(
          `Attack with ${this.name} is broken! and durability now ${this.durability}`
        );
        return;
      }

      console.log(`Attack with ${this.name} for ${this.damage} damage`);
      this.durability--;
    }

    repair(amount: number) {
      this.durability += amount;
      console.log(
        `${this.name} repaired by ${amount}, durability is now ${this.durability}`
      );
    }
  }

  // Create multiple instances easily
  const sword = new Item("Iron Sword", 10, 100);
  const bow = new Item("Wooden Bow", 10, 50);

  // bow.attack();

  // bow.repair(5);

  return <div>Class Test</div>;
};





export const MappedTypeCheck = () => {
  type ApiResponse<T, M> = 
| {status: 'success', data: T, timestamp?: Date, isActive: M}
| {status: 'error', massage: string, timestamp: Date, isActive: M}

const response1: ApiResponse<number, boolean> = {
  status: 'success',
  data: 12,
  isActive: true
}

const response2: ApiResponse<boolean, number> = {
  status: "success",
  data: true,
  timestamp: new Date(),
  isActive: 213
}

const response3: ApiResponse<number, string> = {
  status: "error",
  massage: "Super Man save people",
  timestamp: new Date(),
  isActive: "String"
}

console.log(response3.timestamp)

  return (
    <div>Mapped Type Check</div>
  )
}
