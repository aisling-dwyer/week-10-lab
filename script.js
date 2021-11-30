var subjectGrades = []


function subNumQuestion() {
    numSubjects = prompt("How many subjects do you take?");
    subjectGradesEntry()
    
}

function subjectGradesEntry(){
    for(i=0; i<numSubjects; i++){
    subjectGrades.push(prompt("What grade did you get in Subject "+(i+1)))
    }
}
    
function getGrades(){  
    for (i=0; i<numSubjects; i++){
        if(subjectGrades[i]>85){
            alert("Subject "+(i+1)+" = A ("+subjectGrades[i]+")")
        }
        else if (subjectGrades[i]>70){
            alert("Subject "+(i+1)+" = B ("+subjectGrades[i]+")")
        }
        else if (subjectGrades[i]>55){
            alert("Subject "+(i+1)+" = C ("+subjectGrades[i]+")")
        }
        else if (subjectGrades[i]>40){
            alert("Subject "+(i+1)+" = D ("+subjectGrades[i]+")")
        }
        else {
            alert("Subject "+(i+1)+" = Fail ("+subjectGrades[i]+")")
        }
    }
}

function getModuleAverage(){
    var sumOfGrades=0;
    for(i=0; i<numSubjects; i++){ 
        sumOfGrades = sumOfGrades + parseInt(subjectGrades[i]);
       
    }
    overallAverage = sumOfGrades/numSubjects
    alert("Your overall average result for this module is: "+overallAverage)
}