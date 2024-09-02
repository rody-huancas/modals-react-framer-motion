import { DragCloseDrawerExample } from "./components/DragCloseDrawer"
import ExampleWrapper from "./components/SpringModal"

const App = () => {
  return (
    <div className="flex items-center justify-center gap-10 h-screen">
      <DragCloseDrawerExample />
      <ExampleWrapper />
    </div>
  )
}

export default App
