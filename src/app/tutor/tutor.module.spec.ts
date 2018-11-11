import { TutorModule } from './tutor.module';

describe('TutorModule', () => {
  let tutorModule: TutorModule;

  beforeEach(() => {
    tutorModule = new TutorModule();
  });

  it('should create an instance', () => {
    expect(tutorModule).toBeTruthy();
  });
});
