import styles from "./page.module.css";
import MoviesPage from "@/app/movies/page";
import Head from "next/head";

export default function Home() {

    return (
    <main className={styles.main}>
      <MoviesPage/>
    </main>
  );
}
