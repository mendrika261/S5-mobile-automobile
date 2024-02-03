import dynamic from 'next/dynamic';
import Loading from "@/app/loading";

function ClientOnly(props: { children: JSX.Element[]|JSX.Element }) {
    const { children } = props;
    return children;
}


export default dynamic(() => Promise.resolve(ClientOnly), {
    ssr: false,
    loading: () => <Loading/>,
});
