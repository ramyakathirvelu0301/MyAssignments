function gradeCalculation(){
    let marks=70;
    switch(true)
    {
        case(marks>=90):
          console.log("A Grade");
          break;
        case(marks>=80 && marks<90):
          console.log("B Grade");
          break;
        case(marks>=35 && marks<80):
          console.log("C Grade");
          break;
        default:
            console.log("D Grade");


    }
}
gradeCalculation();