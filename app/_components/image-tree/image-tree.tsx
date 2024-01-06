import Image from "next/image";
import { Collage, Container, MakeIt } from "./styled";

export const ImageTree = () => (
  <Container>
    <Collage>
      <div className="h-fit w-screen px-3 md:px-0 sm:h-[400px] sm:w-[400px]">
        <MakeIt />
        <Image
          src={"/home/home-v1.webp"}
          alt="home-v1"
          height={960}
          width={1440}
          className="h-auto mb-3 md:mb-0 md:w-[450px] border-[8px] border-background/80 dark:border-accent/50 md:relative left-[-120px] top-[-120px] rounded-3xl shadow-[10px_15px_20px_4px_#00000024]"
        />

        <Image
          src={"/home/home-v2.webp"}
          alt="home-v1"
          height={600}
          width={600}
          className="md:h-[150px] mb-3 md:mb-0 w-auto border-[8px] border-background/80 dark:border-accent/50 md:relative scale-x-[-1] left-[260px] top-[-325px] rounded-3xl shadow-[10px_15px_20px_4px_#00000024]"
        />

        <Image
          src={"/home/home-v3.webp"}
          alt="home-v1"
          height={600}
          width={600}
          className="md:h-[150px] mb-3 md:mb-0 w-auto border-[8px] border-background/80 dark:border-accent/50 md:relative left-[30px] top-[-290px] rounded-3xl shadow-[10px_15px_20px_4px_#00000024]"
        />
        <Image
          src={"/home/home-v4.webp"}
          alt="home-v1"
          height={600}
          width={600}
          className="md:h-[160px] mb-3 md:mb-0 w-auto border-[8px] border-background/80 dark:border-accent/50 md:relative left-[260px] top-[-495px] rounded-3xl shadow-[10px_15px_20px_4px_#00000024]"
        />
      </div>
    </Collage>
    <div className="bg-gradient-to-l from-transparent to-accent/10 skew-x-[-16deg] lg:hidden"></div>
  </Container>
);
