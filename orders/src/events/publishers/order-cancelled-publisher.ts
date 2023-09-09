import { Subjects, Publisher, OrderCancelledEvent } from '@jglondonexperiences/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
