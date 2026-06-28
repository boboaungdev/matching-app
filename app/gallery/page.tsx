import { UserGallery } from "@/components/user-gallery"

export default function GalleryPage() {
  return (
    <section className="container py-12 md:py-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">User Gallery</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Browse profiles of our members and see who you might connect with.
        </p>
      </div>
      <UserGallery />
    </section>
  )
}
