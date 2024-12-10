import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <p-breadcrumb *ngIf="!isHomePage" [model]="breadcrumbItems"></p-breadcrumb>
  `,
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: any[] = [];
  isHomePage: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkIfHomePage();
      this.buildBreadcrumb();
    });
  }

// Checks if the route is the home page
  checkIfHomePage() {
    const currentRoute = this.router.url;
    this.isHomePage = currentRoute === '/home'; 
  }

  buildBreadcrumb() {
    if (this.isHomePage) {
      this.breadcrumbItems = []; 
      return;
    }

    let url = '';
    this.breadcrumbItems = [];
    let currentRoute = this.activatedRoute.root;

    // breadcrumb dynamically
    while (currentRoute.children.length > 0) {
      currentRoute = currentRoute.children[0];
      const segment = currentRoute.snapshot.url.map(path => path.path).join('/');
      if (segment) {
        url += `/${segment}`;
        const label = currentRoute.snapshot.data['breadcrumb'] || segment;
        this.breadcrumbItems.push({ label, url });
      }
    }

    // Add Home to the beginning of the breadcrumb
    this.breadcrumbItems.unshift({ label: 'Home', url: '/' });
  }
}
