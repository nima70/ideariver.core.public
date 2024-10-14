export interface Author {
  /** Full name of the plugin's author */
  name: string;

  /** Email address of the author */
  email: string;
}

export interface PluginMetadata {
  /** Unique identifier for the plugin (UUID as a string) */
  id: string;

  /** Title or display name of the plugin */
  title: string;

  /** Short, unique tag to identify the plugin (for easy reference) */
  nameTag: string;

  /** Semantic version of the plugin */
  version: string;

  /** Path to the main executable file of the plugin */
  executableFile: string;

  /** Information about the plugin's author */
  author: Author;

  /** Programming language used to develop the plugin */
  codeLang: string;

  /** Input schema as key-value pairs (field name to type) */
  inputs: Record<string, string | null>;

  /** Output schema as key-value pairs (field name to type) */
  outputs: Record<string, string | null>;

  /** Short description of the plugin's functionality */
  description: string;

  /** Current status of the plugin ('active', 'deprecated', or 'pending') */
  status: "active" | "deprecated" | "pending";

  /** Timestamp indicating when the plugin was created */
  createdAt: Date;

  /** Timestamp indicating the last time the plugin was updated */
  updatedAt: Date;

  /** Tags for categorizing the plugin */
  tags: string[];

  /** URL to the plugin’s thumbnail image */
  thumbnailUrl: string;

  /** List of URLs for additional images */
  imageUrls: string[];
}
