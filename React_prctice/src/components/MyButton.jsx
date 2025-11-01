import { useEffect, useState } from "react";
import styles from "./MyButton.module.css";


function MyButton() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        if(count >= 50){
            alert('カウント数が50回に達成しました！！');
            setCount(0);
        }
    },[count]);

    function fiveClick(){
        setCount(count + 5);
    }

    function handleClick(){
        setCount(count + 1);
    }

    return(
    <div className={styles.container}>
        <h1 className={styles.title}>{count}</h1>

       <div className={styles.buttonGroup}>
        
        <button onClick={handleClick}className={styles.button}>
            １回カウント
        </button>

        <button onClick={fiveClick} className={styles.button}>
            ５回カウント
        </button>
        
        </div>
    </div>
    );
}

export default MyButton;