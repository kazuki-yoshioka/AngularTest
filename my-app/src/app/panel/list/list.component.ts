import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UserModel} from '../../models/userModel';
import {MockUser} from '../../mock/mockUser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  users: UserModel[] = MockUser.mockUsers;
  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('item', 'aaaaa');
  }

  /**
   * 明細画面に遷移
   * @param userId 
   */
  linkClik(userId: string) :void{
    this.router.navigate(['/detail'], {queryParams: {userId: userId}});
  }
}
