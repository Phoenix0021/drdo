import { Component } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  submit(login: any)
  {
    console.log(login);
    console.log("Details entered successfully ")
  }

  
  countries = ['US', 'UK', 'China', 'Russia', 'Germany', 'India', 'Italy', 'Canada'];
  mode_of_tender = ['Procurement Through GeM','CAPSI','Through LPC','Rate Contracts','Single Tender','Limited','Open','CARS','Other'];
  method_of_purchase = ['Procurement Through GeM','CAPSI','Through LPC','Rate Contracts','Single Tender','Limited','Open','CARS','Other'];
  cfa_code = ['DIR','DGC','PDC']; 

  budget_head_code =  ['GN','PC','PR'];
  concurrence_by = ['DFA','DIR','IFA'];
  pac_status = ['YES','NO'];

 

}
