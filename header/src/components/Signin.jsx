import { FaUserCircle } from 'react-icons/fa';

export default function Signin() {
    return (
        <div className="flex items-center space-x-3 mr-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
                <FaUserCircle className="mr-2"/>
                Sign in
            </button>
        </div>
    )
}