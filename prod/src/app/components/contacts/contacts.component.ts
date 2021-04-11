import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'netch-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit{

  constructor(
    private app: AppComponent,
    private httpWorker: HttpWorkerService
  ) {

  }

  ngOnInit(): void {

  }

  openModal() {
    this.httpWorker.getTextContent('contacts').subscribe((res: any) => {
      this.app.openModal(res[0].header,res[0].body)
    })
  }
}
