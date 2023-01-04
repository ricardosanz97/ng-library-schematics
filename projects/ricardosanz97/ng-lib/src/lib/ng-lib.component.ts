import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-lib',
  template: `
    <p>
      ng-lib-works!
      <img class="avatar" src="assets/avatar-1.png" />
    </p>
  `,
  styles: [],
})
export class NgLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
