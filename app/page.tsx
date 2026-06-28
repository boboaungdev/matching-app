import { APP_NAME, APP_TAGLINE } from "@/constants"

export default function Page({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tighter md:text-4xl">
          Discover Your {APP_NAME}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {APP_TAGLINE}
        </p>
      </div>
    </section>
  )
}
