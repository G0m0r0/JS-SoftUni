class computer{
    constructor(ramMemory,cpuGHz,hddMemory){
        this.ramMemory=ramMemory,
        this.cpuGHz=cpuGHz,
        this.hddMemory=hddMemory,
        this.taskManager=[],
        this.installedPrograms=[]
    }

    installAProgram(name,requiredSpace){
        if(this.hddMemory<requiredSpace){
            throw new Error('There is not enough spae on the hard drive');            
        }

        const newProgram={
            name,
            requiredSpace
        }
        this.installAProgram.push(newProgram);
        this.hddMemory-=requiredSpace;

        return  newProgram;                 
    }

    uninstallAProgram(name){
        const programIndex=this.installAPrograms.findIndex((p=>p.name===name));

        if(programIndex===-1){
            throw new Error('Control panel is not responding');
        }

        this.installAPrograms.splice(programIndex,1);
        this.hddMemory+=this.installedPrograms[programIndex].requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name){
        const programIndex=this.installAPrograms.findIndex((p=>p.name===name));

        if(programIndex===-1){
            throw new Error(`The ${name} is not recognized`);
        }

        const openedProgramIndex=this.taskManager.findIndex(p=>p.name===name);

        if(openedProgramIndex>-1){
            throw new Error(`The ${name} is already open`);
        }

        ramUsage=(this.installedPrograms[programIndex].requiredSpace/this.ramMemory)*1.5;

        cpuUsage=((this.installedPrograms[programIndex].requiredSpace/this.cpuGHz)/500)*1.5;

        if((this.totalRamUsage+ramUsage)>=100){
            throw new Error(`${name} caused out of memory exception`);
        }

        if((this.totalCpuUsage+cpuUsage)>=100){
            throw new Error(`${name} caused out of cpu usage`);
        }

        newOpenedProgram={
            name,
            ramUsage,
            cpuUsage,
        }
        this.taskManager.push(newOpenedProgram);

        return newOpenedProgram;
    }

    taskManagerView(){
        if(this.taskManager.length===0){
            return 'Everything is working smooth';
        }

        return this.taskManager
               .map(p=>`Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`)
               .join('\n');
    }

    get totalRamUsage(){
        return this.taskManager.reduce((acc,curr)=>acc+curr.ramUsage,0);
    }

    get totalCpuUsage(){
        return this.taskManager.reduce((acc,curr)=>acc+curr.cpuUsage,0);
    }
}