import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "./components/Dialog";
import Pagination from "./components/Pagination";
import JanUIProvider from "./theme/provider";
import Checkbox from "./components/Checkbox";
import { colorList } from "./mocks/_colorList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <JanUIProvider customColor={colorList}>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DialogTitle title="123" status="correct">
          我是標題
        </DialogTitle>
        <DialogContent>Lorem ipsum dolor sit amet consectetur.</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button onClick={() => {}}>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Pagination count={10} />
      <Button textColor="success.100" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Checkbox name="Checkbox" description="Description" disabled={false} />
      <Checkbox name="Checkbox" description="Description" disabled={true} />
      <Checkbox name="Checkbox" disabled={false} />
      <Checkbox name="Checkbox" disabled={true} />
      <Checkbox />
      <Checkbox disabled={true} />
    </JanUIProvider>
  );
}

export default App;
