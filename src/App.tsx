import './styles/index.scss'
import styles from './test.module.scss'
import Button, {ButtonType} from "./components/Button";

function App() {
  return (
    <div className={styles.wrap}>
      <Button btnType={ButtonType.Primary} href='www.baidu.com'>hello origin</Button>
      <Button btnType={ButtonType.Danger} href='www.baidu.com'>hello origin</Button>
      <Button btnType={ButtonType.Link} href='www.baidu.com'>hello origin</Button>
      <Button btnType={ButtonType.Default} href='www.baidu.com'>hello origin</Button>
      <Button disabled href='www.baidu.com'>hello origin</Button>
      <Button disabled btnType={ButtonType.Link} href='www.baidu.com'>hello origin</Button>
    </div>
  )
}

export default App
