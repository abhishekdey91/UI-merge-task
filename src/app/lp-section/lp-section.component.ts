import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as landingPageJSON from '../../assets/Json/landingpage.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-lp-section',
  templateUrl: './lp-section.component.html',
  styleUrls: ['./lp-section.component.css'],
})
  export class LpSectionComponent implements OnInit {
    constructor() { }
    eventsSubject: Subject<void> = new Subject<void>();
    @ViewChild('dropListContainer') dropListContainer?: ElementRef;
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
    grpItem;;
    grpItemKeys;
    toggleClass = true;
    fixes = [];
    mergeFix = false;
    parentIndex = -1;
    checked = [];
    selectedRow = [];

    ngOnInit() {
      const key = 'policyNumber';
      this.dataList = [
        {policyNumber: 'NGXE1006-2022R7111', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
        {policyNumber: 'NGXE1006-2022R71', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
        {policyNumber: 'NGXE1006-2022R71h1', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
        {policyNumber: 'NGXE1006-2022R711', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
        {policyNumber: 'NGXE1006-2022R711r', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' },
        {policyNumber: 'NGXE1006-2022R7j', status: 'Collecting Policy Prerequisites1', groupName: 'Earnhardt Manufacturing Inc', notes: 'SB 7/19 licencing resort', effectiveDate: new Date('03-1-1986'), tpa: 'Health Plans Inc', underwriter: 'NG', producer: 'Health Plans Inc.' }];   
        this.dataList = this.dataList.map(connect1);
        function connect1(dateCurrent, index) {
          return { ...dateCurrent, parentIndex: index, childIndex: null};
        }
        this.currentDataList = [...this.dataList];
        this.currentDataList.map((data, index) => { data.parentId = index, data.childId = null, data}) // parentIndex
        //this.currentDataList.map((data) => { data.childId = null, data}) // pIndex
        this.totalItem = this.currentDataList.length;
        //this.grpItem = _.groupBy(this.currentDataList, key);
        //this.grpItemKeys = Object.keys(this.currentDataList);
        this.fixes = Object.keys(this.currentDataList[0]);
        this.checked = this.fixes.map(() => {const checked = false });
    }

    drop(event: CdkDragDrop<string[]>) {
      const idd = JSON.parse(JSON.stringify(event.previousContainer.data[event.currentIndex])).parentIndex;
      if (event.previousContainer === event.container) { 
        this.currentDataList = [...this.dataList];
        moveItemInArray(event.container.data , event.previousIndex, event.currentIndex);
      }
      else {
        const d = (JSON.parse(JSON.stringify(event.container.data)));
        for (let entry of d) {
          event.currentIndex = entry.childIndex === null && entry.parentIndex > -1 ? entry.parentIndex : entry.parentIndex; // 1, "string", false
        }
        if(true || event.previousContainer.data.length &&
          event.container.data.length && 
          JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).childIndex === null && 
          JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).groupName === JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).groupName) {
          this.toggleClass = !this.toggleClass;
          this.currentDataList[idd].parentIndex = JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).parentIndex;
          this.currentDataList[idd].childIndex = JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).parentIndex;
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
            this.toggleClass = !this.toggleClass;
          };
    }
  }


  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement.insertBefore(phElement, phContainer);
      moveItemInArray(this.items, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement.nextElementSibling
        : placeholderElement.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
  }

  previousItem() {
    if(this.index >=1 ) {
      this.index--;
      this.item1 = this.itemsPerPage * this.index;
      this.item2 = this.item1 + this.itemsPerPage;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1 , this.itemsPerPage);
    }
  }

  nextItem() {
    if(this.index + 1 <this.totalItem/this.itemsPerPage ) {
      this.index++;
      this.item1 = this.itemsPerPage * this.index;
      this.item2 = this.item1 + this.itemsPerPage;
      this.currentDataList = [...this.dataList];
      this.currentDataList = this.currentDataList.splice(this.item1 , this.itemsPerPage);
    }
  }

    connect(id) {
      return this.grpItemKeys.filter((data) => id !== data);
    }


    apply(parentIndex) {
      this.mergeFix = !this.mergeFix;
      this.parentIndex = parentIndex;
    }

    applyMerge() {
        this.selectedRow = this.currentDataList[this.parentIndex];
       const X1 =  this.currentDataList.filter((data, index) =>  index !== this.parentIndex && this.groupCheck(data, index));
       console.log(X1);
       X1.map((data) => {data.childId = this.parentIndex, data.childIndex = this.parentIndex, data.parentIndex = null, data.parentId = null;})
       console.log(this.currentDataList);
    }

    groupCheck(data, id) {
      //console.log(this.fixes);
      const filterList = this.checked.filter((dat, index) =>   data[this.fixes[index]] === this.selectedRow[this.fixes[index]] && dat);
      return filterList.length === this.checked.filter((data) => data).length;
    }

    selected(extra,id) {
      return this.checked[id] === extra;
    }
    
    updateCheck(event,id) {
      this.checked[id] = event.target.checked;
    }
  }