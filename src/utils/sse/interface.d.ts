export interface IEventData {
    type: string;
    name: string;
    data: any;
    tenantId: string;
    timestamp: string;
    notification?: any;
}

export enum SSE_EVENTS {
    CREATE = 'create',
    UPDATE = 'update',
    DELETE = 'delete',
    UPDATE_CHECK = 'update-check',
    CREATE_PARENT = 'create-parent',
}

export enum SSE_TYPE {
    PAYMENT_METHODS = 'payment_methods',
    TRANSACTIONS = 'transactions',
}