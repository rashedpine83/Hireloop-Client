import { proctectedFetch } from "../core/server";

export const getApplicationsByApplicant = async (applicantId) => {
  return proctectedFetch(`/api/applications?applicantId=${applicantId}`);
};
