import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private baseUrl = 'https://api.twilio.com/2010-04-01/Accounts/ACe53bd4fa314d5befa209fa6c9898e27d/Messages.json';

  constructor(private http: HttpClient) { }

  sendSms(name: string, senderNumber: string, message: string) {
    const authToken = '625e889e4748e387cd2eb3ff579e4c11'; // Twilio auth token
    const accountSid = 'ACe53bd4fa314d5befa209fa6c9898e27d'; // Twilio account SID
    const to = '+918378872641'; // receiver mobile number
    const from = '+16814024187';
    
    const body = "Hello Atharva, " + name + ", whose mobile number is " + senderNumber + " has messaged you " + message;

    const url = `${this.baseUrl}`;

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`
      }
    };

    const data = {
      To: to,
      From: from,
      Body: body
    };

    const payload = new URLSearchParams(data).toString();

    return this.http.post(url, payload, options);
  }
}

