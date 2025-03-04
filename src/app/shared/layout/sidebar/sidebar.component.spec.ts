import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PanelMenuModule } from 'primeng/panelmenu';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        PanelMenuModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menu items defined as a signal', () => {
    expect(component.menuItems).toBeDefined();
    expect(component.menuItems().length).toBe(4);
  });

  it('should render PrimeNG PanelMenu', () => {
    const panelMenu = fixture.nativeElement.querySelector('p-panelmenu');
    expect(panelMenu).toBeTruthy();
  });
});
