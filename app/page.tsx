import Image from "next/image";
import styles from "./page.module.css";
import Orb from "@/components/orb";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between p-1">
      <div className={styles.description}>
        <p>
        AskARA Assistant
        </p>
      </div>
      <Orb />
    </main>
  );
}
