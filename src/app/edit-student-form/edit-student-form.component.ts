import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentApiBackEndService } from '../API/student-api-back-end.service';

@Component({
  selector: 'app-edit-student-form',
  templateUrl: './edit-student-form.component.html',
  styleUrl: './edit-student-form.component.scss',
})
export class EditStudentFormComponent {
  @Output() closeFormEmitter = new EventEmitter<void>();
  @Output() studentAdded = new EventEmitter<void>();
  @Input() selectedStudent: any;
  loading: boolean = false;
  constructor(private studentApi: StudentApiBackEndService) {}

  closeForm() {
    this.closeFormEmitter.emit();
  }

  onUpdateStudent() {
    // console.log('Updated student data:', this.selectedStudent);

    const credentials = {
      name: this.selectedStudent.name,
      age: this.selectedStudent.age,
    };
    this.studentApi
      .updateStudent(credentials, this.selectedStudent.idStudent)
      .subscribe(
        (response) => {
          console.log('Student updated successfully:', response);
        },
        (error) => {
          console.error('Error occurred while updating student:', error);
        }
      );
  }
}
