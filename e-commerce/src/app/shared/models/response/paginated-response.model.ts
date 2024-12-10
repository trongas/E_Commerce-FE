export interface PaginatedResponse<T> {
    content: T[];          // List of items
    totalPages: number;    // Total number of pages
    totalElements: number; // Total number of items
    size: number;          // Page size
    number: number;        // Current page number (zero-based)
  }
  