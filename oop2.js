function multipyBy5(num)
{
    return num*5;
}
console.log(multipyBy5(1));
console.log(multipyBy5.power);
console.log(multipyBy5.prototype);

function createUser(username, score)
{
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser('chai', 25);
const tea = new createUser('tea', 30);

chai.printMe();
tea.printMe();