/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { IGroup } from "./group";

/**
 * An ArcGIS Online or Enterprise user
 */
export interface IUser {
  username?: string;
  fullName?: string;
  availableCredits?: number;
  assignedCredits?: number;
  firstName?: string;
  lastName?: string;
  preferredView?: any;
  description?: string;
  email?: string;
  idpUsername?: string;
  favGroupId?: string;
  lastLogin?: number;
  mfaEnabled?: boolean;
  access?: string;
  storageUsage?: number;
  storageQuota?: number;
  orgId?: string;
  role?: "org_admin" | "org_publisher" | "org_user";
  privileges?: string[];
  roleId?: string;
  level?: string;
  disabled?: boolean;
  units?: string;
  tags?: string[];
  culture?: string;
  region?: string;
  thumbnail?: string;
  created?: number;
  modified?: number;
  groups?: IGroup[];
  provider?: "arcgis" | "enterprise" | "facebook" | "google";
}
