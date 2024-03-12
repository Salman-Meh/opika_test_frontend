import UserProfile from './components/user-profile/UserProfile';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <UserProfile
        name='Sara Haust'
        email='sara@gmail.com'
        bio='Experienced backend developer.'
        profilePicture='https://images.unsplash.com/photo-1534528741775-53994a69daeb'
      />
    </div>
  );
}
