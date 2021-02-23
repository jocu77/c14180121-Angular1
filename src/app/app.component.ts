import { isNewLine } from '@angular/compiler/src/chars';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // tugas : string[][] = [
  //   ["*","*","*","*","*"],
  //   ["*","*","*","*","*"],
  //   ["*","*","*","*","*"],
  //   ["*","*","*","*","*"],
  //   ["*","*","*","*","*"]
  // ]
  a = 0;
  b = 0;
}

var matrix: string[][] = new Array();
matrix.push(["*","*","*","*","*"]);
matrix.push(["*","*","*","*","*"]);
matrix.push(["*","*","*","*","*"]);
matrix.push(["*","*","*","*","*"]);
matrix.push(["*","*","*","*","*"]);

document.writeln(matrix[0][0]);
document.writeln(matrix[0][1]);
document.writeln(matrix[0][2]);
document.writeln(matrix[0][3]);
document.writeln(matrix[0][4]);
document.writeln("<br/>");

document.writeln(matrix[1][0]);
document.writeln(matrix[1][1]);
document.writeln(matrix[1][2]);
document.writeln(matrix[1][3]);
document.writeln(matrix[1][4]);
document.writeln("<br/>");

document.writeln(matrix[2][0]);
document.writeln(matrix[2][1]);
document.writeln(matrix[2][2]);
document.writeln(matrix[2][3]);
document.writeln(matrix[2][4]);
document.writeln("<br/>");

document.writeln(matrix[3][0]);
document.writeln(matrix[3][1]);
document.writeln(matrix[3][2]);
document.writeln(matrix[3][3]);
document.writeln(matrix[3][4]);
document.writeln("<br/>");

document.writeln(matrix[4][0]);
document.writeln(matrix[4][1]);
document.writeln(matrix[4][2]);
document.writeln(matrix[4][3]);
document.writeln(matrix[4][4]);

if(matrix[0][0] == "1" &&
matrix[0][1] == "1" &&
matrix[0][2] == "1" &&
matrix[0][3] == "1" &&
matrix[0][4] == "1"||

matrix[1][0] == "1" &&
matrix[1][1] == "1" &&
matrix[1][2] == "1" &&
matrix[1][3] == "1" &&
matrix[1][4] == "1"||

matrix[2][0] == "1" &&
matrix[2][1] == "1" &&
matrix[2][2] == "1" &&
matrix[2][3] == "1" &&
matrix[2][4] == "1"||

matrix[3][0] == "1" &&
matrix[3][1] == "1" &&
matrix[3][2] == "1" &&
matrix[3][3] == "1" &&
matrix[3][4] == "1"||

matrix[4][0] == "1" &&
matrix[4][1] == "1" &&
matrix[4][2] == "1" &&
matrix[4][3] == "1" &&
matrix[4][4] == "1")
{
document.writeln("1 Menang");
}

if(matrix[0][0] == "0" &&
matrix[0][1] == "0" &&
matrix[0][2] == "0" &&
matrix[0][3] == "0" &&
matrix[0][4] == "0"||

matrix[1][0] == "0" &&
matrix[1][1] == "0" &&
matrix[1][2] == "0" &&
matrix[1][3] == "0" &&
matrix[1][4] == "0"||

matrix[2][0] == "0" &&
matrix[2][1] == "0" &&
matrix[2][2] == "0" &&
matrix[2][3] == "0" &&
matrix[2][4] == "0"||

matrix[3][0] == "0" &&
matrix[3][1] == "0" &&
matrix[3][2] == "0" &&
matrix[3][3] == "0" &&
matrix[3][4] == "0"||

matrix[4][0] == "0" &&
matrix[4][1] == "0" &&
matrix[4][2] == "0" &&
matrix[4][3] == "0" &&
matrix[4][4] == "0")
{
document.writeln("0 Menang");
}