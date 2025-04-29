import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tgjjsvjkhezqddxxcfsb.supabase.co/rest/v1/ciotto";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnampzdmpraGV6cWRkeHhjZnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzI0ODcsImV4cCI6MjA2MTQwODQ4N30.WzP6rDDmHrGefYnSnyAuDqwbf1mmxEv6akc0abEZARE";

export const api = {
  getProducts: async () => {
    try {
      const response = await fetch(`${SUPABASE_URL}`, {
        method: "GET",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to fetch products: ${error}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data); // Debug log
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
