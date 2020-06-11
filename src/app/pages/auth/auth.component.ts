import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
}
