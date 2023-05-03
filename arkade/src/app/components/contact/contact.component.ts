import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.emailForm = this.fb.group({
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    window.open(`mailto:${environment.email}?subject=` + this.emailForm.get('subject')?.value +'&body=' + this.emailForm.get('text')?.value + '');
  }
}
