import './styles/index.scss'
import Button, { ButtonType } from "./components/Button";

function App() {
  return (
    <div>
      <Button btnType={ButtonType.Danger} disabled href='www.baidu.com'>hello origin</Button>
    </div>
  )
}

export default App
