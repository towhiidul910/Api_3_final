// class Emoji {
//   icon: string;

//   constructor(icon: string) {
//     this.icon = icon;
//   }
// }

class Invoice {
  client: string;
  private details: string; // now if you want to make it a  privet property you can do that too
  public amount: number; // in default we are saying here any one can access and change this property , because all properties are public by default, it is same as nothing putting in front of the property. public is a access modifier
  readonly book: string;

  constructor(c: string, d: string, a: number, b: string) {
    this.client = c;
    this.amount = a;
    this.details = d;
    this.book = b;
  }

  format() {
    // this.details = "wark on book website" //* we can do this because it private and we can access and modify inside the classes
    // this.book = "batman"  //! we cannot do this because it is read only , we cannot modify it from class it self.

    // this is a method
    return `${this.client} owes $${this.amount} for ${this.details} the book ${this.book}`;
  }
}

class Invoice2 {
  constructor(
    // client: string, //! this parameter / property isn't acceptable because we didn't used modifier
    private details: string,
    public amount: number,
    readonly book: string
  ) {}

  format() {
    return ` owes $${this.amount} for ${this.details} the book ${this.book}`; // we remove "${this.client}" because it is not a property , we didn't used modifier
  }
}

const invOne = new Invoice(
  "mario",
  "work on the mario website",
  250,
  "ice and fire"
);
const invTwo = new Invoice(
  "luigi",
  "work on the luigi website",
  300,
  "lard of the ring"
);

function inv(c: string, d: string, a: number) {
  return `${c} owes $${d} for ${a}`;
}

const invoiceOne = inv("mario", "work on the mario website", 250);
const invoiceTwo = inv("luigi", "work on the luigi website", 300);
// const sun = new Emoji('🌞')

const invoices: Invoice[] = []; // now only the object hat are creating using that Invoice class can be added in this array

invoices.push(invOne);
invoices.push(invTwo);

// also all the properties are public so we can change it any time

invOne.client = "yoshi";
invTwo.amount = 400;
// invOne.detail = "sekiro"  //! we cannot do this because it is private now
// invOne.book = "Harry Potar" //! we  cannot modify this property because it is read only

// if we dont want to allow change this properties latter on in the code in that case we can use access modifire to limit that

const FunctionClassMethod = () => {
  // console.log(sun)      // {    "icon": "🌞"}
  console.log(invOne, invTwo);

  console.log("Invoices : ", invoices[1]);

  console.log(invoiceOne, ",", invoiceTwo);

  console.log("Invoices : ", invoices); // now we have array with 2 object inside it

  invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format(), inv.book); // we cannot access that property from out side of the class it self  //* but we are still able to get the result from format() method because it is using the detail property in the format() inside the class
    //? we can read the book because the book is read only
  });
  return <div>Class method</div>;
};

export default FunctionClassMethod;
