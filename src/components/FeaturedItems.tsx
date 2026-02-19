import { menuItems } from "@/data/menuData";
import MenuCard from "./MenuCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedItems() {
  const featured = menuItems.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Items
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Check out what's popular this week.
        </p>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {featured.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <MenuCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
