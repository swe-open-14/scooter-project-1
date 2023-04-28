class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }
  // user class with its properties 

  login(password) {
    if(password === this.password) {
      this.loggedIn = true;
      console.log(`Logged in as ${this.username}`);
    } else {
      console.log(`Incorrect password for ${this.username}`);
    }
  }
  // password as argument to see if it matches. if it matches a boolean is returned and message is logged to console, same with if it does not match

  logout() {
    this.loggedIn = false;
    console.log(`Logged out`);
  }
  // if not logged in, return 'logged out' on the console and NFA
}

module.exports = User
