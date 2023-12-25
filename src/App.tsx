import { Provider as StoreProvider } from 'react-redux'
import { worker } from './mocks'
import { store } from './store/store'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Products } from '@/components/Products/Products'
import { Users } from '@/components/Users/Users'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

await worker.start().catch(console.error)

const App = () => {
    return (
        <StoreProvider store={store}>
            <Router>
                <div className="relative flex h-screen flex-col bg-background">
                    <main className="h-screen items-stretch">
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel
                                defaultSize={30}
                                minSize={28}
                                maxSize={70}
                                className="px-4"
                            >
                                <Users />
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel
                                defaultSize={72}
                                minSize={30}
                                maxSize={72}
                                className="px-4"
                            >
                                <Switch>
                                    <Route exact path="/">
                                        <Products />
                                    </Route>
                                    <Route exact path="/user/:userId">
                                        <Products />
                                    </Route>
                                </Switch>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </main>
                </div>
            </Router>
        </StoreProvider>
    )
}

export default App
