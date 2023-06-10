import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIRoutes } from "./api-routes";
import { IClientDataOptions } from "./client-data-options.interface";
import { AppClientConfigService } from "../client-config/client-config.service";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppClientDataService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly clientConfigService: AppClientConfigService
  ) {}

  /**
   * The main entry-point that our application will use to make HTTP requests.
   */
  public async execute(
    partialURL: APIRoutes,
    options?: IClientDataOptions
  ): Promise<any> {
    // Build the URL we want to make the request to.
    const url =
      this.clientConfigService.APIGatewayURL +
      this.replacePathParams(partialURL, options?.pathParams || {}) +
      `?${this.buildQueryStringFromObject(options?.queryParams || {})}`;

    // Build the headers we want to send with the request.
    const headers = this.buildHeaders(
      options?.additionalHeaders || {},
      options?.excludeAuthHeaders || false
    );

    // If Method is not specified, default to GET.
    const method = options?.method || "GET";

    // Make the request.
    if (method === "GET") {
      return lastValueFrom(this.httpClient.get(url, { headers }));
    } else if (method === "POST") {
      return lastValueFrom(
        this.httpClient.post(url, options?.data, { headers })
      );
    } else if (method === "PUT") {
      return lastValueFrom(
        this.httpClient.put(url, options?.data, { headers })
      );
    } else if (method === "DELETE") {
      return lastValueFrom(this.httpClient.delete(url, { headers }));
    }
  }

  /**
   * Given a string path, this method will replace any path parameters with the values provided in the pathParams object.
   * @param path The path we want to replace the path parameters for.
   * @param pathParams The object containing the path parameters.
   * @private
   */
  private replacePathParams(path: string, pathParams: any): string {
    return path.replace(/:(\w+)/g, (match, paramName) => pathParams[paramName]);
  }

  /**
   * Given an object, this method will build a query string from it.
   * @param queryObject The object we want to build the query string for.
   * @private
   */
  private buildQueryStringFromObject(queryObject: any): string {
    return Object.keys(queryObject)
      .map((key) => `${key}=${queryObject[key]}`)
      .join("&");
  }

  /**
   * Build the headers for the request. We set some initial defaults, and allow you to pass extra headers if you need to.
   * @private
   */
  private buildHeaders(
    additionalHeaders: any,
    excludeAuthHeaders: boolean
  ): any {
    // Set up the default headers.
    const defaultHeaders = {
      "Content-Type": "application/json",
      ...(!excludeAuthHeaders && {
        Authorization: `Bearer 1234`,
      }),
    };

    // Return the headers, merging the defaults with any additional headers.
    return {
      ...defaultHeaders,
      ...additionalHeaders,
    };
  }
}
