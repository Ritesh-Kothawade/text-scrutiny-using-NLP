import { Component } from '@angular/core';
import { SmsService } from 'src/app/sms.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
    customerName: string = "";
    message: string = "";
    senderNumber: string = "";

    constructor(private smsService: SmsService) {}

  sendMessage() {
    this.smsService.sendSms(this.customerName, this.senderNumber, this.message).subscribe(() => {
      alert('Message sent successfully!');
      this.customerName="";
      this.message="";
      this.senderNumber="";
    }, error => {
      console.error(error);
      alert('Failed to send message!');
    });
  }
}

