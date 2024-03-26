import Present from "@/components/present";
import TableMain from "@/components/table";
import Plus from "@/components/plus";
import Steps from "@/components/steps";
import Plans from "@/components/plans";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <Present />
        <TableMain />
        <Plus />
        <Steps />
        <Plans />
      </div>
    </div>
  );
}
