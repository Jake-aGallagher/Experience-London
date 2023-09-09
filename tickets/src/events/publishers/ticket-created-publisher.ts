import { Publisher, Subjects, TicketCreatedEvent } from '@jglondonexperiences/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
