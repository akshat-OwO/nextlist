import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <p>That page cannot be found</p>
            <p>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
    );
}
 
export default NotFound;