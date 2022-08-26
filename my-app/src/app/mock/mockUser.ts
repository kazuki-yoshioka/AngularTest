import { UserModel } from "../models/userModel";

export class MockUser {
  public static mockUsers: UserModel[] = [
    { id: '0001', name: 'ユーザーA', age: 22, deptCd: '1' , getPropatyInfo(): any {}},
    { id: '0002', name: 'ユーザーB', age: 30, deptCd: '2' , getPropatyInfo(): any {}},
    { id: '0003', name: 'ユーザーC', age: 42, deptCd: '3' , getPropatyInfo(): any {}},
    { id: '0004', name: 'ユーザーD', age: 50, deptCd: '1' , getPropatyInfo(): any {}},
  ];
}