export interface TopicMapping {
    /** 
     * Contains the mappings for task and response queues. 
     */
    topics: {
      /** 
       * The queue where tasks are submitted.
       */
      taskQueue: string;
  
      /** 
       * The queue where responses to tasks are sent. 
       */
      responseQueue: string;
    };
  }
  