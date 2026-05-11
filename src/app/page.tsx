import styles from "./page.module.css";
import { HeroLogo } from "@/components/home/HeroLogo/HeroLogo";
import { QuoteBlock } from "@/components/home/QuoteBlock/QuoteBlock";
import { CategoryNav } from "@/components/home/CategoryNav/CategoryNav";
import { NewsSection } from "@/components/home/NewsSection/NewsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <HeroLogo />
      </section>

      <section className={styles.quoteSection}>
        <QuoteBlock />
      </section>

      <section className={styles.navSection}>
        <CategoryNav />
      </section>

      <section className={styles.newsSection}>
        <NewsSection />
      </section>
    </main>
  );
}
