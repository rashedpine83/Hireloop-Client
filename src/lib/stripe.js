import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TgH2OCh17gcLASLNQV7iZtZ",
  seeker_premium: "price_1TgHxACh17gcLASLBOyb1qAP",
  recruiter_growth: "price_1TgI06Ch17gcLASLdO5w4AS0",
  Enterprise: "price_1TgI27Ch17gcLASL5cYuR9kL",
};
