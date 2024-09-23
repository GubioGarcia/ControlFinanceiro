import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaViewComponent } from './pessoa-view.component';

describe('FormViewComponent', () => {
  let component: PessoaViewComponent;
  let fixture: ComponentFixture<PessoaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
