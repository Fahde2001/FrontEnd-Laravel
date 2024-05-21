import { Component } from '@angular/core';
import { StudentApiBackEndService } from '../../API/student-api-back-end.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  //variable
  showAddStudentForm: boolean = false;
  showEditStudentForm:boolean=false;
  studentsData = [];
  isDropdownOpen: { [key: string]: boolean } = {}; // Use object instead of array for dynamic keys
  SupplyChaineName: string;
  selectedStudent: any;
  searchQuery: string = '';
  filteredStudents: any[] = [];


  constructor(private studentApi: StudentApiBackEndService) { }

  ngOnInit(): void {
    this.listStudent();
  }
  
  toggleAddStudentForm() {
    this.showAddStudentForm = !this.showAddStudentForm;
  }
  //close student Add Form
  closeAddStudentForm() {
    this.showAddStudentForm = false;
  }
  //close student edit form
  closeEditStudentForm() {
    this.showEditStudentForm = false;
  }
  //to open menu 3 point 
  toggleDropdown(item: any) {
    const index = this.studentsData.findIndex(student => student.idStudent === item.idStudent);
    if (index !== -1) {
      this.isDropdownOpen[item.idStudent] = !this.isDropdownOpen[item.idStudent];
      console.log(`Dropdown toggled for student ${item.name}`);
      console.log(`Dropdown status for student ${item.name}: ${this.isDropdownOpen[item.idStudent]}`);
    }
  }
  //search student by name
  filterStudents() {
    if (this.searchQuery.trim() === '') {
      this.filteredStudents = this.studentsData; 
    } else {
      this.filteredStudents = this.studentsData.filter(student =>
        student.name.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
      );
    }
    console.log("Filtered students:", this.filteredStudents); // Check filtered data
  }
  

  toggleEditStudentForm(student: any) {
    this.selectedStudent = student;
    console.log(JSON.stringify(this.selectedStudent))
    this.showEditStudentForm = !this.showEditStudentForm;
  }
  
    
  //list all student by suplly chiane
  listStudent() {
    this.SupplyChaineName = localStorage.getItem("SupplyChianeName")
    this.studentApi.getStudent().subscribe(
      Response => {
       // console.log(JSON.stringify(Response));
        this.studentsData = Response;
        this.filteredStudents = [...this.studentsData]
       
      }, error => {
        console.log("Error occurred while fetching students: " + error);
      }
    )
  }
  //call Api To delete student
  DeleteStudent(idStudent:number){
    this.studentApi.deleteStudent(idStudent).subscribe(
      Response=>{
       // console.log(JSON.stringify(Response));
        this.listStudent();
      },error=>{
        console.log("error");
      }
    )
  }
  //event to update list when add student 
  onStudentAdded() {
    this.listStudent();
  }
}
