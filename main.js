/*
1. Đối tượng / object trong javascript là gì ?
2. Thuộc tính / phương thức của object trong javasript
--Thuộc tính
--Phương thức
--Xem danh sách phương thức và thuộc tính
3. Thao tác với thuộc tính và phương thức của object trong js
--Gán giá trị cho thuộc tính
--Lấy giá trị của thuộc tính
--Xóa thuộc tính
--Gọi phương thức
4. Mảng chứa object - object chứa object
--object chứa object
--Mảng chứa object
6. Lặp qua từng phần tử của object trong js
 */

//1:Đối tượng/object trong javascript
//Thể hiện cho các đối tượng,thêm các thuộc tính và phương thức cho đối tượng đó
//Cú pháp:
// var lastName = new object();//Cách 1
// var userName = {};//Cách 2


var place = 'Address';//Thêm key mới vào objects bằng biến
var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    [place]: 'Ha Noi',//Thêm address vào objects có value là Ha Noi
};
//Thêm key và value vào object
car.weight = 400;
console.log(car.type);//Cách 1
console.log(car['color']);//Cách 2
console.log(car);
//Xóa cặp key và value trong object
delete car.color;

console.log(car);



//2:Thuộc tính/phương thức của object trong javascript
//Thuộc tính
const userName = {
    name: '',
    age: '',
    address: '',
    email: ''
}
//Phương thức
const person = {
    fullName: function () {
        //code
    },
    lastName: function () {
        //code
    }
}
console.log(person);


//3:Thao tác với thuộc tính và đối tượng trong objects
var userName1 = {
    name: 'Binh Khanh',
    age: 23,
    address: 'Nghe An',
    email: 'binhkhanh250399@gmail.com'
}
console.log(userName1.name);//Lấy giá trị với thuộc tính name
delete userName1.address;//Xóa thuộc tính của đối tượng
console.log(userName1);


//Gọi phương thức
var Comment = {
    title: "",
    addComment: function () {
        this.validateComment();
    },
    validateComment: function () {
        console.log('khanhnb');
    }
};
Comment.addComment();


//4:Mảng chứa object- object chứa object
//object chưa object
var Comment = {
    info: {
        title: "",
        content: "",
        email: "",
        fullname: ""
    }
};


//Mảng chứa object
var message = [{
    title: "",
    content: "",
    email: "",
    fullName: ""
}];
message[0].title = "Tôi đang học lập trình javascript";
console.log(message[0].title);

//6:Lặp qua từng phần tử của object trong javascript
// for (key in object) {
//     //key chính là phần tử trong quá trình lặp
// }

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (key in user) {
    console.log(user.name);
}

const persons = {
    firstName: "khanh",
    lastName: 'binh',
    id: 1999,
    email: 'khanh@gmail.com',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log("Tên của tôi là: " + persons.fullName());


//object constructor
function fullName(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}


var author = new fullName('Binh', 'Khanh', 'images');
var users = new fullName('nam', 'nguyen', 'images');

author.email = "khanhnb@gmail.com";
user.email = 'namnguyen@gmail.com';
console.log(author.getName());
console.log(users.getName());

/*
Object prototype - basic
1.prototype là gì?
2.Sử dụng khi nào?
 */

function fullName(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

User.prototype.className = "javascript";//Sử dụng prototype thêm thuộc tính className vào User
var testUser = new User('son', 'Dang', 'images2');
console.log(testUser);



