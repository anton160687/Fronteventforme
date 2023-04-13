import styles from "@/styles/main/Main.module.scss";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

export function MainTitle({title, suptitle, children}): JSX.Element {
return (
    <div className={styles.my64 + " w-100 text-center"}>
        <p className={styles.main__suptitle}>{title}</p>
        <h2 className={styles.main__title + " mb-md-4 w-75 mx-auto"}>{suptitle}</h2>
        {children}
    </div>
)
}