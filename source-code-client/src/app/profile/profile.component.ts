import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  details: UserDetails;
  users: Array<any>;
  

  constructor(private auth: AuthenticationService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
      console.log('user', user)
    }, (err) => {
      console.error(err);
    });
    this.auth.users().subscribe(users => {
      this.users = users;
      console.log('useers', users)
    }, (err) => {
      console.error(err);
    });
  }
  save(idUser){
    let newName = '';
    newName = ((<HTMLInputElement>document.getElementById(idUser)).value);
    this.auth.editUser({
      "_id": idUser,
      "name": newName
    }).subscribe(users => {
      console.log("users",users)
      
      alert("Guardado con exito" )
    }, (err) => {
      console.error(err);
    });

  }
  deleteUser(idUser){
    let newName = '';
    newName = ((<HTMLInputElement>document.getElementById(idUser)).value);
    this.auth.deleteUser({
      "_id": idUser
    }).subscribe(users => {
      console.log("elim", users)

      this.auth.users().subscribe(users => {
        this.users = users;
        console.log('useers', users)
      }, (err) => {
        console.error(err);
      });
      
    }, (err) => {
      console.error(err);
    });
  }
}