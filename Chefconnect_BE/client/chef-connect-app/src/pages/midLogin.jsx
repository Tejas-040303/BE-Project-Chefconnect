import { ReactComponent as UserIcon } from '../assets/icons/user-svgrepo-com.svg';
import { ReactComponent as ChefIcon } from '../assets/icons/chef-svgrepo-com.svg';
import { ReactComponent as AdminIcon } from '../assets/icons/administrator-svgrepo-com.svg';
import "../styles/midLogin.css";
function MidLoginPage() {
    return (
        <div className="cards">
            <div className="user-card card" style={{ width: '18rem' }}>
                <a href="#" className="d-block">
                    <UserIcon className="card-img-top" alt="User" />
                </a>
            </div>
            <div className="chef-card card" style={{ width: '18rem' }}>
                <a href="#" className="d-block">
                    <ChefIcon className="card-img-top" alt="Chef" />
                </a>
            </div>
            <div className="admin-card card" style={{ width: '18rem' }}>
                <a href="#" className="d-block">
                    <AdminIcon className="card-img-top" alt="Admin" />
                </a>
            </div>
        </div>
    );
}

export default MidLoginPage;
