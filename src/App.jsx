import RootContextProvider from "./contexts/RootContextProvider"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
    return (
        <>
            <RootContextProvider>
                <AppRoutes />
            </RootContextProvider>
        </>
    )
}

export default App