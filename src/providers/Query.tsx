import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryProviderProps {
    children: React.ReactNode;
    refetchOnWindowFocus?: boolean;
}

const QueryProvider: React.FC<QueryProviderProps> = (props) => {
    const { children, refetchOnWindowFocus = false } = props;

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: refetchOnWindowFocus,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
