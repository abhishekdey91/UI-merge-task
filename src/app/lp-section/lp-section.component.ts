import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lp-section',
  templateUrl: './lp-section.component.html',
  styleUrls: ['./lp-section.component.css'],
})

export class LpSectionComponent implements OnInit {
  constructor() { }
  items: any
  dataList = [];
  currentDataList = [];
  grpList = [];
  recordView = true;
  totalItem = this.dataList.length;
  item1 = 1;
  item2 = 13;
  itemsPerPage = 13;
  index = 0;
  data = [];
  grpItemKeys;
  toggleClass = true;
  fixes = [];
  mergeFix = false;
  parentIndex = -1;
  checked = [];
  selectedRow = [];

  ngOnInit() {
    this.dataList = [
      { policyNumber: 'NGXE1006-2022R7111', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R71', status: '33Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc1', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R71h1', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: '33Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc2', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r3', status: '33Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc3', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r3', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r36', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r34', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r3', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r333', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711rff', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R711r33', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: 'NGXE1006-2022R7j99', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];
    //this.dataList = this.dataList.map(connect1);
    // function connect1(dateCurrent, index) {
    //   return { ...dateCurrent, parentIndex: index, childIndex: null };
    // }
    this.currentDataList = [...this.dataList];
    this.currentDataList.map((data, index) => { data.parentIndex = index, data.childId = null, data.oldId = index, data });
    this.totalItem = this.currentDataList.length;
    this.fixes = Object.keys(this.currentDataList[0]);
    this.fixes =this.fixes.filter((data) => ['parentIndex', 'childId', 'oldId'].indexOf(data) < 0);
    this.checked = this.fixes.map(() => { const checked = false });
  }

  connect(id) {
    return this.grpItemKeys.filter((data) => id !== data);
  }


  apply(parentIndex) {
    this.mergeFix = !this.mergeFix;
    this.parentIndex = parentIndex;
    this.checked = this.fixes.map(() => { const checked = false });
  }

  applyMerge() {
    this.selectedRow = this.currentDataList[this.parentIndex];
    this.resetChildGroup(this.parentIndex);
    const X1 = this.currentDataList.filter((data, index) => index !== this.parentIndex && this.groupCheck(data));
    X1.map((data) => { data.childId = this.parentIndex,  data.parentIndex = null; });
    this.apply(null);
    console.log(this.currentDataList);
  }

  resetChildGroup(parentIndex) {
    //let id = this.currentDataList.length;
    this.currentDataList.map((data, index) => {if(parentIndex === data.childId)  {
      data.childId = null;
      //data.childIndex = null;
      data.parentIndex = data.oldId;
      //data.parentIndex = data.oldId;
    }});
  }
  
  resetChildGroup1(parentIndex) {
    //let id = this.currentDataList.length;
    const a = this.currentDataList[parentIndex];
    a.childId = null;
    //a.childIndex = null;
    a.parentIndex = a.oldId;
    //a.parentIndex = a.oldId;
    console.log(this.currentDataList);
  }

  groupCheck(data) {
    const filterList = this.checked.filter((dat, index) => data.childId === null && data[this.fixes[index]] === this.selectedRow[this.fixes[index]] && dat);
    return filterList.length === this.checked.filter((data) => data).length && filterList.length > 0;
  }

  selected(extra, id) {
    return this.checked[id] === extra;
  }

  updateCheck(event, id) {
    this.checked[id] = event.target.checked;
  }
}