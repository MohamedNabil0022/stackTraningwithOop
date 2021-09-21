class Stack{
    constructor(works){
     this.works = works
    }

    insertTask(task){
        this.works.push(task);
    }

    peek(){
        return this.works[this.works.length - 1]
    }
    finish(){
     return   this.works.pop() ;
    }
    search(taskName){
        var arrPic = this.works.slice();
        for (let i = 0 ;i<arrPic.length;i++){
            if(taskName == arrPic[i].name ){
                console.log('found')
                return arrPic[i]
            }else{
                console.log('notFound');
            }
        }
    }
    searchOfIndex(n){
        if(n > this.sizeOfStack())throw 'out of Range'
        var arrPic = this.works.slice();
        if(n<=0){throw 'error'}
        while(--n !==0 ){
            arrPic.pop();
        }
        console.log(arrPic.pop())
        return arrPic.pop();

    }

    sizeOfStack(){
        return this.works.length;
    }
}

class task{
    constructor(name,time,price){
        this.name= name;
        this.price = price;
        this.time= time;

    }
}

var workStack = new Stack([]);
var currentTaskDiv = document.getElementById('currentTask');

if (workStack.sizeOfStack() == 0){
    var pNameCurrent = document.createElement('p');
    pNameCurrent.innerHTML = 'لا يوجد اعمال'
    currentTaskDiv.append(pNameCurrent)
        var finishBtn = document.getElementById('finishBtn');

    finishBtn.disabled = true     
   
}
var   insertBtn = document.getElementById('insertBtn')
insertBtn.disabled = true  
function myFunction(taskName,taskTime,taskPrice,insertBtn) {
   
if(taskName == "" || taskTime == "" ) {
    
    insertBtn.disabled = true     
}else {
    insertBtn.disabled = false
}
}
    

function insert(){
    finishBtn.disabled = false     
    // المهام
    var parent = document.getElementById('works');
    parent.innerHTML=''

    var newTask = new task(tName.value,tTime.value,tPrice.value);
    workStack.insertTask(newTask);
    console.log(workStack);


     if (workStack.sizeOfStack() == 0){
        var pNameCurrent = document.createElement('p');
        pNameCurrent.innerHTML = 'لا يوجد اعمال'
        currentTaskDiv.append(pNameCurrent)
    
    }
    if(workStack.sizeOfStack() || workStack.sizeOfStack() >  0 ){ 
        currentTaskDiv.innerHTML = ''
        var pNameCurrent = document.createElement('p');
         pNameCurrent.innerHTML = 'current task name:   ' + workStack.peek().name ;
         var pTimeCurrent = document.createElement('p');
         pTimeCurrent.innerHTML = 'current task time:   ' + workStack.peek().time;
         var pPriceCurrent = document.createElement('p');
         pPriceCurrent.innerHTML = 'current task price:  ' + workStack.peek().price;

         var myDiv = document.createElement('div') ;
         myDiv.style.border='3px solid #00F'
         myDiv.style.margin ='0 0 5px 0'
         myDiv.style.borderRadius ='10px'
         myDiv.style.backgroundColor='whiteSmoke'
         myDiv.append(pNameCurrent,pPriceCurrent,pTimeCurrent)
         currentTaskDiv.appendChild(myDiv)
         
    }

    // دي عشان املي ديف المهام
    for(let i =0;i<workStack.sizeOfStack();i++){
        var pName = document.createElement('p');
        pName.innerHTML = 'task name:   ' + workStack.works[i].name ;
        var pTime = document.createElement('p');
        pTime.innerHTML = 'task time:   ' + workStack.works[i].time;
        var pPrice = document.createElement('p');
        pPrice.innerHTML = 'task price:  ' + workStack.works[i].price;
        
        var myDiv = document.createElement('div') ;
        myDiv.style.border='3px solid #00F'
        myDiv.style.margin ='0 0 5px 0'
        myDiv.style.borderRadius ='10px'
        myDiv.style.backgroundColor='white'

        myDiv.append(pName,pPrice,pTime)
        parent.appendChild(myDiv);
    }
}


function finishTask(){

   
    if(workStack.sizeOfStack()) {
        var popedTask =  workStack.finish()
        if(workStack.sizeOfStack() !== 0) {
            console.log(popedTask)
            currentTaskDiv.innerHTML = '';
           
            var pNameCurrent = document.createElement('p');
             pNameCurrent.innerHTML = 'current task name:   ' + workStack.peek().name ;
             var pTimeCurrent = document.createElement('p');
             pTimeCurrent.innerHTML = 'current task time:   ' +  workStack.peek().time;
             var pPriceCurrent = document.createElement('p');
             pPriceCurrent.innerHTML = 'current task price:  ' +  workStack.peek().price;
             
             currentTaskDiv.append(pNameCurrent,pPriceCurrent,pTimeCurrent);
        }else  if (workStack.sizeOfStack() == 0){
            currentTaskDiv.innerHTML = ''
            var pNameCurrent = document.createElement('p');
            pNameCurrent.innerHTML = 'لا يوجد اعمال'
            currentTaskDiv.append(pNameCurrent)
            var finishBtn = document.getElementById('finishBtn');
         
            finishBtn.disabled = true     
           
        }
       
    
         var parent = document.getElementById('works');
        parent.innerHTML=''
        for(let i =0;i<workStack.sizeOfStack();i++){
            var pName = document.createElement('p');
            pName.innerHTML = 'task name:   ' + workStack.works[i].name ;
            var pTime = document.createElement('p');
            pTime.innerHTML = 'task time:   ' + workStack.works[i].time;
            var pPrice = document.createElement('p');
            pPrice.innerHTML = 'task price:  ' + workStack.works[i].price;
            var myDiv = document.createElement('div') ;
            myDiv.style.border='3px solid gray'
            myDiv.style.margin ='0 0 5px 0'
            myDiv.style.backgroundColor='#ddd'
            myDiv.append(pName,pPrice,pTime)
    /*         myDiv.appendChild(pTime);
            myDiv.appendChild(pPrice); */
            parent.appendChild(myDiv);
        } 
    }
  

}