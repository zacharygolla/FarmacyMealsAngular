import { Component, OnInit } from '@angular/core';
import { AnyRecord } from 'dns';
import { response } from 'express';
import { catchError, map, Observable, of, pipe, throwError } from 'rxjs';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {
  foods: any;

  constructor(private menuService: MenuService) { }

  private handleHttpError<T>(error: any, result?: T): Observable<T> {
    console.error('Error in HTTP request:', error);
    return of(result as T); // You can modify this based on your application needs
  }

  ngOnInit(): void {
    this.menuService.getMenu()
      .pipe(
        map(response => this.foods = response),
        catchError(error => this.handleHttpError(error))
      ).subscribe();    
  }


}
