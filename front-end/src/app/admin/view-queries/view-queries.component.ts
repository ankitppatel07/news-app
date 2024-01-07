import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/admin/query.service'
import { Query } from 'src/app/models/query';
import { MsgService } from 'src/app/services/msg/msg.service'

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit {

  query : string = ''
  allQueriesArray : Query[] = []
  emailFlag : string ='';

  constructor(private queryService : QueryService,
    private msgService: MsgService) { }

  ngOnInit(): void {
    this.queryService.viewQueries().subscribe(
      (data : Query[]) => {
        this.allQueriesArray = data;
      },
      (err) => {
        console.log("Error fetching queries!!!")
      }
    );
  }

  editQuery(email) {
    this.emailFlag = email;
  }

  updateQuery(updatedQuery) {
    this.queryService.updateQuery(updatedQuery).subscribe(
      (data) => {
        alert("Query Status has been updated!!!")
      },
      (err) => {
        console.log("Error updating query")
      }
    )
    this.emailFlag = '';
  }

}
