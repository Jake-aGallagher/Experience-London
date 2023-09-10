import { Subjects, Publisher, PaymentCreatedEvent } from '@jglondonexperiences/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
