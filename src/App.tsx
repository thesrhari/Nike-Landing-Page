import { useEffect, useRef } from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const currentSections = sectionRefs.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, options);

    currentSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="relative">
      <Nav />
      <section
        ref={addToRefs}
        className="xl:padding-l wide:padding-r padding-b opacity-0"
      >
        <Hero />
      </section>
      <section ref={addToRefs} className="padding opacity-0">
        <PopularProducts />
      </section>
      <section ref={addToRefs} className="padding opacity-0">
        <SuperQuality />
      </section>
      <section ref={addToRefs} className="padding-x py-10 opacity-0">
        <Services />
      </section>
      <section ref={addToRefs} className="padding opacity-0">
        <SpecialOffer />
      </section>
      <section ref={addToRefs} className="bg-pale-blue padding opacity-0">
        <CustomerReviews />
      </section>
      <section
        ref={addToRefs}
        className="padding-x sm:py-32 py-16 w-full opacity-0"
      >
        <Subscribe />
      </section>
      <section
        ref={addToRefs}
        className="bg-black padding-x padding-t pb-8 opacity-0"
      >
        <Footer />
      </section>
    </main>
  );
};

export default App;
