import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Request, Response } from 'express';
import { IEventData, SSE_EVENTS, SSE_TYPE } from './interface';

@Injectable()
export class EventsService {
  private eventUpdates = new Subject<IEventData>();
  private subscribers = 0;

  emitUpdate(type: SSE_TYPE, name: SSE_EVENTS, data: any, tenantId: string, notification?: any) {
    const event: IEventData = { 
      type, 
      name, 
      data, 
      tenantId, 
      timestamp: new Date().toISOString(),
      notification,
    };
    this.eventUpdates.next(event);
  }

  getUpdates(tenantId: string, type?: SSE_TYPE) {
    this.subscribers++;
    return this.eventUpdates.asObservable().pipe(
      filter(event => {
        if (type) {
          return event.tenantId === tenantId && event.type === type;
        }
        return event.tenantId === tenantId;
      })
    );
  }

  removeSubscriber() {
    this.subscribers--;
  }

  usingSSE( req: Request, res: Response, tenantId: string, type: SSE_TYPE) {
    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    const subscription = this.getUpdates(tenantId, type).subscribe({
      next: (event) => {
        let message = [{ 
          type: event.type, 
          name: event.name, 
          message: event.data,
          notification: event.notification
        }];
        res.write(`data: 0:${JSON.stringify(message)}\n\n`);
      },
      error: (error) => {
        res.write(`event: error\ndata: ${JSON.stringify({ message: error.message })}\n\n`);
        res.end();
      },
      complete: () => {
        res.write('event: complete\ndata: {}\n\n');
        res.end();
      }
    });

    req.on('close', () => {
      subscription.unsubscribe();
      this.removeSubscriber();
    });
  }
} 