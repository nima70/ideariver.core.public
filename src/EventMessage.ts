export interface EventMessage {
    event_id: string;
    aggregate_id: string;
    aggregate_type: string;
    version: number;
    event_type: string;
    event_schema_version: string;
    source: string;
    timestamp: string;
    payload: Record<string, any>;
    user_id: string;
  }
  