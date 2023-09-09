import { Publisher, Subjects, TicketUpdatedEvent } from '@jglondonexperiences/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
