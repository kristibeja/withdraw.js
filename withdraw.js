let person = {
  name: "Kristi",
  age: 24,
  balance: 25748,
};

const withdraw = (p, a) => {
  if (a <= p.balance) {
    const newBalance = p.balance - a;
    p.balance = newBalance;
    return `Success, new balance is ${p.balance}`;
  } else {
    return "The withdrawal CANNOT be processed due to insufficient funds!";
  }
};

console.log(withdraw(person, 7000));
console.log(withdraw(person, 65987));
