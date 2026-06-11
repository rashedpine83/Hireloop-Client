import { serverFetch } from "../core/server";

export const getPlanById = async (planId) => {
  return serverFetch(`/api/plans?plan_id=${planId}`);
};

// [
//   {
//     "id": "seeker_free",
//     "name": "Free",
//     "maxApplicationPerMonth": 3
//   },
//   {
//     "id": "seeker_pro",
//     "name": "Pro",
//     "maxApplicationPerMonth": 10
//   },
//   {
//     "id": "seeker_premium",
//     "name": "Premium",
//     "maxApplicationPerMonth": 100
//   }
// ]
