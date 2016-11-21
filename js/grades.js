var studentsList = [{
                        name: "Ansyk Wojciech",
                        behavior: 4,
                        mathematics: [3, 2, 4, 5 ,1]
                      }, 
                      {
                        name: "Celadyn Mariusz",
                        behavior: 2,
                        mathematics: [2, 2, 3, 2, 1]
                      },
                      {
                        name: "Jabłoński Wiktor",
                        behavior: 4.5,
                        mathematics: [3, 3, 4, 2, 5]
                      }];

function student(name, behavior, mathematics) {
  this.name = name;
  this.behavior = behavior;
  this.mathematics = mathematics;
}

adam = new student("Jędrzykiewicz Adam", 5, [2, 4, 4, 4, 3]);
mirek = new student("Glazur Mirosław", 3, [2, 2, 5, 5, 5]);
studentsList.push(adam);
studentsList.push(mirek);
studentsList.push(new student("Leśniak Michał", 4, [3, 4, 5, 1, 4]));
studentsList.push(new student("Zborowski Tomasz", 2.5, [2, 3, 1, 5, 3, 5]));
studentsList.push(new student("Kangur Aleksander", 5, [5, 5, 5, 5, 5, 5]));

//Funkcja obliczająca ocenę średnią z przedmiotu.
function studentsGrade(grades) {
  
  var sumOfGrades = 0;
    for (var i = 0; i < grades.length; i++) {
      sumOfGrades += grades[i];
    }
  var averageGrade = sumOfGrades / grades.length;
  
  return averageGrade.toFixed(1);
};

//Funkcja obliczająca śrdenią ocenę z przedmiotu dla całej klasy.
function averageGrade() {
  var allGrades = [];
  for (var i = 0; i < studentsList.length; i++) {
    allGrades.push(studentsList[i].mathematics);
  };
  //Tablica ocen z danego przedmiotu wszystkich uczniów.
  var array2d = [].concat.apply([], allGrades);
  var allGradesSum = 0;
  for (var i = 0; i < array2d.length; i++) {
    allGradesSum += array2d[i];
  };
  return (allGradesSum/array2d.length).toFixed(2);
};


function appendTable() {
   
  //Pętla wypisująca imiona wszystkich uczniów i ich ocenę końcową z matematyki.
  for (var i = 0; i < studentsList.length; i++) {
    var studentGrade = studentsGrade(studentsList[i].mathematics);
    var studentBehavior = studentsList[i].behavior;
    var mathGrades = studentsList[i].mathematics.join(", ");
    var tableElement = "<tr class='student'><td>"+studentsList[i].name+"</td><td>"+studentBehavior+"</td><td>"+mathGrades+"</td><td>"+studentGrade+"</td></tr>"

    $("tbody").append(tableElement);
  }; //end of the loop 
};

appendTable();


$("#allGradesAverage").html("Średnia całej klasy: " + averageGrade());

$("#addStudent").click(function() {
  
  $("tbody .student").remove();
  var nameAndSurname = $("input[id='name']").val();
  var behaviorGrade = parseInt($("input[id='behavior']").val());
  var mathGrades = $("input[id='mathematics']").val();
  var gradesValue = mathGrades.split(" ");
  var gradesArray = [];
  for (var i = 0; i < gradesValue.length; i++) {
    gradesArray.push(parseInt(gradesValue[i]));
  };
  studentsList.push(new student(nameAndSurname, behaviorGrade, gradesArray));
  appendTable();
  $("#allGradesAverage").html("Średnia całej klasy:   " + averageGrade());
  //Wyzerowanie wartości inputów
  removeValues();
});

function removeValues() {
  $("input[id='name']").val("");
  $("input[id='behavior']").val("");
  $("input[id='mathematics']").val("");
};





