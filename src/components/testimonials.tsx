import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          What Our Clients Say
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        Here’s what developers, founders, and industry leaders are saying about their experience with us.
      </p>
      <div className="mt-1 columns-1 gap-7 md:columns-2 lg:columns-3">
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;I was initially hesitant about outsourcing our social media, but Whitepixel's talent exceeded my expectations. Their content quality is exceptional.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Honda Motorcycles"
                  src="/images/0logomotoshonda.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Honda Motocicletas - Bolivia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel's social media management has elevated our brand visibility. Their content strikes the perfect balance between promotion and engagement.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Pagame LATAM"
                  src="/images/logo.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Pagame LATAM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;The comprehensive support from Whitepixel allows us to focus on growth. They handle everything from content creation to customer engagement effortlessly.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Hard Rock Bolivia"
                  src="/images/file-(1).png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Hard Rock - Bolivia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel's ability to manage multiple social media platforms seamlessly has been a game changer for us.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Tecnopolis"
                  src="/images/file.png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Tecnopolis
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;For the value Whitepixel provides, their pricing is unmatched. We've seen significant growth in community engagement since partnering with them.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Grupo Piaggio"
                  src="/images/40bdc0e19058f876865f5d8a435ee78c.jpg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Grupo Piaggio - Bolivia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Whitepixel's efficient social media strategy has streamlined our online presence and boosted our brand visibility.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Skyline Real Estate"
                  src="/images/file-(2).png"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">
                  Skyline Real Estate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
