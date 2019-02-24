import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {
  @ViewChild('conditionsForm') conditionsForm: NgForm;
  conditionList: any;
  precedentStdConditionList: any;
  precedentCtmConditionList: any;
  precedentCtmConditionIndex: number;
  subsequentStdConditionList: any;
  subsequentCtmConditionList: any;
  subsequentCtmConditionIndex: number;
  covenantsStdConditionList: any;
  covenantsCtmConditionList: any;
  covenantsCtmConditionIndex: number;
  disbursementConditionList: any;
  internalConditionList: any;
  internalConditionIndex: number;

  constructor() { }

  ngOnInit() {
    this.conditionList = [
      {
        category: 'Precedent',
        values: [
          {
            id: 1,
            text: 'Project de Vente w.r.t acquisition of land to be submitted.'
          },
          {
            id: 2,
            text: 'All relevant permits and clearances w.r.t the project to be submitted prior to disbursement of second tranche.'
          },
          {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
          },
          {
            id: 4,
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          },
          {
            id: 5,
            text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'
          },
          {
            id: 6,
            text: 'Nullam dictum felis eu pede mollis pretium.'
          },
          {
            id: 7,
            text: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.'
          },
          {
            id: 8,
            text: 'Phasellus viverra nulla ut metus varius laoreet.'
          }
        ]
      },
      {
        category: 'Subsequent',
        values: [
          {
            id: 1,
            text: 'Project de Vente w.r.t acquisition of land to be submitted. Sub'
          },
          {
            id: 2,
            text: 'All relevant permits and clearances w.r.t the project to be submitted prior to disbursement of second tranche. Sub'
          }
        ]
      },
      {
        category: 'Covenants',
        values: [
          {
            id: 1,
            text: 'Project de Vente w.r.t acquisition of land to be submitted. Cov'
          },
          {
            id: 2,
            text: 'All relevant permits and clearances w.r.t the project to be submitted prior to disbursement of second tranche. Cov'
          }
        ]
      },
      {
        category: 'Disbursement',
        values: [
          {
            id: 0,
            text: ''
          },
          {
            id: 1,
            text: 'Disbursement option 1'
          },
          {
            id: 2,
            text: 'Disbursement option 2'
          },
          {
            id: 3,
            text: 'Disbursement option 3'
          },
          {
            id: 4,
            text: 'Disbursement option 4'
          },
          {
            id: 5,
            text: 'Disbursement option 5'
          },
          {
            id: 6,
            text: 'Disbursement option 6'
          },
          {
            id: 7,
            text: 'Disbursement option 7'
          },
          {
            id: 8,
            text: 'Disbursement option 8'
          }
        ]
      }
    ];

    for (const key in this.conditionList) {
      if (this.conditionList[key].category) {
        const category = this.conditionList[key].category;

        switch (category) {
          case 'Precedent':
            this.precedentStdConditionList = [];
            this.pushInArray(this.conditionList[key], this.precedentStdConditionList);
            break;
          case 'Subsequent':
            this.subsequentStdConditionList = [];
            this.pushInArray(this.conditionList[key], this.subsequentStdConditionList);
            break;
          case 'Covenants':
            this.covenantsStdConditionList = [];
            this.pushInArray(this.conditionList[key], this.covenantsStdConditionList);
            break;
          case 'Disbursement':
            this.disbursementConditionList = [];
            for (const val in this.conditionList[key].values) {
              if (this.conditionList[key].values[val]) {
                this.disbursementConditionList.push(this.conditionList[key].values[val].text);
              }
            }
            break;
        }
      }
    }

    this.precedentCtmConditionList = [
      {
        id: -1,
        text: ''
      }
    ];
    this.precedentCtmConditionIndex = 0;

    this.subsequentCtmConditionList = [
      {
        id: -1,
        text: ''
      }
    ];
    this.subsequentCtmConditionIndex = 0;

    this.covenantsCtmConditionList = [
      {
        id: -1,
        text: ''
      }
    ];
    this.covenantsCtmConditionIndex = 0;

    this.internalConditionList = [
      {
        id: -1,
        text: ''
      }
    ];
    this.internalConditionIndex = 0;

    this.onTabSet();
  }

  onTabSet() {
    const tabNavs = document.querySelectorAll('.js-tab-nav > li');

    function onTabClick(e: any) {
      const clickedTab = e.currentTarget;
      const anchorRef = e.target;
      const tabPanels = document.querySelectorAll('.js-tab-panel');
      const activePanelID = anchorRef.getAttribute('href');
      const activePanel = document.querySelector(activePanelID);

      for (let i = 0; i < tabNavs.length; i++) {
        tabNavs[i].classList.remove('tab__nav-item--active');
        tabPanels[i].classList.remove('tab__panel--active');
      }

      clickedTab.classList.add('tab__nav-item--active');
      activePanel.classList.add('tab__panel--active');
      e.preventDefault();
    }

    for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener('click', onTabClick);
    }
  }

  pushInArray(origin: any, dest: any) {
    for (const val in origin.values) {
      if (origin.values[val]) {
        dest.push(origin.values[val]);
      }
    }
  }

  onAddNewCondition(conditionType: string) {
    const conditionItem = {
      id: -1,
      text: ''
    };

    switch (conditionType) {
      case 'Precedent':
        this.precedentCtmConditionList.push(conditionItem);
        this.precedentCtmConditionIndex++;
        break;
      case 'Subsequent':
        this.subsequentCtmConditionList.push(conditionItem);
        this.subsequentCtmConditionIndex++;
        break;
      case 'Covenants':
        this.covenantsCtmConditionList.push(conditionItem);
        this.covenantsCtmConditionIndex++;
        break;
      case 'Internal':
        this.internalConditionList.push(conditionItem);
        this.internalConditionIndex++;
        break;
    }
  }

  onDeleteCondition(conditionType: string, index: number) {
    switch (conditionType) {
      case 'Precedent':
        this.precedentCtmConditionList.splice(index, 1);
        this.precedentCtmConditionIndex--;
        break;
      case 'Subsequent':
        this.subsequentCtmConditionList.splice(index, 1);
        this.subsequentCtmConditionIndex--;
        break;
      case 'Covenants':
        this.covenantsCtmConditionList.splice(index, 1);
        this.covenantsCtmConditionIndex--;
        break;
      case 'Internal':
        this.internalConditionList.splice(index, 1);
        this.internalConditionIndex--;
        break;
    }
  }

  onToggleCondition(conditionType: string, index: number, el: HTMLInputElement) {
    // Should set/unset state of standard condition
    switch (conditionType) {
      case 'Precedent':
        if (el.checked === true) {
          this.precedentStdConditionList[index].state = 1;
        } else {
          this.precedentStdConditionList[index].state = 0;
        }
        break;
      case 'Subsequent':
        if (el.checked === true) {
          this.subsequentStdConditionList[index].state = 1;
        } else {
          this.subsequentStdConditionList[index].state = 0;
        }
        break;
      case 'Covenants':
        if (el.checked === true) {
          this.covenantsStdConditionList[index].state = 1;
        } else {
          this.covenantsStdConditionList[index].state = 0;
        }
        break;
    }
  }

  onOptionSelection(option: string) {
    for (const key in this.conditionList) {
      if (this.conditionList[key].category === 'Disbursement') {
        for (const val in this.conditionList[key].values) {
          if (this.conditionList[key].values[val].text === option) {
            this.conditionList[key].values[val].state = 1;
          } else {
            this.conditionList[key].values[val].state = 0;
          }
        }
      }
    }
  }

  onTabSave() {
    // Should save changes of current active tab
    // Should update state of standard condition selected and push any custom condition added
  }

}
