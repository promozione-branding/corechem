import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { redirect } from "next/navigation";
import Category from "../Category";

export async function generateMetadata({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found ",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      redirect("/")
    );
  }

  return (
    <>
      <Category category={category} />
    </>
  );
}
