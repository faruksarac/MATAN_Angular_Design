import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Bank, BANKS} from '../../shared/demo-data';
import {map, startWith} from 'rxjs/operators';
import {DataService, Person} from '../../shared/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  /////////////////////
  options: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  // For search select
  bankControl = new FormControl();
  filteredBanks: Observable<Bank[]>;
  banks: Bank[] = BANKS;

  // For ng select multi-select and search
  people: Person[] = [];
  selectedPeople = [];

  // For ng-select virtual scroll
  photos = [];
  photosBuffer = [];
  bufferSize = 50;
  numberOfItemsFromEndBeforeFetchingMore = 10;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.options = fb.group({
    hideRequired: false,
    floatLabel: 'auto',
  });
    // For ng select multi-select and search
    this.filteredBanks = this.bankControl.valueChanges
      .pipe(
        startWith(''),
        map(bank => bank ? this._filterBanks(bank) : this.banks.slice())
      );
    // For ng-select virtual scroll
  }

  ngOnInit() {
    // For ng-select search
    this.dataService.getPeople()
      .pipe(map(x => x.filter(y => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id, this.people[1].id];
      });
    // For ng-select virtual scroll
    this.dataService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.photosBuffer = this.photos.slice(0, this.bufferSize);
    });
  }

  // For select with search
  private _filterBanks(value: string): Bank[] {
    const filterValue = value.toLowerCase();
    return this.banks.filter(bank => bank.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // For select error message
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  // For ng-select virtual scroll
  onScrollToEnd() {
    this.fetchMore();
  }

  onScroll({ end }) {
    if (this.loading || this.photos.length <= this.photosBuffer.length) {
      return;
    }

    if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.photosBuffer.length) {
      this.fetchMore();
    }
  }
  private fetchMore() {
    const len = this.photosBuffer.length;
    const more = this.photos.slice(len, this.bufferSize + len);
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
      this.loading = false;
      this.photosBuffer = this.photosBuffer.concat(more);
    }, 200)
  }
}
