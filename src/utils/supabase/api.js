import { createClient } from "./server";

export async function getProductById(id) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("ciotto").select("*").eq("id", id).single();
  if (error) throw new Error(`Product not found: ${error.message}`);
  return data;
}

export async function getRelatedProducts(product) {
  const supabase = await createClient();
  // Try to find related by name
  let { data, error } = await supabase
    .from("ciotto")
    .select("*")
    .neq("id", product.id)
    .filter("name", "ilike", `${product.name.split(" ")[0]}%`);
  if (error) throw new Error(`Error fetching related products: ${error.message}`);
  // If none found, just get 4 random products (excluding current)
  if (!data || data.length === 0) {
    const { data: randomData, error: randomError } = await supabase.from("ciotto").select("*").neq("id", product.id).limit(4);
    if (randomError) throw new Error(`Error fetching fallback products: ${randomError.message}`);
    return randomData;
  }
  return data;
}

export async function getAllProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("ciotto").select("*").order("id", { ascending: true });
  if (error) throw new Error(`Error fetching products: ${error.message}`);
  return data;
}

export async function getWorkBySlug(slug) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("works").select("*").eq("slug", slug).single();
  if (error) throw new Error(`Work not found: ${error.message}`);
  return data;
}
