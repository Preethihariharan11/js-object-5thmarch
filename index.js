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
let Id=object.getEmpid;
console.log(Id);
