import { Publisher, OrderCreatedEvent, Subjects } from '@jglondonexperiences/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
