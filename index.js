
//object creation with brases
  const object={
    empid: 2,
    name:"preethi",
    college:"SRIT",
    dept:"IT",
    location:"cbe",
    school:"Keartiman",
    getEmpid: function(){
            return this.empid;
          },
    setEmpid: function(empid){
            this.empid=empid;
          },
    getName: function(){
            return this.name;
          },
    setName: function(name){
          this.name=name;
          },
    getCollege: function(){
            return this.college;
          },
    setCollege: function(college){
            this.college=college;
          },
    getDept: function(){
            return this.dept;
          },
    setDept: function(dept){
            this.dept=dept;
         },
    getLocation: function(){
            return this.location;
         },
    setLocation: function(location){
            this.location=location;
          },
    getSchool: function(){
            return this.school;
          },
    setSchool: function(school){
            this.school=school;
          },
}
//empid...get and set!
let empid=object.getEmpid();
console.log('empid:',empid);
object.setEmpid(321);
empid=object.getEmpid();
console.log('empid:',empid);
//name..get and set!
let name=object.getName();
console.log('Name:',name);
object.setName('monika');
name=object.getName();
console.log('Name:',name);
//college..get and set!
let college=object.getCollege();
console.log("college:",college);
object.setCollege("SKCET");
college=object.getCollege();
console.log("college:",college);
//dept...set and get!
let dept=object.getDept();
console.log("Department:",dept);
object.setDept("ECE");
dept=object.getDept();
console.log("Department:",dept);
//school...get and set!
let school=object.getSchool();
console.log("School:",school);
object.setSchool("Avila");
school=object.getSchool();
console.log("School:",school);
//location..get and set...!
let location=object.getLocation();
console.log("Location",location);
object.setLocation("chennai");
location=object.getLocation();
console.log("Location",location);

//---------------------------------------------

//object creation with function
