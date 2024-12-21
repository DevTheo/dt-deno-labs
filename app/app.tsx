import { MainLayout } from "./_layout/MainLayout.tsx";
import { About } from "./pages/about.tsx";
import { Index } from "./pages/index.tsx";

// deno-lint-ignore no-explicit-any
export const App = (req: any) => {
    const pg = req.pg?.toLowerCase() ?? "index";
    switch(pg) {
        case "index": 
            return (<MainLayout page={pg}><Index /></MainLayout>);
        case "about": 
            return (<MainLayout page={pg}><About /></MainLayout>);
        default: 
           return (
                <MainLayout page={pg}><div>Not Found</div></MainLayout>
            );
    }
};

