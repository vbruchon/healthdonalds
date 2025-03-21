"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import InputImagePreview from "@/features/images/InputImagePreview";
import { setItem } from "@/lib/items/set-item";
import { getId } from "@/lib/get-id";
import { useUserStore } from "@/store/use-user-store";
import { X, Loader2 } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  price: z.coerce.number().min(0).max(1000),
  image: z.any(),
});

export default function NewItemPage() {
  const [isLoading, setIsLoading] = useState(false);
  const isAdmin = useUserStore((s) => s.isAdmin);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      category: "",
      price: 0,
      image: null,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const id = getId(data.name);
      await setItem(id, {
        name: data.name,
        price: data.price * 100,
        category: data.category,
        image: data.image,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
      router.push("/");
    }
  };

  if (!isAdmin) {
    return (
      <Alert>
        <div className="inline-flex items-center gap-4">
          <X size={18} color="red" />
          <AlertTitle>You are not authorized to view this page</AlertTitle>
        </div>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-3">
      <h1 className="text-xl font-bold text-muted-foreground">
        Add a new product
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Classic Burger" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={category.logo}
                            width={24}
                            height={24}
                            alt={category.title}
                          />
                          {category.title}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <InputImagePreview
                    image={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
