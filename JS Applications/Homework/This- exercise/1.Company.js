class Company{
    constructor(){
        this.departments=[];

        this.realDepartments={};
    }
    addEmployee(username, salary, position, department){
        if(!username||!salary||!position||!department){
            throw new Error("Invalid input!");            
        }
        if(salary<0){
            throw new Error(" Invalid input!");        
        }

        if(!this.realDepartments[department]){
            this.realDepartments[department]=[
                {
                    username: username,
                    salary: salary,
                    position: position,
                }
            ]
        }else{
            this.realDepartments[department].push({
                username: username,
                salary: salary,
                position: position,
            })
        }

        let person={
            username: username,
            salary: salary,
            position: position,
            department: department,
        }

        this.departments.push(person);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    getHighestAvrSalary(){
       // let agregatedDepartments=this.departments.reduce((acc,employee)=>{
       //    if(!acc[employee.department]){
       //        acc[employee.department]={};
      //     }
      //  },{});

      let highestAvrSalaryDeparment=Object.keys(this.realDepartments)
        .sort((a,b)=>{
          let avgADepartment=this.realDepartments[a].reduce((acc,employee)=>acc+Number(employee.salary),0)/this.realDepartments[a].length;
          let avgBDepartment=this.realDepartments[b].reduce((acc,employee)=>acc+Number(employee.salary),0)/this.realDepartments[b].length;

          return avgBDepartment-avgADepartment; 
      })[0];

      let highestAvg=this.realDepartments[highestAvrSalaryDeparment]
      .reduce((acc,employee)=>acc+employee.salary,0)/this.realDepartments[highestAvrSalaryDeparment].length;

      return {
          highestAvrSalaryDeparment,
          highestAvg,
      }
    }

    bestDepartment(){
        let highestAvg=this.getHighestAvrSalary();

        let result= `Best Department is: ${highestAvg.highestAvrSalaryDeparment}\nAverage salary: ${highestAvg.highestAvg.toFixed(2)}\n`;
        this.realDepartments[highestAvg.highestAvrSalaryDeparment].sort((a,b)=>{
            let workerA=a.salary;
            let workerB=b.salary;
            
            if(workerA===workerB){
                return a.username.localeCompare(b.username);
            }

            return workerB-workerA;
        }).forEach(element => {
            result+=element.username+' '+element.salary+' '+element.position+'\n';
        });  
        
        return result.trim();
    }    
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log( c.bestDepartment());