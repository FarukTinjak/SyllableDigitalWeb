import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import axios from "axios";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  full_name = new FormControl('');
  phone_number = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  async submit() {
    let res = await axios.post('/contact',{
      full_name:this.full_name.value,
      phone_number:this.phone_number.value,
      email:this.email.value,
      message:this.message.value
    });
    if(res.status==200)
    {
      this.full_name.setValue('')
      this.phone_number.setValue('')
      this.email.setValue('')
      this.message.setValue('')
      alert('Contact form submitted.')
    }
    else {
      alert('Error sending contact form')
    }
  }
}
