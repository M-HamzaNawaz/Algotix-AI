/** Where applications go while no roles are listed. */
export const careersEmail = "hr@algotix.ai";

export interface OpenRole {
  title: string;
  team: string;
  location: string;
  type: string;
  /** Where to apply: a page, a job board listing, or a mailto link. */
  href: string;
}

/* Empty on purpose: there are no open positions at the moment. Add roles here
   and the careers page lists them automatically. */
export const openRoles: OpenRole[] = [];
