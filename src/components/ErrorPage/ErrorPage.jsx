import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useRouteError } from 'react-router-dom';
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <Header></Header>
            <div className="flex justify-center my-16">
                <div className="text-center  space-y-4">
                    <div className='flex justify-center'>
                        <TbFaceIdError className='text-7xl ' />
                    </div>
                    <h1 className="text-5xl">Oops!</h1>
                    {error.status && <p className='text-xl'>Error Code {error.status}!</p>}
                    <p className="text-4xl font-bold">
                        <i> {error.statusText || error.message}</i>
                    </p>

                    <p className="text-3xl">{error.data}</p>
                    <Link className="btn btn-success text-bold text-white" to='/'>Go Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;