import styles from "./page.module.css";
import MoviesPage from "@/app/movies/page";

export default function Home() {

    return (
    <main className={styles.main}>
      <MoviesPage/>
    </main>
  );
}
