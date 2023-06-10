export interface IClientDataOptions {
  data?: any;
  pathParams?: any;
  queryParams?: any;
  additionalHeaders?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  // This is mostly here for LOGIN, so we can pass the Authorization header explicitly.
  excludeAuthHeaders?: boolean;
}
