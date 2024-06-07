"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CreatePodcast = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className=" mt-10 flex flex-col">
      <h1 className=" text-white-1 font-bold text-20 "> Create Podcast</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-12 flex w-full flex-col ">
          <div className=" flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="podcastTittle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className=" text-16 font-bold text-white-1">Username</FormLabel>
                  <FormControl>
                    <Input className=" input-class focus-visible:ring-orange-1 " placeholder="India Mission" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className=" text-white-1" />
                </FormItem>
              )}
            />

            <div  className="flex flex-col gap-2.5">
              <Label className=" text-16 font-bold text-white-1">
                Select AI Voice
              </Label>

            </div>

          </div>




        </form>
      </Form>

    </section>
  )
}

export default CreatePodcast