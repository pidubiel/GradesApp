//Kontener na uczniów
var studentsList = [];
//Konstruktor ucznia
function student(name, behavior, mathematics) {
  this.name = name;
  this.behavior = behavior;
  this.mathematics = mathematics;
};

//Funkcja obliczająca średnią z przedmiotu na podstawie tablicy ocen
function studentsGrade(grades) {

  var sumOfGrades = grades.reduce(function(a, b) {
    return a+b
  });
  
  return (sumOfGrades/grades.length).toFixed(2);
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
  if (array2d.length == 0) {
    return 0
  }
  else {
    return (allGradesSum/array2d.length).toFixed(2);
  }
};


function appendTable() {
   
  //Pętla wypisująca imiona wszystkich uczniów i ich ocenę końcową z matematyki.
  for (var i = 0; i < studentsList.length; i++) {
    var studentGrade = studentsGrade(studentsList[i].mathematics);
    var studentBehavior = studentsList[i].behavior;
    var mathGrades = studentsList[i].mathematics.join(", ");
    var tableElement = "<tr class='student'><td data-label='Nazwisko i imię'>"+studentsList[i].name+"</td><td data-label='Zachowanie'>"+studentBehavior+"</td><td data-label='Matematyka'>"+mathGrades+"</td><td data-label='Ocena średnia'>"+studentGrade+"</td></tr>"

    $("tbody").append(tableElement);
  }; //end of the loop 
};

appendTable();


//$("#allGradesAverage").html("Średnia całej klasy:  " + averageGrade());

$("#addStudent").click(function() {
  
  $("tbody .student").remove();
  var nameAndSurname = $("input[id='name']").val();
  var behaviorGrade = parseFloat($("input[id='behavior']").val());
  var mathGrades = $("input[id='mathematics']").val();
  var lastSign = mathGrades.charAt(mathGrades.length-1);
  if (lastSign == " ") {
    mathGrades = mathGrades.slice(0,-1);
  }
  var gradesValue = mathGrades.split(" ");
  var gradesArray = [];
  for (var i = 0; i < gradesValue.length; i++) {
    gradesArray.push(parseFloat(gradesValue[i]));
  };
  studentsList.push(new student(nameAndSurname, behaviorGrade, gradesArray));
  appendTable();
  $("#allGradesAverage").html("Średnia całej klasy:  " + averageGrade());
  //Wyzerowanie wartości inputów
  removeValues();
});

function removeValues() {
  $("input[id='name']").val("");
  $("input[id='behavior']").val("");
  $("input[id='mathematics']").val("");
};





