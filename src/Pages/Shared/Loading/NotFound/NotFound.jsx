import 'react';
import img from '../../../../assets/404 error with a tired person-bro.svg'

const NotFound = () => {
    return (
        <div className='min-h-[90vh] flex justify-center items-center flex-col text-center w-full px-5'>
            <img src={img} className='max-w-lg' />
            <p className='text-3xl font-semibold'>The page you are looking for is not found.</p>
        </div>
    );
};

export default NotFound;