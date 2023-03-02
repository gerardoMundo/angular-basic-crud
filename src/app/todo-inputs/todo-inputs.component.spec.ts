import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputsComponent } from './todo-inputs.component';

describe('TodoInputsComponent', () => {
  let component: TodoInputsComponent;
  let fixture: ComponentFixture<TodoInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
