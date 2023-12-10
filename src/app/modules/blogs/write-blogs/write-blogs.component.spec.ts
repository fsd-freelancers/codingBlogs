import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBlogsComponent } from './write-blogs.component';

describe('WriteBlogsComponent', () => {
  let component: WriteBlogsComponent;
  let fixture: ComponentFixture<WriteBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteBlogsComponent]
    });
    fixture = TestBed.createComponent(WriteBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
