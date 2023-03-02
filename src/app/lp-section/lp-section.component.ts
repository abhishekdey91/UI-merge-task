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
      { policyNumber: '0', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '1', status: '33Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc1', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '2', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '3', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '4', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '5', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '6', status: '33Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc2', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '7', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '8', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '9', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '10', status: '33Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc3', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '11', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '12', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '13', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '14', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '15', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '16', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '17', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
      { policyNumber: '18', status: 'Collecting Policy Prerequisites', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];
    //this.dataList = this.dataList.map(connect1);
    // function connect1(dateCurrent, index) {
    //   return { ...dateCurrent, parentIndex: index, childIndex: null };
    // }
    this.currentDataList = [...this.dataList];
    this.currentDataList.map((data, index) => { data.parentIndex = index, data.childId = null, data.oldId = index, data.isGroup = false, data });
    this.totalItem = this.currentDataList.length;
    this.fixes = Object.keys(this.currentDataList[0]);
    this.fixes =this.fixes.filter((data) => ['parentIndex', 'childId', 'oldId', 'isGroup'].indexOf(data) < 0);
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
    //console.log(this.currentDataList);
    const X1 = this.currentDataList.filter((data, index) => index !== this.parentIndex && this.groupCheck(data));
    this.selectedRow['isGroup'] = X1.length;
    X1.map((data) => { data.childId = this.parentIndex,  data.parentIndex = null; });
    this.apply(this.parentIndex);
    //console.log(X1);
    //console.log(this.currentDataList, this.checked);
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
    const a1 = a['childId'];
    a.childId = null;
    //a.childIndex = null;
    a.parentIndex = a.oldId;
    this.currentDataList[a1]['isGroup'] = --this.currentDataList[a1].isGroup;
    //a.parentIndex = a.oldId;
    //console.log(this.currentDataList);
  }

  groupCheck(data) {
    const filterList = this.checked.filter((dat, index) => {
      if(this.fixes[index] !== 'effectiveDate') {
        return dat && data.childId === null && !data.isGroup  && data.parentIndex !==null && (data[this.fixes[index]] === this.selectedRow[this.fixes[index]] )
      } else { return dat && data.childId === null && !data.isGroup  && data.parentIndex !==null && data[this.fixes[index]].toDateString() === this.selectedRow[this.fixes[index]].toDateString()
      }
    });
    //console.log(filterList);
    return filterList.length === this.checked.filter((data) => data).length && filterList.length > 0;
  }

  // isGroupTest(parentIndex) {
  //   if(parentIndex) {
  //     const a = [...this.currentDataList];
  //     const filterList = a.filter((dat, index) => dat.childId !== parentIndex && dat.parentIndex !==null);
  //     console.log(filterList,parentIndex);
  //     return filterList.length;
  //   }
  // }

  selected(extra, id) {
    return this.checked[id] === extra;
  }

  updateCheck(event, id) {
    this.checked[id] = event.target.checked;
  }
}