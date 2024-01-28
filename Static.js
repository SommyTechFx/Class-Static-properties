class ElearningService {
static websiteName = "teachable";


constructor() {
    this.Users = 0;
  }

  static getwebsiteName() {
    return ElearningService.websiteName; // Static method
  }

  enrollStudent() {
    this.Users += 1; // Instance method
    return `Student enrolled! Total active users: ${this.activeUsers}`;
  }

}
// Accessing static property
console.log(ElearningService.websitemName);

// Accessing static method
console.log(ElearningService.getwebsiteName());

// Creating an instance
const teachable = new ElearningService();
 
// Accessing instance method
console.log(teachable.enrollStudent()); 

