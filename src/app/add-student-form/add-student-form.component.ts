import { Component, EventEmitter, Output } from '@angular/core';
import { StudentApiBackEndService } from '../API/student-api-back-end.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent {
  @Output() closeFormEmitter = new EventEmitter<void>();
  @Output() studentAdded = new EventEmitter<void>();
  loading: boolean = false;

  constructor(private studentApi: StudentApiBackEndService) { }

  closeForm() {
    this.closeFormEmitter.emit();
  }

  studentName: string;
  studentAge: number;

  addStudent() {
    this.loading = true; 
      const credentials = {
      name: this.studentName,
      age: this.studentAge
    };
    this.studentApi.addStudent(credentials).subscribe(
      Response => {
        console.log(JSON.stringify(Response));
        this.loading = false;
        this.studentAdded.emit();
      },
      error => {
        console.log(error);
        this.loading = false; 
      }
    );
  }
}
