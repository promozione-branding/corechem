import { categories } from "@/Data";
import InquiryProductPageClient from "./InquiryProductPageClient";
import Header from "@/components/Inquiry/Header";
import Footer from "@/components/Inquiry/Footer";

// ✅ Dynamic metadata for each product
export async function generateMetadata({ params }) {
  const { id } = await params;

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.name,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.name,
      images: [product.image],
    },
  };
}

export default function Page({ params }) {
  
  return <> <Header></Header> <InquiryProductPageClient params={params} /> <Footer/> </>
}
