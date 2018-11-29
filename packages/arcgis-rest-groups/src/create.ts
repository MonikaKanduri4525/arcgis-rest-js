/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import {
  request,
  IRequestOptions,
  getPortalUrl
} from "@esri/arcgis-rest-request";

import { IGroupAdd } from "@esri/arcgis-rest-common-types";

import { serializeGroup } from "./helpers";

export interface IGroupAddRequestOptions extends IRequestOptions {
  group: IGroupAdd;
}

/**
 * ```js
 * import { createGroup } from "@esri/arcgis-rest-groups";
 * //
 * createGroup({
 *   group: {
 *     title: "No Homers",
 *     access: "public"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 * Create a new Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/create-group.htm) for more information.
 *
 * Note: The group name must be unique within the user's organization.
 * @param requestOptions  - Options for the request, including a group object
 * @returns A Promise that will resolve with the success/failure status of the request
 */
export function createGroup(
  requestOptions: IGroupAddRequestOptions
): Promise<any> {
  const url = `${getPortalUrl(requestOptions)}/community/createGroup`;
  const options: IGroupAddRequestOptions = {
    ...requestOptions
  };
  // serialize the group into something Portal will accept
  options.params = serializeGroup(requestOptions.group);
  return request(url, options);
}
