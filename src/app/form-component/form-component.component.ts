import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  constructor(private http: HttpClient) {}
  responses = '';
  submit(login: any) {
    console.log("Details entered successfully ");
    console.log(login.controls);
    const formValue = {
      EST_COST: login.controls.EST_COST.value,
      MODEOFTENDER: login.controls.Mode_OF_Tender.value,
      METHOD_OF_PURCHASE: login.controls.METHOD_OF_PURCHASE.value,
      FINANCIAL_POWER_CODE: login.controls.FINANCIAL_POWER_CODE.value,
      CFA_CODE: login.controls.CFA_CODE.value,
      CONCURRENCE_BY: login.controls.concurrence_by.value,
      BUDGET_HEAD_CODE: login.controls.budget_head_code.value,
      IS_PAC: login.controls.pac_status.value
    }

    this.http.post('http://localhost:4000/model', formValue)
      .subscribe(
        (response) => {
          console.log(response);
          this.responses = "The predicted number of days is: " + JSON.stringify(response);
        },
        (error) => console.log(error)
      );
  }

  countries = ['US', 'UK', 'China', 'Russia', 'Germany', 'India', 'Italy', 'Canada'];
  mode_of_tender = ['Procurement Through GeM','CAPSI','Through LPC','Rate Contracts','Single Tender','Limited','Open','CARS','Other'];
  method_of_purchase = ['Procurement Through GeM','CAPSI','Through LPC','Rate Contracts','Single Tender','Limited','Open','CARS','Other'];
  cfa_code = ['DIR','DGC','PDC']; 

  budget_head_code =  ['GN','PC','PR'];
  concurrence_by = ['DFA','DIR','IFA'];
  pac_status = ['YES','NO'];

 

}
