import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PeriodicElement, ELEMENT_DATA} from '../../shared/periodic-elements';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {TRANSACTIONS} from '../../shared/transactions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns4 = ['item', 'cost'];
  dataSource = ELEMENT_DATA;
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA);
  dataSource4 = new MatTableDataSource(TRANSACTIONS);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA);
  transactions = TRANSACTIONS;
  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // @ViewChild('someVar') el:ElementRef;
  @ViewChild('allPaginator', {static:true}) paginator5: MatPaginator;
  @ViewChild('allSort', {static: true}) sort5: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource2.sort = this.sort;

    this.dataSource5.paginator = this.paginator5;
    this.dataSource5.sort = this.sort5;
  }
  applyFilter(filterValue: string) {
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  applyFilterForAll(filterValue: string) {
    this.dataSource5.filter = filterValue.trim().toLowerCase();

    if (this.dataSource5.paginator) {
      this.dataSource5.paginator.firstPage();
    }
  }
}
