import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ToonListComponent } from './toon-list.component';

describe('ToonListComponent', () => {
  let component: ToonListComponent;
  let fixture: ComponentFixture<ToonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
