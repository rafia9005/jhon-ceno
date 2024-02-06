import LoaderComponent from "@/components/elements/Loader";
import HeroLayout from "@/components/layouts/HeroLayout";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import AboutLayout from "@/components/layouts/AboutLayout";
import ExprerienceLayout from "@/components/layouts/ExprerienceLayout";
import ProjectLayout from "@/components/layouts/ProjectLayout";
export default function Home() {
  return (
    <LoaderComponent>
      <NavbarLayout />
      <HeroLayout />
      <AboutLayout/>
      <ExprerienceLayout/>
      <ProjectLayout/>
    </LoaderComponent>
  );
}
