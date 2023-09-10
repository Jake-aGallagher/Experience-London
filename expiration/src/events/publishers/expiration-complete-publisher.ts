import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jglondonexperiences/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
